---
cairn: tasks
change: buttondown-newsletter
---

# Tasks

- [x] config.ts: `newsletter.buttondownUsername` replaces the listmonk endpoint + list UUID
- [x] Subscribe form: POST to `https://buttondown.com/api/emails/embed-subscribe/<username>` with `embed=1`
- [x] publish.yml: drop the newsletter job; workflow = build + deploy only
- [x] Fold spec (`structure`, `publishing`), update README + CHANGELOG
- [x] Rebuild and verify
