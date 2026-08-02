---
cairn: log
change: pimalaya-logo
landed: 2026-08-02
---

# Use the official Pimalaya logo for the wordmark and favicon

Replaced the bootstrap's placeholder mountain glyph with the official Pimalaya
"P" from `pimalaya/.github/logo.svg`: inlined (paths + pink gradient) in
`Logo.tsx` for the nav and footer wordmarks, and copied as
`public/favicon.svg` with a viewBox added so the icon scales. The gradient id
is keyed on the light/dark variant so the two instances on one page keep valid,
non-colliding ids. The brand gradient is not re-themed by the letterpress
palette — it stays pink on paper and on dark ink alike.

Capability moved: **structure** — ADDED the "Official brand mark" requirement.
