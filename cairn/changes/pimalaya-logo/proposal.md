---
cairn: change
id: pimalaya-logo
status: landed
created: 2026-08-02
---

# Use the official Pimalaya logo for the wordmark and favicon

## Why
The bootstrap shipped a placeholder mountain glyph. Pimalaya has an official
logo (the pink-gradient "P" in `pimalaya/.github/logo.svg`); the blog should
carry the real brand, not an invented one.

## What
Inline the logo's paths and gradient into `Logo.tsx` (nav and footer, gradient
id keyed on the variant so two instances on one page never collide) and copy
the SVG as `public/favicon.svg` (adding a viewBox so it scales into the icon
box). The gradient is kept as-is on light and dark chrome — brand colours do
not re-theme.
