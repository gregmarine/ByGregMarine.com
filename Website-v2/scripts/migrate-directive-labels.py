#!/usr/bin/env python3
"""
migrate-directive-labels.py

Converts old VitePress-style container directive syntax to the remark-directive
bracket syntax required by Astro's markdown pipeline.

Before:  ::: details Matthew 6:34 AMP
After:   ::: details[Matthew 6:34 AMP]

Before:  ::: warning Content Guidance
After:   ::: warning[Content Guidance]

Only opening fence lines are touched (lines where a directive name is followed
by bare text). Closing fences (bare `:::`) and lines that already use brackets
are left unchanged.

Usage:
  python migrate-directive-labels.py           # dry run (shows proposed changes)
  python migrate-directive-labels.py --write   # apply changes in place
"""

import sys
import re
from pathlib import Path

DRY_RUN = "--write" not in sys.argv
BLOG_DIR = Path(__file__).parent.parent / "src/content/blog"

# Pass 1 — add bracket labels
# Matches an opening directive fence whose label is bare text (not yet bracketed).
#
# Group 1 — the fence + name:  :::  details
# Group 2 — the bare title:    Matthew 6:34 AMP
#
# [ \t]* / [ \t]+ are used (not \s) so the pattern never spans newlines.
# This prevents false matches on closing ":::" fences followed by prose on the
# next line.  The negative lookahead (?!\[) prevents re-processing lines that
# were already migrated, and the .+ requirement ensures bare closing fences
# (":::") and title-less opening fences are never touched.
PATTERN = re.compile(
    r"^(:{3,}[ \t]*\w[\w-]*)[ \t]+(?!\[)(.+?)[ \t]*$",
    re.MULTILINE,
)

# Pass 2 — remove the space between the fence colons and the directive name.
# remark-directive's factoryName is called immediately after the fence sequence
# with no whitespace consumption, so "::: details[…]" is rejected while
# ":::details[…]" is accepted.
#
# Only touches lines that have a word character directly after the
# optional space (i.e. opening fences), never bare closing ":::" lines.
PATTERN_SPACE = re.compile(
    r"^(:{3,})[ \t]+(\w)",
    re.MULTILINE,
)

files_scanned = 0
files_matched = 0
total_replacements = 0

for md_file in sorted(BLOG_DIR.rglob("*.md")):
    files_scanned += 1
    original = md_file.read_text(encoding="utf-8")

    # Apply both passes
    pass1_matches = PATTERN.findall(original)
    after_pass1 = PATTERN.sub(r"\1[\2]", original) if pass1_matches else original
    pass2_matches = PATTERN_SPACE.findall(after_pass1)
    after_pass2 = PATTERN_SPACE.sub(r"\1\2", after_pass1) if pass2_matches else after_pass1

    count = len(pass1_matches) + len(pass2_matches)
    if count == 0:
        continue

    files_matched += 1
    total_replacements += count

    if DRY_RUN:
        print(f"\n{'='*60}")
        print(f"FILE: {md_file.relative_to(Path(__file__).parent.parent)}")
        print(f"  {count} change(s) — proposed changes:")
        for i, line in enumerate(original.splitlines(), start=1):
            new_line = line
            if PATTERN.match(line):
                new_line = PATTERN.sub(r"\1[\2]", new_line)
            if PATTERN_SPACE.match(new_line):
                new_line = PATTERN_SPACE.sub(r"\1\2", new_line)
            if new_line != line:
                print(f"  line {i:4d}  - {line.rstrip()}")
                print(f"           + {new_line.rstrip()}")
    else:
        md_file.write_text(after_pass2, encoding="utf-8")
        print(f"  UPDATED: {md_file.relative_to(Path(__file__).parent.parent)}  ({count} change(s))")

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
