---
cairn: log
change: github-pages-deploy
landed: 2026-08-03
---

# Deploy to GitHub Pages with the custom domain

Replaced the placeholder deploy job (waiting on a VPS that went away with
Carillon) with the official GitHub Pages pipeline: the build job uploads
dist/ via actions/upload-pages-artifact and a deploy job runs
actions/deploy-pages into the `github-pages` environment, with `pages: write`
and `id-token: write` permissions, a non-cancelling `pages` concurrency
group, and workflow_dispatch for manual redeploys. The custom domain
blog.pimalaya.org is configured in the repository Pages settings with a DNS
CNAME record to pimalaya.github.io; no CNAME file ships in the artifact
(Actions-based deployments ignore it) and no .nojekyll is needed (artifact
deploys skip Jekyll). Caddy references were purged from README, CONTRIBUTING
and flake.nix; the nix package remains for local checks and self-hosting.

Capability moved: **publishing** — MODIFIED "Deployment target".
