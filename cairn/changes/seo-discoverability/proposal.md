---
cairn: change
id: seo-discoverability
status: landed
created: 2026-08-03
---

# SEO discoverability

## Why

The blog already ships the basics (per-page title, meta description, canonical
URL, Open Graph tags, RSS autodiscovery, sitemap, robots.txt), but bots and
link-preview crawlers still miss key signals:

- No structured data (JSON-LD), so search engines can't classify pages as a
  blog / blog posts or surface publish dates in results.
- Post pages declare `og:type: website` and carry no `article:published_time`,
  so crawlers can't tell articles from the index.
- No `og:image` and no Twitter card meta, so shared links render bare —
  fewer clicks, weaker social discovery.
- The sitemap has bare `<loc>` entries with no `<lastmod>`, so crawlers can't
  prioritize fresh content.

## What

- Emit JSON-LD at prerender time: a `Blog` object on the index, a
  `BlogPosting` (headline, description, datePublished, url, image, Pimalaya
  as publisher) on each post page.
- On post pages, switch `og:type` to `article` and add
  `article:published_time` from the post date.
- Add a static 1200×630 `public/og.png` social card derived from the official
  logo and theme palette (SVG source kept in `assets/`), referenced by
  `og:image` (+ width/height/alt) and `twitter:card: summary_large_image` on
  every page.
- Add `<lastmod>` to sitemap entries: each post's date; the newest post's
  date for the index.

No new dependencies; everything stays build-time, pages stay JavaScript-free.
