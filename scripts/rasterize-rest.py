#!/usr/bin/env python3
"""Rasterize remaining Band II pages from IA PDF and emit stub EncPages."""
from __future__ import annotations

import json
import re
from pathlib import Path

import pymupdf

PDF = Path("/tmp/brockhaus-ia/bd2.pdf")
OUT = Path("/workspace/public/scans")
REST_TS = Path("/workspace/src/data/volume/rest.ts")
MAP_JSON = Path("/workspace/artifacts/scan-map.json")
TARGET_W = 1400
JPEG_Q = 58
START_IA = 206  # printed 174
START_PRINTED = 174
END_IA_INCLUSIVE = 920  # last lexicon page (Blausucht)


def is_plate(page: pymupdf.Page) -> bool:
    h = page.rect.height
    t = page.get_text("text") or ""
    if h >= 672:
        return True
    quads = len(re.findall(r"\b[A-H]\s*[1-8]\b", t))
    if quads >= 12:
        return True
    low = t.lower()
    if "verzeichnis" in low and ("plan" in low or "stra" in low):
        return True
    return False


def header_bits(page: pymupdf.Page) -> tuple[str, str]:
    t = (page.get_text("text") or "").replace("\n", " ").strip()
    # first tokens are often running heads already half-OCR'd
    m = re.match(r"(.{0,40}?)\s+[—–-]\s+(.{0,40})", t)
    if m:
        left = re.sub(r"\s+", " ", m.group(1)).strip()[:48]
        right = re.sub(r"\s+", " ", m.group(2)).strip()[:48]
        return left or "…", right or "…"
    tok = t[:48].strip() or "…"
    return tok, tok


def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    doc = pymupdf.open(PDF)
    jobs: list[dict] = []
    printed = START_PRINTED - 1
    plates: list[dict] = []
    for ia in range(START_IA, END_IA_INCLUSIVE + 1):
        page = doc[ia - 1]
        if is_plate(page):
            plates.append({"ia": ia, "kind": "tafel"})
            stem = f"p{max(printed, START_PRINTED):03d}t{ia}"
            dest = OUT / f"{stem}.jpg"
            if not dest.exists():
                zoom = TARGET_W / float(page.rect.width)
                pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
                dest.write_bytes(pix.tobytes("jpeg", jpg_quality=JPEG_Q))
            continue
        printed += 1
        hl, hr = header_bits(page)
        stem = f"p{printed:03d}"
        dest = OUT / f"{stem}.jpg"
        if not dest.exists():
            zoom = TARGET_W / float(page.rect.width)
            pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
            dest.write_bytes(pix.tobytes("jpeg", jpg_quality=JPEG_Q))
        if printed >= 179:
            jobs.append(
                {
                    "printed": printed,
                    "scanFile": ia,
                    "headerLeft": hl,
                    "headerRight": hr,
                    "scanSrc": f"/scans/{stem}.jpg",
                }
            )
        if printed % 50 == 0:
            print(f"  printed {printed} IA {ia} {dest.stat().st_size}")

    extras = []
    for ia, label in (
        (921, "Bemerkungen zur Benutzung"),
        (922, "Abkürzungen"),
        (923, "Kartenhinweise"),
        (924, "Kartenübersicht"),
    ):
        page = doc[ia - 1]
        stem = f"p-end-{ia}"
        dest = OUT / f"{stem}.jpg"
        if not dest.exists():
            zoom = TARGET_W / float(page.rect.width)
            pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
            dest.write_bytes(pix.tobytes("jpeg", jpg_quality=JPEG_Q))
        extras.append({"ia": ia, "label": label, "scanSrc": f"/scans/{stem}.jpg"})

    MAP_JSON.write_text(
        json.dumps(
            {"pages": jobs, "plates": plates, "back": extras, "last_printed": printed},
            indent=2,
            ensure_ascii=False,
        )
        + "\n"
    )

    lines = [
        'import type { EncPage } from "../types";',
        'import { N } from "./helpers";',
        "",
        "/** Scan-Stubs S. 174 ff. aus IA dergrossebrockha02leip; Transkription folgt. */",
        "export const REST_PAGES: EncPage[] = [",
    ]
    for j in jobs:
        lines.append("  {")
        lines.append(f"    printed: {j['printed']},")
        lines.append(f"    scanFile: {j['scanFile']},")
        lines.append(f"    headerLeft: {js_str(j['headerLeft'])},")
        lines.append(f"    headerRight: {js_str(j['headerRight'])},")
        lines.append('    catchword: "",')
        lines.append(f"    scanSrc: {js_str(j['scanSrc'])},")
        lines.append(
            '    left: [N("Fraktur-Digitalisat aus dem Internet Archive (dergrossebrockha02leip). Antiqua-Transkription folgt.")],'
        )
        lines.append("    right: [],")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    REST_TS.write_text("\n".join(lines) + "\n")
    print("wrote", len(jobs), "pages last", printed, "plates", len(plates), "extras", len(extras))


if __name__ == "__main__":
    main()
