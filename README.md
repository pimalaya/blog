# 🏔️ Pimalaya blog [![Matrix](https://img.shields.io/badge/chat-%23pimalaya-blue?style=flat&logo=matrix&logoColor=white)](https://matrix.to/#/#pimalaya:matrix.org) [![Mastodon](https://img.shields.io/badge/news-%40pimalaya-blue?style=flat&logo=mastodon&logoColor=white)](https://fosstodon.org/@pimalaya)

Half-technical articles on where Pimalaya goes

This is the source of the Pimalaya blog, served at blog.pimalaya.org: release stories, design notes, and direction posts on the open-source PIM tools in Rust. Articles are plain markdown files in [posts/](./posts); every push rebuilds the static site and the RSS feed at /feed.xml, and new posts are mailed to the announce newsletter (Buttondown) from their markdown source. The blog is the canonical news source; the feed and the newsletter are read-only views on it.

## Table of contents

- [Writing a post](#writing-a-post)
- [Installation](#installation)
  - [Nix](#nix)
  - [Sources](#sources)
- [Usage](#usage)
- [License](#license)
- [AI disclosure](#ai-disclosure)
- [Contributing](CONTRIBUTING.md)
- [Social](#social)
- [Sponsoring](#sponsoring)

## Writing a post

Drop a markdown file in posts/, named after its URL slug (`posts/my-article.md` lands at `/my-article/`), with a small frontmatter block:

```markdown
---
title: My article
description: One sentence shown on the index, in previews, and in the feed.
date: 2026-08-02
---

The article body, in GFM markdown. Code blocks get build-time syntax colours.
```

Add `draft: true` to keep a post out of the build. The oldest post opens the index as the hero and serves as the blog's description. The build fails on a missing title, description, or date, so a half-filled post cannot ship. Push to master and CI rebuilds and deploys the site.

To mail the post to the [newsletter](https://buttondown.com/pimalaya), run `npm run newsletter -- <slug>` and paste the output into a new Buttondown email (the composer is markdown-native): the subject is the post title, and the body is the post source with links absolutized and a canonical link appended.

## Installation

The site is a static bundle any host can serve; GitHub Pages serves it at blog.pimalaya.org in production. Build it only to develop it or host your own copy.

### Nix

With the [Flakes](https://nixos.wiki/wiki/Flakes) feature enabled, build the static bundle:

```sh
nix build github:pimalaya/blog
```

The result is a dist/ directory any static host can serve.

### Sources

```sh
git clone https://github.com/pimalaya/blog
cd blog
npm install
npm run build
```

## Usage

Run `npm run dev` for a hot-reloading dev server (every post is reachable at its slug, and /feed.xml is served live), `npm run build` for the production bundle, and `npm run preview` to serve that bundle locally. Copy and outward links live inline in the components (the site is English-only), the markdown pipeline in src/lib/posts.ts, the feed in src/lib/feed.ts, and the design tokens in src/styles/theme.css; CONTRIBUTING.md and the [cairn](./cairn) folder cover where to edit what.

## License

This project is licensed under either of:

- [MIT license](LICENSE-MIT)
- [Apache License, Version 2.0](LICENSE-APACHE)

at your option.

## AI disclosure

This project is developed with AI assistance. This section documents how, so users and downstream packagers can make informed decisions.

- **Tools**: Claude Code (Anthropic), invoked locally with a persistent project-scoped memory and a small set of repo-specific rules.
- **Used for**: Scaffolding, refactors, mechanical multi-file edits, boilerplate (component scaffolding, inline SVGs), copy polish, exploratory design conversations.
- **Not used for**: Article content (posts are written by a human), git manipulation (commit, merge, rebase…), real-world tests.
- **Verification**: Every AI-assisted change is read, type-checked, and built before commit (`npm run build`).
- **Limitations**: AI models occasionally produce plausible but wrong copy or markup. The verification workflow catches most of this; it does not catch all of it. Bug reports are welcome and taken seriously.
- **Last reviewed**: 02/08/2026

## Social

- Chat on [Matrix](https://matrix.to/#/#pimalaya:matrix.org)
- News on [Mastodon](https://fosstodon.org/@pimalaya) or [RSS](https://blog.pimalaya.org/feed.xml)
- Mail at [pimalaya.org@posteo.net](mailto:pimalaya.org@posteo.net)

## Sponsoring

[![nlnet](https://nlnet.nl/logo/banner-160x60.png)](https://nlnet.nl/)

Special thanks to the [NLnet foundation](https://nlnet.nl/) and the [European Commission](https://www.ngi.eu/) that have been financially supporting the project for years:

- 2022 → 2023: [NGI Assure](https://nlnet.nl/project/Himalaya/)
- 2023 → 2024: [NGI Zero Entrust](https://nlnet.nl/project/Pimalaya/)
- 2024 → 2026: [NGI Zero Core](https://nlnet.nl/project/Pimalaya-PIM/)
- *2027 in preparation…*

If you appreciate the project, feel free to donate using one of the following providers:

[![GitHub](https://img.shields.io/badge/-GitHub%20Sponsors-fafbfc?logo=GitHub%20Sponsors)](https://github.com/sponsors/soywod)
[![Ko-fi](https://img.shields.io/badge/-Ko--fi-ff5e5a?logo=Ko-fi&logoColor=ffffff)](https://ko-fi.com/soywod)
[![Buy Me a Coffee](https://img.shields.io/badge/-Buy%20Me%20a%20Coffee-ffdd00?logo=Buy%20Me%20A%20Coffee&logoColor=000000)](https://www.buymeacoffee.com/soywod)
[![Liberapay](https://img.shields.io/badge/-Liberapay-f6c915?logo=Liberapay&logoColor=222222)](https://liberapay.com/soywod)
[![PayPal](https://img.shields.io/badge/-PayPal-0079c1?logo=PayPal&logoColor=ffffff)](https://www.paypal.com/paypalme/soywod)
