#!/usr/bin/env python3
"""
Convert echoledger-mark.png from "white disc on black square" to
"white disc on transparent background" by making all pixels
darker than a threshold transparent.

Usage:
    python3 docs/process_logo.py

Reads:  public/echoledger-mark.png
Writes: public/echoledger-mark.png  (overwrites with transparent version)
"""

from pathlib import Path
from PIL import Image

REPO_ROOT = Path(__file__).resolve().parent.parent
SRC = REPO_ROOT / "public" / "echoledger-mark.png"
DST = SRC  # overwrite in place

# Pixels with all RGB channels at or below this value are treated as the
# background and made fully transparent. Set high enough to catch the black
# square (which is pure black or near-black after JPEG/PNG compression
# artifacts) but low enough to preserve the dark graph elements inside the
# white disc. The graph elements are drawn at the disc's center; the
# threshold cutoff doesn't reach them because they're surrounded by white
# pixels and the algorithm operates per-pixel, not per-region.
BG_THRESHOLD = 30


def main() -> None:
    img = Image.open(SRC).convert("RGBA")
    pixels = img.load()
    w, h = img.size

    changed = 0
    for y in range(h):
        for x in range(w):
            r, g, b, _ = pixels[x, y]
            if r <= BG_THRESHOLD and g <= BG_THRESHOLD and b <= BG_THRESHOLD:
                pixels[x, y] = (0, 0, 0, 0)
                changed += 1

    img.save(DST, "PNG")
    total = w * h
    pct = 100 * changed / total
    print(f"Processed {SRC}")
    print(f"  Size: {w}x{h}")
    print(f"  Pixels made transparent: {changed:,} of {total:,} ({pct:.1f}%)")
    print(f"  Wrote: {DST}")


if __name__ == "__main__":
    main()
