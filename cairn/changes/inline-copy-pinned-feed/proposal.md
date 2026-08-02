---
cairn: change
id: inline-copy-pinned-feed
status: landed
created: 2026-08-02
---

# Inline English copy, pinned-post hero, feed served in dev

## Why
The blog will only ever publish in English, so the `config.ts` indirection
(inherited from the Carillon website) buys nothing — copy reads better where
it is shown. The static "Where Pimalaya goes" masthead duplicated what the
first post says; the post itself should be the blog's description. And
`/feed.xml` 404'd on the dev server since the feed only existed at prerender
time.

## What
Delete `src/config.ts` and inline copy and outward links into Nav, Footer,
Subscribe (Buttondown form now unconditional, account live), and
entry-server. Add `pinned: true` frontmatter; the pinned post opens the index
as a hero (title + description + call to action) and leaves the list below.
Extract the feed builder to `src/lib/feed.ts`, shared by `prerender.js` and a
new dev-server middleware in `vite.config.ts`.
