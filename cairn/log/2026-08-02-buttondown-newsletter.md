---
cairn: log
change: buttondown-newsletter
landed: 2026-08-02
---

# Host the newsletter on Buttondown instead of self-hosted listmonk

With Carillon set aside there is no VPS to run listmonk on, so the announce
list moved to Buttondown (hosted, privacy-respecting, subscribers exportable —
migration back to self-hosted stays possible). Its RSS-to-email automation
polls `/feed.xml` and mails new items itself, which simplified the pipeline:
the CI newsletter job (one listmonk campaign per newly added post) was deleted
and the publish workflow now only builds and deploys. The subscribe form POSTs
to the Buttondown embed-subscribe endpoint, gated on
`config.newsletter.buttondownUsername` (empty until the account exists, so
only the RSS path shows meanwhile).

Capabilities moved: **structure** (form gating) and **publishing** (newsletter
follows the feed; no CI mailing) — both MODIFIED.
