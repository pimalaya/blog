---
cairn: log
id: seo-discoverability
date: 2026-08-03
---

# SEO discoverability

Made every page legible to search engines and link-preview crawlers, on top
of the basics that already shipped (title, description, canonical, Open
Graph, RSS autodiscovery, sitemap, robots.txt):

- JSON-LD structured data injected at prerender time: a `Blog` object on the
  index, a `BlogPosting` (headline, description, `datePublished`, Pimalaya
  as publisher) on each post page (`prerender.js`; `src/entry-server.tsx`
  now exposes each post's bare headline and date).
- Post pages switch `og:type` to `article` and gain
  `article:published_time`.
- New static 1200×630 social card `public/og.png` (source `assets/og.svg`:
  logo + wordmark on theme paper, rendered by hand with Inkscape),
  referenced by `og:image` + width/height/alt and
  `twitter:card: summary_large_image` in `index.html`.
- Sitemap entries gained `<lastmod>` (post date; newest post date for the
  index).

No new dependencies; pages remain JavaScript-free (the JSON-LD block is
data, not script). Capability moved: `structure` (Page set modified;
Structured data and Social card added).
