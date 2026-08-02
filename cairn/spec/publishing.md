---
cairn: spec
capability: publishing
status: current
---

# Publishing

Publishing is push-driven: committing a markdown post to master is the whole
editorial action. CI rebuilds the static bundle and deploys it; the announce
newsletter follows the feed on its own. The list is one-way — a delivery
channel for the blog, not a discussion space (support stays on Matrix and
GitHub).

### Requirement: Rebuild on push
Every push to master SHALL rebuild the full static site (pages, feed, sitemap)
via the publish workflow.

### Requirement: Newsletter sent manually from the markdown source
The announce newsletter SHALL be hosted on Buttondown, whose composer is
markdown-native; its RSS-to-email automation is a paid feature and SHALL NOT
be relied on. A new post is mailed by hand: `npm run newsletter -- <slug>`
prints the subject (the post title) and a paste-ready markdown body (the post
source with frontmatter stripped, root-relative links absolutized to
blog.pimalaya.org, and a canonical link to the article appended), which the
author pastes into a new Buttondown email. Neither CI nor the site SHALL talk
to the newsletter service.

#### Scenario: Preparing the mail for a post
- GIVEN posts/welcome.md
- WHEN `npm run newsletter -- welcome` runs
- THEN stdout carries the title as subject and a body whose root-relative
  links are absolute, ending with a link to the canonical article URL

### Requirement: Deployment target
The built `dist/` SHALL be deployed to GitHub Pages by the publish workflow
(actions/upload-pages-artifact + actions/deploy-pages, `github-pages`
environment) and served at blog.pimalaya.org: the custom domain is configured
in the repository Pages settings and DNS points blog.pimalaya.org (CNAME) at
pimalaya.github.io. No CNAME file ships in the artifact; Actions-based Pages
deployments ignore it.
