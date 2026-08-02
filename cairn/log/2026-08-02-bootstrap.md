---
cairn: log
change: bootstrap
landed: 2026-08-02
---

# Bootstrap the Pimalaya blog

Created the blog as a static site for blog.pimalaya.org, deliberately reusing
the Carillon website stack and letterpress theme so the Pimalaya web properties
share one identity. Seeded the spec with four capabilities, all ADDED:
`structure`, `posts`, `feed`, and `publishing`.

Decisions taken along the way, recorded here rather than in the spec:

- **Subdomain over a path.** The blog lives at blog.pimalaya.org, not
  pimalaya.org/blog, matching the carillon.pimalaya.org pattern and keeping
  deploys independent per property.
- **Markdown in-repo over a CMS or SSG framework.** Posts are files; the
  existing Vite/React prerender pipeline renders them, so the blog stays on
  the exact stack already maintained for Carillon instead of adding Zola,
  Astro, or a headless CMS.
- **Zero shipped JavaScript.** The Carillon site strips the SPA runtime for
  its legal pages; the blog generalises that to every page. `main.tsx` exists
  only for the dev server.
- **highlight.js over shiki.** Synchronous, so the whole markdown pipeline
  stays sync and identical between dev and build; token colours are hand-set
  from the letterpress palette rather than a foreign syntax theme.
- **listmonk over a hosted newsletter.** Self-hosted, API-driven from CI, one
  more service on the existing VPS; the announce list is one-way — a view on
  the blog, like the feed — never a discussion channel.
- **Build clock banned from output.** Feed and sitemap derive dates from
  frontmatter only, keeping `nix build` byte-reproducible.
