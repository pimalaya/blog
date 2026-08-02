---
cairn: log
change: inline-copy-pinned-feed
landed: 2026-08-02
---

# Inline English copy, pinned-post hero, feed served in dev

Three reworks in one pass, all requested together:

- **English-only inline copy.** Deleted `src/config.ts` (a Carillon-website
  inheritance) and moved copy and outward links into the components that show
  them. The Buttondown subscribe form is now unconditional — the account is
  live at buttondown.com/pimalaya — so the gate and its `.length > 0` check
  went away with the config.
- **Pinned post replaces the static masthead.** The "Where Pimalaya goes"
  hero duplicated what the first post says; now `pinned: true` in a post's
  frontmatter puts that post at the top of the index (eyebrow "Start here",
  title, description, CTA to the article) and drops it from the list below.
  `welcome.md` is the pinned post and serves as the blog's description.
- **Feed builder extracted and served in dev.** `src/lib/feed.ts` now owns the
  RSS build; `prerender.js` writes it to `dist/feed.xml` and a `devFeed` Vite
  plugin serves it via `ssrLoadModule` so `/feed.xml` works identically under
  `npm run dev` (it used to 404 there).

Capabilities moved: **structure** (inline copy MODIFIED, pinned hero ADDED),
**posts** (frontmatter MODIFIED), **feed** (dev parity ADDED).
