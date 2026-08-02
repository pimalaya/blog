# Contributing guide

Thank you for investing your time in contributing to the Pimalaya blog.

Whether you are a human or an AI agent, read these in order before touching the code:

1. the [Pimalaya README](https://github.com/pimalaya) for what the project is and how its repositories stack;
2. the [Pimalaya CONTRIBUTING](https://github.com/pimalaya/.github/blob/master/CONTRIBUTING.md) guide, which chains to the shared architecture and guidelines;
3. the [cairn/](./cairn) folder, which follows the [Cairn](https://github.com/pimalaya/cairn) convention: spec/ is the current design of this site, changes/ holds in-flight proposals, and log/ the dated history. AGENTS.md at the root is the activation stanza.

Everything below documents only what differs from the Pimalaya standards.

## A static blog, not a Rust crate

This repository is a Vite, React and TypeScript static site, not a Rust crate: it publishes no rustdoc, ships no Cargo.toml or deny.toml, and the crate-oriented rules (lib.rs header, no-std, public-item naming) do not apply. It has no backend, no runtime configuration and no tests; it builds to one static bundle in dist/, deployed to GitHub Pages at blog.pimalaya.org by the publish workflow. The shipped pages are JavaScript-free: every page is prerendered at build time and the SPA module script is stripped.

## Posts are the content, code is the frame

Articles live as markdown files in posts/, one file per post, slug = filename; the frontmatter contract and the publishing flow are documented in the README and in cairn/spec/posts.md. Fixing a typo in an article is a posts/ edit and needs no Cairn ceremony; changing how the site builds or renders does.

## Node toolchain

Development runs through npm: `npm install` once, then `npm run dev` for the dev server, `npm run build` for the production bundle (type-check, client + SSR build, prerender, feed), and `npm run preview` to serve that bundle. The Nix flake provides a devshell with the pinned Node, and its packages.default builds the static bundle reproducibly.

## Where to edit what

The site is English-only, so copy and outward links live inline in the components that show them — there is no central config module. The markdown pipeline (frontmatter parsing, marked, highlight.js) lives in src/lib/posts.ts, the RSS feed in src/lib/feed.ts (shared by prerender.js and the dev-server middleware in vite.config.ts); page assembly in src/App.tsx and prerender.js. Styling is plain CSS with the tokens in src/styles/theme.css — the Carillon website's letterpress token structure, re-inked from the Pimalaya logo colours (rosy paper, plum ink, magenta accent) — each component keeping its rules in a co-located CSS file; there is no CSS framework and no webfonts.
