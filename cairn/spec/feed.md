---
cairn: spec
capability: feed
status: current
---

# Feed

The blog is the canonical news source; the RSS feed is one of its two read-only
views (the other is the newsletter, see `publishing`). Readers who subscribe to
the feed get the full article, not a teaser.

### Requirement: RSS 2.0 at /feed.xml
The build SHALL emit an RSS 2.0 feed at `/feed.xml` with an `atom:link`
self-reference, one item per published post carrying title, canonical link,
permalink guid, RFC 822 `pubDate`, the description, and the full rendered
article HTML in `content:encoded`.

### Requirement: Discoverable feed
The site `<head>` SHALL advertise the feed with a
`rel="alternate" type="application/rss+xml"` link.

### Requirement: Reproducible output
The feed SHALL derive every date from post frontmatter, never from the build
clock, so the build stays byte-reproducible (`lastBuildDate` is the newest post
date).

### Requirement: One feed builder, dev parity
The feed SHALL be built by a single module (`src/lib/feed.ts`) used both by
the prerender (written to `dist/feed.xml`) and by a dev-server middleware, so
`/feed.xml` resolves in `npm run dev` exactly as in production.
