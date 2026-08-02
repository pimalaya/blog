---
cairn: delta
change: inline-copy-pinned-feed
---

# Delta

## ADDED Requirements

- `structure` / Pinned post hero: the index opens with the pinned post as a
  hero serving as the blog's description.
- `feed` / One feed builder, dev parity: a single feed module feeds both the
  prerender output and a dev-server middleware.

## MODIFIED Requirements

- `structure` / Outward links in one place → English-only inline copy: the
  site is English-only; copy and links live inline in components, no central
  config module.
- `posts` / Frontmatter contract: optional `pinned: true` marks the index-hero
  post.

## REMOVED Requirements

None.
