---
cairn: delta
id: seo-discoverability
---

# Delta

## ADDED Requirements

### Requirement: Structured data (capability: structure)
Every page SHALL embed a JSON-LD `<script type="application/ld+json">` block
injected at prerender time: the index a `Blog` object, each post page a
`BlogPosting` with headline, description, `datePublished`, url, image, and
Pimalaya as publisher. Post pages SHALL declare `og:type: article` and
`article:published_time`; the index keeps `og:type: website`.

### Requirement: Social card (capability: structure)
The site SHALL ship a static 1200×630 `og.png` social card derived from the
official logo and the theme palette (SVG source in `assets/og.svg`, rendered
by hand — regeneration command documented in the source file). Every page
SHALL reference it via `og:image` (absolute URL, with width, height and alt)
and `twitter:card: summary_large_image`.

## MODIFIED Requirements

### Requirement: Page set (capability: structure)
Sitemap entries SHALL carry `<lastmod>`: each post page its post date, the
index the newest post's date.
