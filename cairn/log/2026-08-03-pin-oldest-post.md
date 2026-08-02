---
cairn: log
change: pin-oldest-post
landed: 2026-08-03
---

# Pin the oldest post implicitly, drop the `pinned` flag

The index hero is now simply the first post ever published (oldest by date),
derived as `posts.at(-1)` on the newest-first list — the `pinned: true`
frontmatter flag introduced the day before is gone from the contract, the
parser, and `welcome.md`. One less knob: the opening statement of the blog is
a fact of history, not a setting.

Capabilities moved: **structure** ("First post as hero", MODIFIED) and
**posts** (frontmatter contract, MODIFIED).
