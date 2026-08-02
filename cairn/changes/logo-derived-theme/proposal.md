---
cairn: change
id: logo-derived-theme
status: landed
created: 2026-08-02
---

# Derive the palette from the Pimalaya logo colours

## Why
The blog carried the Carillon palette verbatim (warm paper, brown ink,
terracotta), which clashed with the official pink-gradient logo now in the
chrome. The blog is a Pimalaya property, not a Carillon one; its colours
should come from the Pimalaya brand.

## What
Re-ink `theme.css` from the logo gradient (#f193b6 → #e267a3 → #bf1e83)
keeping the letterpress token structure: rosy paper, plum ink, magenta accent
(`--accent`/`--accent-ink`/`--accent-wash`), and `--rose` (the mid-pink)
replacing `--brass` as the secondary tone — references renamed. Re-pick the
hard-coded highlight.js token colours for the plum code blocks and update the
`theme-color` meta.
