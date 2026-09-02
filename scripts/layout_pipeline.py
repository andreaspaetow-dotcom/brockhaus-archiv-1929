#!/usr/bin/env python3
"""Koordinatenbasierte Text/Grafik-Trennung für Brockhaus-Fraktur.

Vier Stufen:
  1. Bounding-Box-Gitter — Text_Fraktur, Graphic, Caption
  2. Zwei-Masken-System — Maske A (Brotschrift-OCR) von der Grafik subtrahieren;
     Caption als Unterkante (Anchor), dynamischer Schutzraum
  3. Archivarische Relayout-Matrix (JSON)
  4. Zuschnitt: Textpixel in der Grafikbox durch Papierfarbe ersetzen
"""
from __future__ import annotations

import argparse
import json
import shutil
import sys
from pathlib import Path

import numpy as np
import pymupdf
from PIL import Image, ImageDraw, ImageFont

ROOT = Path("/workspace")
PDF = Path("/tmp/brockhaus-ia/bd2.pdf")
OUT = ROOT / "public" / "layout"
CAPTIONS_PATH = ROOT / "scripts" / "captions.json"
TARGET_W = 1800
CELL = 6
CREAM = np.array([244, 239, 228], dtype=np.float32)
PAPER_WHITE = np.array([255, 255, 255], dtype=np.float32)
SCAN_OFFSET = 8

KNOWN_CAPTIONS: dict[int, list[str]] = {}
if CAPTIONS_PATH.exists():
    KNOWN_CAPTIONS = {
        int(k): v
        for k, v in json.loads(CAPTIONS_PATH.read_text(encoding="utf-8")).items()
    }


def collect_spans(page: pymupdf.Page) -> list[dict]:
    info = page.get_text("dict")
    spans = []
    for block in info.get("blocks", []):
        if block.get("type") != 0:
            continue
        for line in block.get("lines", []):
            for s in line.get("spans", []):
                text = (s.get("text") or "").strip()
                if not text:
                    continue
                x0, y0, x1, y1 = s["bbox"]
                spans.append(
                    {
                        "x0": float(x0),
                        "y0": float(y0),
                        "x1": float(x1),
                        "y1": float(y1),
                        "size": float(s.get("size") or 8),
                        "text": text,
                    }
                )
    return spans


def render_page(page: pymupdf.Page) -> tuple[np.ndarray, float]:
    zoom = TARGET_W / float(page.rect.width)
    pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.h, pix.w, pix.n)
    if img.shape[2] == 4:
        img = img[:, :, :3]
    return img.copy(), zoom


def scale_box(b: dict, zoom: float) -> tuple[int, int, int, int]:
    return (
        int(round(b["x0"] * zoom)),
        int(round(b["y0"] * zoom)),
        int(round(b["x1"] * zoom)),
        int(round(b["y1"] * zoom)),
    )


def cluster_lines(spans: list[dict], x0: float, x1: float) -> list[dict]:
    col = [s for s in spans if x0 <= 0.5 * (s["x0"] + s["x1"]) < x1]
    col.sort(key=lambda s: (s["y0"], s["x0"]))
    lines: list[dict] = []
    for s in col:
        if not lines or s["y0"] - lines[-1]["y0"] > 3.4:
            lines.append(
                {
                    "y0": s["y0"],
                    "y1": s["y1"],
                    "x0": s["x0"],
                    "x1": s["x1"],
                    "size": s["size"],
                    "text": s["text"],
                }
            )
        else:
            ln = lines[-1]
            ln["x0"] = min(ln["x0"], s["x0"])
            ln["x1"] = max(ln["x1"], s["x1"])
            ln["y1"] = max(ln["y1"], s["y1"])
            ln["size"] = min(ln["size"], s["size"])
            ln["text"] += " " + s["text"]
    return lines


def column_bounds(spans: list[dict], page_w: float) -> list[tuple[float, float]]:
    split = page_w * 0.5
    out = []
    for a, b in ((0.0, split), (split, page_w)):
        xs0 = [s["x0"] for s in spans if a <= 0.5 * (s["x0"] + s["x1"]) < b]
        xs1 = [s["x1"] for s in spans if a <= 0.5 * (s["x0"] + s["x1"]) < b]
        if len(xs0) < 8:
            continue
        out.append((float(np.percentile(xs0, 8)), float(np.percentile(xs1, 92))))
    return out


def is_wrap_left(ln: dict, col: tuple[float, float]) -> bool:
    col_l, col_r = col
    col_w = col_r - col_l
    w = ln["x1"] - ln["x0"]
    return (
        w < 0.78 * col_w
        and ln["x0"] < col_l + 0.24 * col_w
        and ln["x1"] < col_l + 0.82 * col_w
        and not is_body_full(ln, col)
    )


def is_body_full(ln: dict, col: tuple[float, float]) -> bool:
    col_l, col_r = col
    col_w = max(24.0, col_r - col_l)
    return (ln["x1"] - ln["x0"]) >= 0.78 * col_w


def is_caption(ln: dict, col: tuple[float, float], page_h: float) -> bool:
    col_l, col_r = col
    col_w = max(24.0, col_r - col_l)
    w = ln["x1"] - ln["x0"]
    cx = 0.5 * (ln["x0"] + ln["x1"])
    col_cx = 0.5 * (col_l + col_r)
    if ln["y0"] < 28 or ln["y0"] > page_h - 42:
        return False
    if ln["size"] > 8.55:
        return False
    if w < 18 or w > 0.88 * col_w:
        return False
    if ln["x0"] < col_l + 12:
        return False
    if is_wrap_left(ln, col):
        return False
    if not looks_like_caption_text(ln.get("text") or ""):
        return False
    centered = abs(cx - col_cx) < 0.30 * col_w
    inset = ln["x0"] > col_l + 0.12 * col_w and ln["x1"] < col_r - 0.06 * col_w
    small = ln["size"] <= 7.45
    return (centered or inset) and (small or w < 0.62 * col_w)


def looks_like_caption_text(text: str) -> bool:
    """OCR-Müll und Kartenzeichen sind keine Bildunterschrift."""
    letters = sum(ch.isalpha() for ch in text)
    junk = sum(ch in "^~<>|\\/_=*+[]{}■♦●§" for ch in text)
    if letters < 4:
        return False
    if junk >= 2 and letters < 10:
        return False
    punct = sum(not ch.isalnum() and not ch.isspace() for ch in text)
    if punct > letters:
        return False
    return True


def is_label_field(lines: list[dict], cap: dict, col: tuple[float, float]) -> bool:
    """Viele kurze Kleinschriften, die nicht Umfließsatz sind → Kartenbeschriftung."""
    y0, y1 = cap["y0"] - 28, cap["y1"] + 28
    nearby = 0
    for ln in lines:
        if ln["y1"] < y0 or ln["y0"] > y1:
            continue
        if is_wrap_left(ln, col):
            continue
        w = ln["x1"] - ln["x0"]
        if ln["size"] <= 7.2 and w < 72:
            nearby += 1
    return nearby >= 7


def group_captions(lines: list[dict], col: tuple[float, float], page_h: float) -> list[list[dict]]:
    caps = [ln for ln in lines if is_caption(ln, col, page_h)]
    grouped: list[list[dict]] = []
    for ln in caps:
        if grouped and ln["y0"] - grouped[-1][-1]["y1"] < 14:
            grouped[-1].append(ln)
        else:
            grouped.append([ln])
    return grouped


def detect_slots(
    lines: list[dict], col: tuple[float, float], page_h: float
) -> list[dict]:
    col_l, col_r = col
    col_w = max(24.0, col_r - col_l)
    body_full = [ln for ln in lines if is_body_full(ln, col)]
    slots: list[dict] = []

    cap_lines = [ln for ln in lines if is_caption(ln, col, page_h)]
    cap_groups = group_captions(lines, col, page_h)
    if len(cap_lines) >= 6:
        cap_groups = []
    for group in cap_groups:
        cap = group[0]
        cap_box = {
            "x0": min(ln["x0"] for ln in group),
            "y0": min(ln["y0"] for ln in group),
            "x1": max(ln["x1"] for ln in group),
            "y1": max(ln["y1"] for ln in group),
            "size": min(ln["size"] for ln in group),
            "text": " ".join(ln["text"] for ln in group),
        }
        if not looks_like_caption_text(cap_box["text"]):
            continue
        if is_label_field(lines, cap, col):
            continue
        prev_full = [ln for ln in body_full if ln["y1"] < cap["y0"] - 6]
        prev_cap_y = 28.0
        for s in slots:
            prev = s.get("caption")
            if prev:
                prev_cap_y = max(prev_cap_y, prev["y1"] + 2)
        y0 = prev_full[-1]["y1"] + 1 if prev_full else max(28.0, cap["y0"] - 140)
        y0 = max(y0, prev_cap_y)
        y1 = cap["y0"] - 1.15
        wraps = [
            ln
            for ln in lines
            if is_wrap_left(ln, col)
            and ln["size"] >= 7.35
            and y0 - 4 <= ln["y0"] <= cap["y0"] + 2
        ]
        if len(wraps) >= 3:
            kind = "float-right"
            x_text = float(np.percentile([ln["x1"] for ln in wraps], 88))
            # Vertex-Buchstaben sitzen in der Lücke Wrap→Zeichnung; etwas nach links öffnen
            x0 = min(col_r - 0.40 * col_w, x_text - 12.0)
            x0 = max(col_l + 0.30 * col_w, x0)
            x1 = col_r + 2.5
            # Auch kleinere Wrap-Zeilen zählen für die Oberkante (Vertex/Spitze)
            early = [
                ln["y0"]
                for ln in lines
                if is_wrap_left(ln, col)
                and ln["y0"] <= cap["y0"] + 2
                and ln["y0"] >= y0 - 36
            ]
            y0 = min(y0, (min(early) if early else wraps[0]["y0"]) - 12.0)
            if prev_full:
                # Spitze kann in die letzte Vollzeile ragen; Brotschrift wird später abgezogen
                y0 = min(y0, prev_full[-1]["y0"] - 6.0)
        else:
            kind = "block"
            x0 = col_l - 2.5
            x1 = col_r + 2.5
        if y1 - y0 < 22 or x1 - x0 < 28:
            continue
        slots.append(
            {
                "kind": kind,
                "x0": x0,
                "y0": y0,
                "x1": x1,
                "y1": y1,
                "col": col,
                "caption": cap_box,
            }
        )

    # Fallback: wrap clusters without a classified caption
    cluster: list[dict] = []

    def caption_near(y_bottom: float, x0: float, x1: float) -> dict | None:
        best = None
        best_score = 1e9
        for ln in lines:
            d = ln["y0"] - y_bottom
            if d < -10 or d > 28:
                continue
            cx = 0.5 * (ln["x0"] + ln["x1"])
            if cx < x0 - 12 or cx > x1 + 12:
                continue
            if (ln["x1"] - ln["x0"]) > 0.92 * col_w:
                continue
            score = abs(d) + (0 if ln["size"] <= 7.4 else 8)
            if score < best_score:
                best_score = score
                best = ln
        return best

    def flush(extra_cap: dict | None = None):
        nonlocal cluster
        if len(cluster) >= 3:
            y0 = cluster[0]["y0"] - 1
            y1 = cluster[-1]["y1"] + 1
            occupied = any(not (y1 < s["y0"] or y0 > s["y1"]) for s in slots)
            if not occupied and (y1 - y0) >= 28:
                x_text = float(np.percentile([ln["x1"] for ln in cluster], 92))
                x0 = min(col_r - 0.40 * col_w, x_text - 10.0)
                x0 = max(col_l + 0.30 * col_w, x0)
                x1 = col_r + 2.5
                cap = extra_cap or caption_near(y1, x0, x1)
                good_cap = (
                    cap
                    and looks_like_caption_text(cap.get("text") or "")
                    and not is_label_field(lines, cap, col)
                )
                if good_cap:
                    slots.append(
                        {
                            "kind": "float-right",
                            "x0": x0,
                            "y0": y0,
                            "x1": x1,
                            "y1": cap["y0"] - 1.15,
                            "col": col,
                            "caption": {
                                "x0": cap["x0"],
                                "y0": cap["y0"],
                                "x1": cap["x1"],
                                "y1": cap["y1"],
                                "size": cap["size"],
                                "text": cap["text"],
                            },
                        }
                    )
                elif len(cluster) >= 8 and 40 <= (y1 - y0) <= 240:
                    slots.append(
                        {
                            "kind": "float-right",
                            "x0": x0,
                            "y0": y0,
                            "x1": x1,
                            "y1": y1,
                            "col": col,
                            "caption": None,
                        }
                    )
        cluster = []

    for ln in lines:
        if is_caption(ln, col, page_h):
            flush(ln)
            continue
        if is_wrap_left(ln, col) and (ln["size"] >= 7.35 or cluster):
            if cluster and ln["y0"] - cluster[-1]["y1"] > 16:
                flush()
            cluster.append(ln)
        else:
            flush()
    flush()
    return slots


def build_text_grid(
    h: int, w: int, body_spans: list[dict], zoom: float
) -> tuple[np.ndarray, int, int]:
    gh, gw = h // CELL, w // CELL
    text = np.zeros((gh, gw), np.float32)
    for s in body_spans:
        sx0, sy0, sx1, sy1 = scale_box(s, zoom)
        gx0, gy0 = max(0, sx0 // CELL), max(0, sy0 // CELL)
        gx1, gy1 = min(gw - 1, sx1 // CELL), min(gh - 1, sy1 // CELL)
        text[gy0 : gy1 + 1, gx0 : gx1 + 1] = 1.0
    tpad = text.copy()
    tpad[1:, :] = np.maximum(tpad[1:, :], text[:-1, :])
    tpad[:-1, :] = np.maximum(tpad[:-1, :], text[1:, :])
    tpad[:, 1:] = np.maximum(tpad[:, 1:], text[:, :-1])
    tpad[:, :-1] = np.maximum(tpad[:, :-1], text[:, 1:])
    return np.maximum(text, tpad), gh, gw


def ink_trim(
    img: np.ndarray,
    zoom: float,
    slot: dict,
    paper_luma: float,
    text_grid: np.ndarray,
) -> tuple[int, int, int, int, int]:
    h, w = img.shape[:2]
    gh, gw = text_grid.shape
    pad_src = max(3.0, 0.14 * float(slot.get("caption", {}).get("size", 7.5) if slot.get("caption") else 7.5))
    pad_px = int(round(pad_src * zoom / 7.5 * 5))
    pad_px = int(np.clip(pad_px, 3, 8))

    x0 = max(0, int(slot["x0"] * zoom))
    y0 = max(0, int(slot["y0"] * zoom))
    x1 = min(w - 1, int(slot["x1"] * zoom))
    y1 = min(h - 1, int(slot["y1"] * zoom))
    if slot.get("caption"):
        cap_y = int(slot["caption"]["y0"] * zoom)
        y1 = min(y1, cap_y - pad_px)
    else:
        # Wrap ohne Caption-Anker: untere Textzeile (Bildunterschrift) abziehen
        y1 = max(y0 + 24, y1 - max(32, int(0.22 * max(1, y1 - y0))))

    gray = img[y0:y1, x0:x1].mean(axis=2) if y1 > y0 and x1 > x0 else np.zeros((0, 0))
    if gray.size == 0:
        return x0, y0, x1, y1, pad_px
    ink = gray < paper_luma - 22
    # Maske A: Brotschriftzellen nicht als Grafiktinte zählen
    yy, xx = np.ogrid[y0:y1, x0:x1]
    gy = np.clip(yy // CELL, 0, gh - 1)
    gx = np.clip(xx // CELL, 0, gw - 1)
    body = text_grid[gy, gx] > 0.5
    ink = ink & ~body
    rows = ink.any(axis=1)
    cols = ink.any(axis=0)
    if not rows.any() or not cols.any():
        return x0, y0, x1, y1, pad_px
    ry = np.where(rows)[0]
    cx = np.where(cols)[0]
    top_pad = pad_px + (18 if slot["kind"] == "float-right" else 10)
    ny0 = y0 + max(0, int(ry[0]) - top_pad)
    ny1 = y0 + min(gray.shape[0] - 1, int(ry[-1]) + pad_px)
    nx0 = x0 + max(0, int(cx[0]) - pad_px)
    nx1 = x0 + min(gray.shape[1] - 1, int(cx[-1]) + pad_px)
    # Float-right: linke Kante erst nach dem Weißeln der Brotschrift ziehen
    if slot["kind"] == "float-right":
        nx0 = x0
        ny0 = min(ny0, y0)
    if slot.get("caption"):
        ny1 = min(ny1, int(slot["caption"]["y0"] * zoom) - pad_px)
    return nx0, ny0, nx1, ny1, pad_px


def paint_text(
    img: np.ndarray,
    body_spans: list[dict],
    zoom: float,
    crop_box: tuple[int, int, int, int],
    caption_box: list[int] | None,
    paper_rgb: np.ndarray,
    all_spans: list[dict] | None = None,
) -> np.ndarray:
    x0, y0, x1, y1 = crop_box
    out = img.copy()
    pad = 3
    for s in body_spans:
        sx0, sy0, sx1, sy1 = scale_box(s, zoom)
        ox0, oy0 = max(x0, sx0 - pad), max(y0, sy0 - pad)
        ox1, oy1 = min(x1, sx1 + pad), min(y1, sy1 + pad)
        if ox1 <= ox0 or oy1 <= oy0:
            continue
        area_s = max(1, (sx1 - sx0) * (sy1 - sy0))
        if (ox1 - ox0) * (oy1 - oy0) < 0.10 * area_s:
            continue
        out[oy0:oy1, ox0:ox1] = paper_rgb
    # Caption-Reste am unteren Rand der Grafik (eng anliegende Bildunterschrift)
    band_y = y1 - max(14, int(0.18 * (y1 - y0)))
    for s in all_spans or []:
        sx0, sy0, sx1, sy1 = scale_box(s, zoom)
        if sy1 < band_y:
            continue
        ox0, oy0 = max(x0, sx0 - 1), max(band_y, sy0 - 1)
        ox1, oy1 = min(x1, sx1 + 1), min(y1, sy1 + 2)
        if ox1 > ox0 and oy1 > oy0:
            out[oy0:oy1, ox0:ox1] = paper_rgb
    # Umfließsatz, der in die Grafikbox ragt (links / oben)
    gw = max(1, x1 - x0)
    gh = max(1, y1 - y0)
    for s in all_spans or []:
        sx0, sy0, sx1, sy1 = scale_box(s, zoom)
        if sy1 < y0 or sy0 > y1 or sx1 < x0 or sx0 > x1:
            continue
        from_wrap = sx0 < x0 + 0.18 * gw
        from_top = sy0 < y0 + 0.10 * gh and (sx1 - sx0) > 0.45 * gw
        if not (from_wrap or from_top):
            continue
        ox0, oy0 = max(x0, sx0 - 2), max(y0, sy0 - 2)
        ox1, oy1 = min(x1, sx1 + 2), min(y1, sy1 + 2)
        if ox1 > ox0 and oy1 > oy0:
            out[oy0:oy1, ox0:ox1] = paper_rgb
    return out


def wipe_left_wrap(crop: np.ndarray) -> np.ndarray:
    """Umfließsatz, den OCR nicht trifft: kurze Tintenläufe am linken Rand, durch Lücke getrennt."""
    if crop.size == 0:
        return crop
    h, w = crop.shape[:2]
    if w < 40 or h < 40:
        return crop
    gray = crop.mean(axis=2)
    ink = gray < 160
    lim = max(12, int(0.18 * w))
    out = crop.copy()
    for y in range(h):
        row = ink[y]
        xs = np.where(row)[0]
        if xs.size == 0 or int(xs[0]) > 3:
            continue
        x1 = int(xs[0])
        while x1 + 1 < w and row[x1 + 1]:
            x1 += 1
        x2 = x1 + 1
        while x2 < w and not row[x2]:
            x2 += 1
        gap = (x2 - x1 - 1) if x2 < w else (w - x1)
        if x1 < lim and gap >= 5:
            y0e, y1e = max(0, y - 1), min(h, y + 2)
            out[y0e:y1e, 0 : min(w, x1 + 3)] = 255
    return out


def tight_ink(crop: np.ndarray, pad: int = 6) -> tuple[np.ndarray, int, int]:
    """Nach dem Weißeln der Brotschrift: auf verbleibende Grafiktinte zuschneiden."""
    if crop.size == 0:
        return crop, 0, 0
    h, w = crop.shape[:2]
    gray = crop.mean(axis=2)
    ink = gray < 168
    if not ink.any():
        return crop, 0, 0
    rows = np.where(ink.any(axis=1))[0]
    cols = np.where(ink.any(axis=0))[0]
    y0 = max(0, int(rows[0]) - pad)
    y1 = min(h, int(rows[-1]) + pad + 1)
    x0 = max(0, int(cols[0]) - pad)
    x1 = min(w, int(cols[-1]) + pad + 1)
    if y1 - y0 < 24 or x1 - x0 < 24:
        return crop, 0, 0
    return crop[y0:y1, x0:x1].copy(), x0, y0


def sample_paper(img: np.ndarray, box) -> np.ndarray:
    x0, y0, x1, y1 = box
    patch = img[max(0, y0) : min(img.shape[0], y1), max(0, x0) : min(img.shape[1], x1)]
    if patch.size == 0:
        return CREAM.astype(np.uint8)
    luma = patch.mean(axis=2)
    thr = np.percentile(luma, 80)
    lights = patch[luma >= thr]
    if len(lights) < 10:
        rgb = patch.reshape(-1, 3).mean(axis=0)
    else:
        rgb = lights.mean(axis=0)
    mixed = rgb
    return np.clip(mixed, 0, 255).astype(np.uint8)


def is_photo(crop: np.ndarray) -> bool:
    if crop.size == 0:
        return False
    chroma = crop.astype(np.float32)
    rg = np.abs(chroma[:, :, 0] - chroma[:, :, 1])
    gb = np.abs(chroma[:, :, 1] - chroma[:, :, 2])
    color = float((rg + gb).mean()) > 14
    luma = crop.mean(axis=2)
    # Zeichnungen (Linien, Blatt) haben wenig Dunkelanteil; Photos füllen die Fläche
    dark = float((luma < 160).mean())
    if dark < 0.20:
        return False
    return color


def paper_from_crop(crop: np.ndarray) -> np.ndarray:
    flat = crop.reshape(-1, 3).astype(np.float32)
    return np.clip(np.percentile(flat, 95, axis=0), 8, 255).astype(np.float32)


def neutralize_paper(crop: np.ndarray, paper_rgb: np.ndarray, photo: bool) -> np.ndarray:
    """Gelbstich entfernen: Papierweiß-Balance, Zeichnungen zusätzlich gebleicht."""
    if crop.size == 0:
        return crop
    c = crop.astype(np.float32)
    p = np.maximum(np.asarray(paper_rgb, dtype=np.float32), 8.0)
    gain = np.clip(255.0 / p, 1.0, 2.2)
    out = np.clip(c * gain, 0, 255)
    luma = out.mean(axis=2)
    r, g, b = out[:, :, 0], out[:, :, 1], out[:, :, 2]
    yellow = r - b
    if photo:
        out[luma > 205] = 255
        paperish = (luma > 158) & (r + 10 >= g) & (yellow > 5)
        shift = np.clip(yellow * 0.70, 0, 90)
        out[:, :, 2] = np.where(paperish, np.clip(b + shift, 0, 255), b)
        out[:, :, 0] = np.where(paperish, np.clip(r - shift * 0.18, 0, 255), r)
        out[:, :, 1] = np.where(paperish, np.clip(g - shift * 0.10, 0, 255), g)
        luma = out.mean(axis=2)
        r, g, b = out[:, :, 0], out[:, :, 1], out[:, :, 2]
        out[luma > 210] = 255
        pale = (luma > 185) & ((r - b) > 6) & (r + 8 >= g)
        out[pale] = 255
    else:
        sat = np.maximum(np.maximum(r, g), b) - np.minimum(np.minimum(r, g), b)
        leaf = (g > r + 6) & (g > b + 6) & (sat > 16) & (luma < 210)
        ink = luma < 155
        keep = leaf | ink
        yellow_paper = (luma > 135) & (r + 8 >= g) & (yellow > 5) & ~keep
        near_white = (luma > 188) & ~keep
        out[yellow_paper | near_white] = 255
    return out.astype(np.uint8)


def drop_trailing_text_rows(crop: np.ndarray, paper_luma: float) -> int:
    """Caption unter der Grafik: kurze Tintenläufe (Buchstaben), nicht die Zeichnung."""
    if crop.size == 0:
        return 0
    gray = crop.mean(axis=2)
    ink = gray < min(168.0, float(paper_luma) - 40.0)
    h, w = ink.shape
    if h < 36 or w < 16:
        return h
    max_run = np.zeros(h, dtype=np.int32)
    for i in range(h):
        padded = np.concatenate(([False], ink[i], [False]))
        d = np.diff(padded.astype(np.int8))
        starts = np.where(d == 1)[0]
        ends = np.where(d == -1)[0]
        if len(starts) and len(ends):
            max_run[i] = int((ends - starts).max())
    thresh = max(16, int(0.22 * w))
    max_cut = min(72, max(36, int(0.22 * h)))
    i = h - 1
    trimmed = 0
    while i > h - max_cut and max_run[i] < thresh:
        trimmed += 1
        i -= 1
    if trimmed < 10:
        return h
    return min(h, i + 4)


def clean_drawing(crop: np.ndarray) -> np.ndarray:
    luma = crop.mean(axis=2)
    thr = float(np.percentile(luma, 62))
    out = crop.copy()
    mask = luma > thr - 4
    out[mask] = 255
    return out


def body_spans_for_mask(
    spans: list[dict], slots: list[dict], page_h: float
) -> list[dict]:
    """Maske A: Brotschrift, nicht Caption, nicht Kartenbeschriftung in der Grafik."""
    cap_boxes = []
    graphic_slots = []
    for s in slots:
        graphic_slots.append(s)
        if s.get("caption"):
            cap_boxes.append(s["caption"])
    body = []
    for sp in spans:
        cy = 0.5 * (sp["y0"] + sp["y1"])
        cx = 0.5 * (sp["x0"] + sp["x1"])
        in_cap = False
        for cap in cap_boxes:
            if cap["x0"] - 4 <= cx <= cap["x1"] + 4 and cap["y0"] - 2 <= cy <= cap["y1"] + 4:
                in_cap = True
                break
        if in_cap:
            continue
        in_graphic_interior = False
        for slot in graphic_slots:
            if slot["x0"] + 8 <= cx <= slot["x1"] - 4 and slot["y0"] + 4 <= cy <= slot["y1"] - 4:
                if not is_wrap_left(
                    {"x0": sp["x0"], "x1": sp["x1"], "y0": sp["y0"], "y1": sp["y1"]},
                    slot["col"],
                ):
                    in_graphic_interior = True
                    break
        if in_graphic_interior:
            continue
        if sp["y0"] < 26 or sp["y0"] > page_h - 36:
            continue
        body.append(sp)
    return body


def line_boxes(lines: list[dict], zoom: float, page_h: float, col: tuple[float, float]) -> list[dict]:
    boxes = []
    for ln in lines:
        if ln["y0"] < 26 or ln["y0"] > page_h - 36:
            continue
        x0, y0, x1, y1 = scale_box(ln, zoom)
        cat = "Text_Fraktur"
        if is_caption(ln, col, page_h):
            cat = "Caption"
        boxes.append(
            {
                "category": cat,
                "x1": x0,
                "y1": y0,
                "x2": x1,
                "y2": y1,
            }
        )
    return boxes


def text_zones_for_page(
    cols: list[tuple[float, float]],
    slots: list[dict],
    zoom: float,
    canvas: tuple[int, int],
    header_y: int,
    footer_y: int,
) -> list[dict]:
    w, h = canvas
    zones = []
    zid = 0
    for i, col in enumerate(cols):
        col_l = int(col[0] * zoom)
        col_r = int(col[1] * zoom)
        y_cursor = header_y
        col_slots = sorted(
            [s for s in slots if s["col"] == col], key=lambda s: s["y0"]
        )
        cuts = []
        for s in col_slots:
            gy0 = int(s["_px"][1])
            gy1 = int(s["_px"][3])
            if s.get("caption"):
                gy1 = max(gy1, int(s["caption"]["y1"] * zoom) + 2)
            cuts.append((gy0, gy1, s))
        cuts.sort()
        for gy0, gy1, s in cuts:
            if gy0 - y_cursor > 18:
                zid += 1
                zones.append(
                    {
                        "type": "text_zone",
                        "id": f"tz_{zid:03d}",
                        "column": "left" if i == 0 else "right",
                        "original_coordinates": {
                            "x1": col_l,
                            "y1": y_cursor,
                            "x2": col_r,
                            "y2": gy0 - 4,
                        },
                    }
                )
            if s["kind"] == "float-right":
                gx0 = int(s["_px"][0])
                zid += 1
                zones.append(
                    {
                        "type": "text_zone",
                        "id": f"tz_{zid:03d}",
                        "column": "left" if i == 0 else "right",
                        "wrap": s.get("_id", ""),
                        "original_coordinates": {
                            "x1": col_l,
                            "y1": gy0,
                            "x2": max(col_l + 8, gx0 - 6),
                            "y2": gy1,
                        },
                    }
                )
            y_cursor = gy1 + 4
        if footer_y - y_cursor > 18:
            zid += 1
            zones.append(
                {
                    "type": "text_zone",
                    "id": f"tz_{zid:03d}",
                    "column": "left" if i == 0 else "right",
                    "original_coordinates": {
                        "x1": col_l,
                        "y1": y_cursor,
                        "x2": col_r,
                        "y2": footer_y,
                    },
                }
            )
    return zones


def match_known_captions(printed: int, graphics: list[dict]) -> None:
    known = KNOWN_CAPTIONS.get(printed)
    if not known:
        return
    caps = [g for g in graphics if g.get("caption")]
    caps.sort(key=lambda g: g["original_coordinates"]["y1"])
    for i, g in enumerate(caps):
        if i >= len(known):
            break
        # attach to following caption element via id later
        g["_clean"] = known[i]


def process_page(doc, printed: int, scan_file: int):
    page = doc[scan_file - 1]
    img, zoom = render_page(page)
    h, w = img.shape[:2]
    page_h = float(page.rect.height)
    spans = collect_spans(page)
    gray = img.mean(axis=2)
    paper_luma = float(np.percentile(gray, 72))
    cols = column_bounds(spans, page.rect.width)
    slots: list[dict] = []
    col_lines: list[tuple[tuple[float, float], list[dict]]] = []
    mask_a_boxes: list[dict] = []
    for col in cols:
        lines = cluster_lines(spans, col[0] - 8, col[1] + 8)
        col_lines.append((col, lines))
        slots.extend(detect_slots(lines, col, page_h))
        mask_a_boxes.extend(line_boxes(lines, zoom, page_h, col))

    slots = [s for s in slots if (s["y1"] - s["y0"]) >= 22 and (s["x1"] - s["x0"]) >= 28]
    slots.sort(key=lambda s: (s["y0"], s["x0"]))
    kept: list[dict] = []
    for s in slots:
        skip = False
        for k in list(kept):
            if not (s["x1"] < k["x0"] or s["x0"] > k["x1"] or s["y1"] < k["y0"] or s["y0"] > k["y1"]):
                s_cap, k_cap = bool(s.get("caption")), bool(k.get("caption"))
                if s_cap and not k_cap:
                    kept.remove(k)
                    break
                if k_cap and not s_cap:
                    skip = True
                    break
                sa = (s["x1"] - s["x0"]) * (s["y1"] - s["y0"])
                ka = (k["x1"] - k["x0"]) * (k["y1"] - k["y0"])
                if sa > ka:
                    kept.remove(k)
                    break
                skip = True
                break
        if not skip:
            kept.append(s)
    slots = kept
    if len(slots) > 5:
        slots.sort(
            key=lambda s: (s["x1"] - s["x0"]) * (s["y1"] - s["y0"]),
            reverse=True,
        )
        slots = slots[:4]
        slots.sort(key=lambda s: (s["y0"], s["x0"]))

    body_spans = body_spans_for_mask(spans, slots, page_h)
    text_grid, _, _ = build_text_grid(h, w, body_spans, zoom)

    elements: list[dict] = []
    overlay = Image.fromarray(img)
    draw = ImageDraw.Draw(overlay, "RGBA")
    try:
        font = ImageFont.load_default()
    except Exception:
        font = None

    for box in mask_a_boxes:
        if box["category"] != "Text_Fraktur":
            continue
        draw.rectangle(
            [box["x1"], box["y1"], box["x2"], box["y2"]],
            outline=(46, 120, 72, 110),
            width=1,
        )

    gid = 0
    for slot in slots:
        x0, y0, x1, y1, pad_px = ink_trim(img, zoom, slot, paper_luma, text_grid)
        if x1 - x0 < 40 or y1 - y0 < 40:
            continue
        # Tinte im Inneren? Leere Satzlücken verwerfen (Zeichnungen sind dünn)
        patch = img[y0:y1, x0:x1].mean(axis=2)
        if patch.size == 0:
            continue
        if float((patch < paper_luma - 18).mean()) < 0.008:
            continue
        paper = sample_paper(img, (x0, y0, min(x1, x0 + 40), min(y1, y0 + 20)))
        cap = slot.get("caption")
        cap_box = [int(v * zoom) for v in (cap["x0"], cap["y0"], cap["x1"], cap["y1"])] if cap else None
        painted = paint_text(
            img, body_spans, zoom, (x0, y0, x1, y1), cap_box, paper, all_spans=spans
        )
        crop = painted[y0:y1, x0:x1].copy()
        if slot["kind"] == "float-right":
            crop = wipe_left_wrap(crop)
        crop, dx, dy = tight_ink(crop, pad=6 if slot["kind"] == "float-right" else 8)
        x0 += dx
        y0 += dy
        x1 = x0 + crop.shape[1]
        y1 = y0 + crop.shape[0]
        if slot["kind"] == "float-right" or not cap:
            new_h = drop_trailing_text_rows(crop, paper_luma)
            if new_h < crop.shape[0] - 8:
                crop = crop[:new_h].copy()
                y1 = y0 + new_h
        if crop.shape[0] < 40 or crop.shape[1] < 40:
            continue
        gid += 1
        gid_s = f"img_{gid:03d}"
        slot["_id"] = gid_s
        slot["_px"] = (x0, y0, x1, y1)
        photo = is_photo(crop)
        paper2 = paper_from_crop(crop)
        crop = neutralize_paper(crop, paper2, photo)
        graphic = {
            "type": "graphic",
            "category": "Graphic",
            "id": gid_s,
            "original_coordinates": {"x1": x0, "y1": y0, "x2": x1, "y2": y1},
            "optimized_file": f"g{gid:02d}.png",
            "kind": "photographie" if photo else "zeichnung",
            "slot": slot["kind"],
            "padding_px": pad_px,
            "caption": cap["text"] if cap else "",
            "_crop": crop,
        }
        elements.append(graphic)
        if cap and cap_box:
            elements.append(
                {
                    "type": "caption",
                    "category": "Caption",
                    "associated_with": gid_s,
                    "original_coordinates": {
                        "x1": cap_box[0],
                        "y1": cap_box[1],
                        "x2": cap_box[2],
                        "y2": cap_box[3],
                    },
                    "text_ocr": cap["text"],
                    "text_clean": cap["text"],
                }
            )
            draw.rectangle(cap_box, outline=(40, 90, 200, 230), width=2)
            if font:
                draw.text((cap_box[0], max(0, cap_box[1] - 12)), "Caption", fill=(40, 90, 200, 255), font=font)
        draw.rectangle([x0, y0, x1, y1], outline=(180, 48, 36, 230), width=3)
        if font:
            draw.text((x0 + 4, max(0, y0 - 12)), f"Graphic {gid_s}", fill=(180, 48, 36, 255), font=font)

    match_known_captions(printed, [e for e in elements if e["type"] == "graphic"])
    known = KNOWN_CAPTIONS.get(printed, [])
    graphics = [e for e in elements if e["type"] == "graphic"]
    captions = [e for e in elements if e["type"] == "caption"]
    graphics.sort(key=lambda e: (e["original_coordinates"]["y1"], e["original_coordinates"]["x1"]))
    for i, g in enumerate(graphics):
        if i < len(known):
            g["_clean"] = known[i]
            g["caption"] = known[i]
    for cap_el in captions:
        assoc = cap_el["associated_with"]
        g = next((x for x in graphics if x["id"] == assoc), None)
        if g and g.get("_clean"):
            cap_el["text_clean"] = g["_clean"]
    have_cap = {c["associated_with"] for c in captions}
    for g in graphics:
        if g["id"] in have_cap:
            continue
        c = g["original_coordinates"]
        cap_h = max(28, int((c["x2"] - c["x1"]) * 0.06))
        elements.append(
            {
                "type": "caption",
                "category": "Caption",
                "associated_with": g["id"],
                "original_coordinates": {
                    "x1": c["x1"],
                    "y1": c["y2"] + 4,
                    "x2": c["x2"],
                    "y2": c["y2"] + 4 + cap_h,
                },
                "text_ocr": g.get("caption") or "",
                "text_clean": g.get("_clean") or g.get("caption") or "",
            }
        )

    header_y = int(52 * zoom)
    footer_y = h - int(36 * zoom)
    # _px must exist on slots that produced graphics
    used_slots = [s for s in slots if s.get("_px")]
    zones = text_zones_for_page(cols, used_slots, zoom, (w, h), header_y, footer_y)

    col_json = []
    for i, col in enumerate(cols):
        col_json.append(
            {
                "id": "left" if i == 0 else "right",
                "original_coordinates": {
                    "x1": int(col[0] * zoom),
                    "y1": header_y,
                    "x2": int(col[1] * zoom),
                    "y2": footer_y,
                },
            }
        )

    manifest = {
        "page_id": f"brockhaus_bd2_p{printed:03d}",
        "printed": printed,
        "scan_file": scan_file,
        "canvas_size": {"width": w, "height": h},
        "columns": col_json,
        "pipeline": {
            "step_1": "Bounding-Box-Gitter: Text_Fraktur · Graphic · Caption",
            "step_2": "Zwei-Masken: Maske A (Brotschrift-OCR) von der Grafikfläche subtrahiert",
            "step_3": "Relayout-Matrix mit original_coordinates",
            "step_4": "Rekonstruktion auf denselben Koordinaten",
            "caption": "kleinere Fraktur direkt unter der Grafik als Unterkanten-Anker",
            "padding_px": 5,
        },
        "mask_a": [b for b in mask_a_boxes if b["category"] == "Text_Fraktur"],
        "elements": [
            {k: v for k, v in e.items() if not k.startswith("_")}
            for e in (elements + zones)
        ],
    }
    return manifest, elements, overlay, img


def write_page(out_dir: Path, manifest, elements, overlay, page_img):
    out_dir.mkdir(parents=True, exist_ok=True)
    for old in out_dir.glob("g*.png"):
        old.unlink()
    Image.fromarray(page_img).save(out_dir / "page.jpg", quality=82)
    overlay.save(out_dir / "overlay.png")
    for e in elements:
        if e.get("type") != "graphic":
            continue
        crop = e.pop("_crop", None)
        e.pop("_clean", None)
        if crop is None:
            continue
        Image.fromarray(crop).save(out_dir / e["optimized_file"])
    (out_dir / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )


def rebuild_index():
    index = []
    if not OUT.exists():
        return
    for d in sorted(OUT.iterdir()):
        man = d / "manifest.json"
        if not man.exists():
            continue
        data = json.loads(man.read_text(encoding="utf-8"))
        n_g = sum(1 for e in data.get("elements", []) if e.get("type") == "graphic")
        if n_g < 1:
            continue
        printed = data["printed"]
        index.append(
            {
                "printed": printed,
                "page_id": data["page_id"],
                "href": f"/layout/p{printed:02d}/manifest.json"
                if printed < 100
                else f"/layout/p{printed:03d}/manifest.json",
                "overlay": f"/layout/{d.name}/overlay.png",
                "page": f"/layout/{d.name}/page.jpg",
                "dir": d.name,
                "graphics": n_g,
            }
        )
    index.sort(key=lambda r: r["printed"])
    (OUT / "index.json").write_text(
        json.dumps(index, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    return index


def parse_pages(spec: str) -> list[int]:
    pages: list[int] = []
    for part in spec.split(","):
        part = part.strip()
        if not part:
            continue
        if "-" in part:
            a, b = part.split("-", 1)
            pages.extend(range(int(a), int(b) + 1))
        else:
            pages.append(int(part))
    return pages


def detect_candidates(doc, pages: list[int]) -> list[int]:
    found = []
    for printed in pages:
        scan = printed + SCAN_OFFSET
        if scan < 1 or scan > doc.page_count:
            continue
        page = doc[scan - 1]
        spans = collect_spans(page)
        cols = column_bounds(spans, page.rect.width)
        n = 0
        for col in cols:
            lines = cluster_lines(spans, col[0] - 8, col[1] + 8)
            n += len(detect_slots(lines, col, float(page.rect.height)))
        if n:
            found.append(printed)
    return found


def dest_dir(printed: int) -> Path:
    name = f"p{printed:02d}" if printed < 100 else f"p{printed:03d}"
    return OUT / name


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pages", default="1-3", help="Druckseiten, z.B. 1-3 oder 1,2,3,10")
    ap.add_argument("--auto", action="store_true", help="nur Seiten mit erkanntem Grafikslot")
    args = ap.parse_args()
    pages = parse_pages(args.pages)
    if not PDF.exists():
        print("PDF missing", PDF, file=sys.stderr)
        sys.exit(1)
    doc = pymupdf.open(PDF)
    if args.auto:
        pages = detect_candidates(doc, pages)
        print("candidates", pages)
    for printed in pages:
        scan = printed + SCAN_OFFSET
        print(f"S.{printed} IA {scan} …", end=" ", flush=True)
        result = process_page(doc, printed, scan)
        if not result:
            print("skip")
            continue
        manifest, elements, overlay, img = result
        dest = dest_dir(printed)
        n_g = sum(1 for e in manifest["elements"] if e.get("type") == "graphic")
        if n_g < 1:
            if dest.exists():
                shutil.rmtree(dest)
            print("no graphics")
            continue
        write_page(dest, manifest, elements, overlay, img)
        print(f"graphics={n_g} → {dest}")
    idx = rebuild_index()
    print("index", len(idx or []), "pages")


if __name__ == "__main__":
    main()
