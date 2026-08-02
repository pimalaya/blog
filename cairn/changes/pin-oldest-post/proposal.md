---
cairn: change
id: pin-oldest-post
status: landed
created: 2026-08-03
---

# Pin the oldest post implicitly, drop the `pinned` flag

## Why
The hero post is by definition the blog's opening statement — the first post
ever written. A frontmatter flag to say so is a knob nobody will ever turn: it
can drift (zero or two pinned posts) and adds contract surface for no choice
that actually exists.

## What
Remove `pinned: true` from the frontmatter contract and the `Post` type. The
index derives the hero as the oldest post by date (`posts.at(-1)` on the
newest-first list); everything else is unchanged.
