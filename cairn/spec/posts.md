---
cairn: spec
capability: posts
status: current
---

# Posts

Markdown files in `posts/` are the single source of truth for content. The
build turns them into pages, the feed, and (via CI) newsletter campaigns;
nothing content-wise is authored anywhere else.

### Requirement: One markdown file per post
A post SHALL be a single GFM markdown file at `posts/<slug>.md`; the filename
(without extension) SHALL be the URL slug, and the page SHALL land at
`/<slug>/`.

### Requirement: Frontmatter contract
Each post SHALL open with a flat frontmatter block providing `title`,
`description`, and `date` (YYYY-MM-DD). The build SHALL fail on a missing or
malformed key, so a half-filled post cannot ship. An optional `draft: true`
SHALL exclude the post from the index, the pages, and the feed.

#### Scenario: A post missing its date fails the build
- GIVEN a `posts/<slug>.md` without a `date` frontmatter key
- WHEN `npm run build` runs
- THEN the build exits non-zero naming the file and the missing key

### Requirement: Build-time rendering
Markdown SHALL be rendered to HTML at build time with marked (GFM) and
highlight.js for code blocks, emitting static token markup styled by the
letterpress code theme; no rendering or highlighting SHALL happen in the
browser.

### Requirement: Index order
The post index and the feed SHALL list published posts newest first, ordered by
the frontmatter date.
