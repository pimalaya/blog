---
cairn: change
id: bootstrap
status: landed
created: 2026-08-02
---

# Bootstrap the Pimalaya blog

## Why
Pimalaya's channels are all conversation — Matrix, Mastodon, GitHub issues —
with no durable, linkable publication layer. Release stories and direction
posts live only as toots, which are ephemeral, poorly indexed, and awkward to
link from aggregators. The blog becomes the canonical news source; RSS and a
one-way announce list are read-only views on it.

## What
Create the blog as a static site at blog.pimalaya.org, reusing the Carillon
website stack (Vite, React, TypeScript, build-time prerender) and its
letterpress theme verbatim. Articles are markdown files in `posts/` with a
small frontmatter contract; the build renders them to JavaScript-free pages,
an RSS 2.0 feed with full content, a sitemap, and robots.txt. A publish
workflow rebuilds on every push to master and mails newly added posts to a
listmonk announce list once its secrets exist.
