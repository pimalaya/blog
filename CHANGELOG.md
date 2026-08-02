# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Bootstrapped the blog: a Vite + React + TypeScript static site sharing the Carillon website stack and letterpress theme structure — re-inked from the Pimalaya logo colours (rosy paper, plum ink, magenta accent) — prerendered to JavaScript-free pages carrying the official logo.
- Markdown post pipeline: posts/ files with a title/description/date frontmatter, rendered with marked and build-time highlight.js colours; `draft: true` keeps a post out of the build; the oldest post opens the index as the hero serving as the blog description.
- RSS 2.0 feed at /feed.xml (full article content, also served live by the dev server), plus sitemap.xml and robots.txt.
- Publish workflow: every push to master rebuilds and deploys the site; new posts are mailed to the Buttondown announce newsletter by hand via `npm run newsletter -- <slug>`, which prints a paste-ready markdown email from the post source.
