#!/usr/bin/env python3
"""Rasterize IA Band II PDF pages for in-app Scan comparison."""
from __future__ import annotations

import re
from pathlib import Path

import pymupdf

ROOT = Path("/workspace")
PDF = Path("/tmp/brockhaus-ia/bd2.pdf")
OUT = ROOT / "public" / "scans"
VOL = ROOT / "src" / "data" / "volume"
PAGES_TS = ROOT / "src" / "data" / "pages.ts"
TARGET_W = 1800
JPEG_Q = 72


def jobs_from_volume() -> list[tuple[int, str]]:
    """Return (pdf_page_1based, outfile_stem) for each transcribed page."""
    jobs: list[tuple[int, str]] = []
    # Inline S. 1–3 in pages.ts
    for printed, scan in ((1, 9), (2, 10), (3, 11)):
        jobs.append((scan, f"p{printed:02d}"))
    for f in sorted(VOL.glob("p*.ts"), key=lambda p: p.name):
        text = f.read_text()
        printed_m = re.search(r"printed:\s*([0-9.]+)", text)
        scan_m = re.search(r"scanFile:\s*(\d+)", text)
        if not printed_m or not scan_m:
            continue
        printed = float(printed_m.group(1))
        scan = int(scan_m.group(1))
        if printed != int(printed):
            stem = f"p{int(printed):02d}tafel"
        else:
            stem = f"p{int(printed):02d}"
        jobs.append((scan, stem))
    # unique by stem, last wins except keep first for duplicates of same stem+scan
    by_stem: dict[str, int] = {}
    for scan, stem in jobs:
        by_stem[stem] = scan
    return [(scan, stem) for stem, scan in sorted(by_stem.items(), key=lambda kv: kv[0])]


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    jobs = jobs_from_volume()
    doc = pymupdf.open(PDF)
    print(f"pdf pages={doc.page_count} jobs={len(jobs)}")
    ok = 0
    for scan, stem in jobs:
        idx = scan - 1
        if idx < 0 or idx >= doc.page_count:
            print("SKIP out of range", stem, scan)
            continue
        page = doc[idx]
        zoom = TARGET_W / float(page.rect.width)
        pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
        dest = OUT / f"{stem}.jpg"
        dest.write_bytes(pix.tobytes("jpeg", jpg_quality=JPEG_Q))
        ok += 1
        if ok % 20 == 0 or ok == len(jobs):
            print(f"  {ok}/{len(jobs)} {stem}.jpg {dest.stat().st_size} {pix.width}x{pix.height}")
    print("done", ok, "files in", OUT)


if __name__ == "__main__":
    main()
