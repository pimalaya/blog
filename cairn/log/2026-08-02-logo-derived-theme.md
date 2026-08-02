---
cairn: log
change: logo-derived-theme
landed: 2026-08-02
---

# Derive the palette from the Pimalaya logo colours

Re-inked the theme from the logo gradient (#f193b6 → #e267a3 → #bf1e83),
keeping the Carillon letterpress token structure so the two sites stay
structurally twins with different inks:

- Surfaces: warm paper → rosy paper (#f9f1f3), brown ink-900 → deep plum
  (#23121c); text and rules re-tinted to the same hue.
- Accents: terracotta → logo magenta (#bf1e83, darker #97156a for hover);
  `--brass` → `--rose` (#e267a3, the gradient mid-stop) as the secondary tone,
  with all five `var(--brass)` references renamed.
- Code blocks: hljs keywords to logo light pink, types to dusty pink, numbers
  to `--rose`; strings stay moss green as the one deliberate outside-the-brand
  contrast; functions moved from pale brass to warm cream.
- `theme-color` meta → #bf1e83. `--green` kept for future status uses.

Capability moved: **structure** — MODIFIED "Shared chrome and theme" (palette
now logo-derived; only the token structure is shared with Carillon).
