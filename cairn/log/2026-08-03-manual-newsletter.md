---
cairn: log
change: manual-newsletter
landed: 2026-08-03
---

# Send the newsletter manually from the markdown source

Buttondown's RSS-to-email automation is behind the paid plan, so the
"newsletter follows the feed" design landed with buttondown-newsletter never
actually ran. Replaced it with a manual flow that leans on Buttondown's
markdown-native composer: `npm run newsletter -- <slug>`
(scripts/newsletter.js, zero dependencies) prints the post title as subject
and a paste-ready body — frontmatter stripped, root-relative links made
absolute, canonical article link appended. Publishing to the list is now: run
the script, paste, send. CI stays out of the newsletter entirely.

Capability moved: **publishing** — MODIFIED the newsletter requirement from
feed-driven automation to manual send from the markdown source.
