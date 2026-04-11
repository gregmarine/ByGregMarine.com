#!/usr/bin/env python3
"""
fix-anchor-links.py

Scans all markdown files under Website-v2/src/content/blog/ and replaces
anchor links containing `#_` with `#`, removing the legacy underscore prefix
added by the old Astro build that rehype-slug no longer generates.

Usage:
  python fix-anchor-links.py          # dry run (shows proposed changes)
  python fix-anchor-links.py --write  # apply changes in place
"""

import sys
import re
from pathlib import Path

DRY_RUN = "--write" not in sys.argv
BLOG_DIR = Path(__file__).parent / "Website-v2/src/content/blog"
PATTERN = re.compile(r"#_")

files_scanned = 0
files_matched = 0
total_replacements = 0

for md_file in sorted(BLOG_DIR.rglob("*.md")):
    files_scanned += 1
    original = md_file.read_text(encoding="utf-8")

    count = len(PATTERN.findall(original))
    if count == 0:
        continue

    files_matched += 1
    total_replacements += count
    updated = PATTERN.sub("#", original)

    if DRY_RUN:
        print(f"\n{'='*60}")
        print(f"FILE: {md_file.relative_to(Path(__file__).parent)}")
        print(f"  {count} replacement(s) — proposed changes:")
        for i, line in enumerate(original.splitlines(), start=1):
            if "#_" in line:
                new_line = PATTERN.sub("#", line)
                print(f"  line {i:4d}  - {line.rstrip()}")
                print(f"           + {new_line.rstrip()}")
    else:
        md_file.write_text(updated, encoding="utf-8")
        print(f"  UPDATED: {md_file.relative_to(Path(__file__).parent)}  ({count} replacement(s))")

print()
print("=" * 60)
mode_label = "DRY RUN" if DRY_RUN else "DONE"
print(f"[{mode_label}] Summary")
print(f"  Files scanned     : {files_scanned}")
print(f"  Files with matches: {files_matched}")
print(f"  Total replacements: {total_replacements}")
if DRY_RUN:
    print()
    print("  No files were modified. Run with --write to apply changes.")
