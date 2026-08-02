---
cairn: change
id: github-pages-deploy
status: landed
created: 2026-08-03
---

# Deploy to GitHub Pages with the custom domain

## Why
The deploy job was a placeholder waiting on VPS hosting that no longer exists
(Carillon set aside). GitHub Pages hosts static bundles for free, supports the
blog.pimalaya.org custom domain with managed TLS, and deploys straight from
the existing workflow.

## What
Replace the placeholder deploy job with the official Pages pipeline:
actions/upload-pages-artifact on dist/, actions/deploy-pages into the
`github-pages` environment, `pages: write` + `id-token: write` permissions, a
`pages` concurrency group, and workflow_dispatch for manual runs. The custom
domain lives in the repository Pages settings (DNS CNAME to
pimalaya.github.io); no CNAME file ships in the artifact since Actions-based
deployments ignore it. Docs lose their Caddy references.
