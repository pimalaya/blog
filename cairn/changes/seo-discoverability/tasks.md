---
cairn: tasks
id: seo-discoverability
---

# Tasks

- [x] Author `assets/og.svg` (logo + wordmark on theme paper) and render it to
      `public/og.png` at 1200×630
- [x] Reference `og.png` from `index.html`: `og:image` + width/height/alt and
      `twitter:card: summary_large_image`
- [x] Expose the post date on rendered pages (`src/entry-server.tsx`)
- [x] Inject per-page head bits in `prerender.js`: JSON-LD (`Blog` on the
      index, `BlogPosting` on posts), `og:type: article` +
      `article:published_time` on posts
- [x] Add `<lastmod>` to sitemap entries
- [x] Build and verify dist output (meta, JSON-LD, sitemap, og.png)
- [x] Fold delta into `cairn/spec/structure.md`, write the log entry
