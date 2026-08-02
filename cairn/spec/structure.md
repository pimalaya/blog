---
cairn: spec
capability: structure
status: current
---

# Structure

The blog is a static site at blog.pimalaya.org: a post index at `/`, one page per
article at `/<slug>/`, and machine views (feed, sitemap) beside them. It reuses
the Carillon website stack — Vite, React, TypeScript, build-time prerender — and
its letterpress theme, but ships zero JavaScript: every page is prerendered and
the SPA module script is stripped, so pages render from HTML and CSS alone.

### Requirement: JavaScript-free pages
Every shipped page SHALL be prerendered to static HTML at build time and SHALL
contain no `type="module"` script; the client entry (`src/main.tsx`) SHALL only
serve the dev server, where Vite falls back to index.html for every path and
`src/App.tsx` picks the page from the URL.

#### Scenario: A built page has no SPA runtime
- GIVEN the built site
- WHEN `prerender.js` writes `dist/<slug>/index.html` (or `dist/index.html`)
- THEN the page links the built stylesheet but contains no `type="module"` script

### Requirement: Page set
The build SHALL emit the post index at `dist/index.html`, one
`dist/<slug>/index.html` per published post, `dist/feed.xml`,
`dist/sitemap.xml`, and `dist/robots.txt`. Each page SHALL carry its own
`<title>`, meta description, canonical URL, and Open Graph tags. Sitemap
entries SHALL carry `<lastmod>`: each post page its post date, the index the
newest post's date.

### Requirement: Structured data
Every page SHALL embed a JSON-LD `<script type="application/ld+json">` block
injected at prerender time: the index a `Blog` object, each post page a
`BlogPosting` with headline, description, `datePublished`, url, image, and
Pimalaya as publisher. Post pages SHALL declare `og:type: article` and
`article:published_time`; the index keeps `og:type: website`.

### Requirement: Social card
The site SHALL ship a static 1200×630 `og.png` social card derived from the
official logo and the theme palette (SVG source in `assets/og.svg`, rendered
by hand — regeneration command documented in the source file). Every page
SHALL reference it via `og:image` (absolute URL, with width, height and alt)
and `twitter:card: summary_large_image`.

### Requirement: Shared chrome and theme
All pages SHALL share the site chrome (sticky nav, dark footer, subscribe
section) and the letterpress design tokens in `src/styles/theme.css`. The
token structure SHALL stay that of the Carillon website, but the palette SHALL
derive from the Pimalaya logo gradient (#f193b6 → #e267a3 → #bf1e83): rosy
paper, plum ink, magenta accent, mid-pink `--rose` secondary. Styling SHALL
stay plain CSS co-located per component: no CSS framework, no webfonts.

### Requirement: Official brand mark
The wordmark and the favicon SHALL use the official Pimalaya logo (the
pink-gradient "P" from `pimalaya/.github/logo.svg`), with its gradient kept
as-is on light and dark chrome alike.

### Requirement: English-only inline copy
The site SHALL be English-only. Copy and outward links SHALL live inline in
the components that show them; there SHALL be no central config module.

### Requirement: First post as hero
The index SHALL open with the very first post (the oldest by date) as a hero
— its title and description serving as the blog's description — with a call
to action to the article; that post SHALL NOT repeat in the list below. No
frontmatter flag is involved.
