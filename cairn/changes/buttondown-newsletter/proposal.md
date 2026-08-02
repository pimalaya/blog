---
cairn: change
id: buttondown-newsletter
status: landed
created: 2026-08-02
---

# Host the newsletter on Buttondown instead of self-hosted listmonk

## Why
listmonk assumed a VPS to run on; with Carillon set aside there is none, and
running a mail service for an announce list is undue ops. Buttondown is the
serious hosted fit for this profile: privacy-respecting, markdown-native,
exportable subscribers (no lock-in), and — decisive — built-in RSS-to-email
automation, which makes the feed itself drive delivery.

## What
Replace the listmonk wiring with Buttondown. The subscribe form POSTs to the
Buttondown embed-subscribe endpoint, gated on the account username in
`src/config.ts`. The CI newsletter job is deleted: Buttondown polls
`/feed.xml` and mails new items on its own, so the publish workflow only
builds and deploys.
