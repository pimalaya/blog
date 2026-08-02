---
cairn: change
id: manual-newsletter
status: landed
created: 2026-08-03
---

# Send the newsletter manually from the markdown source

## Why
Buttondown's RSS-to-email automation turned out to be a paid feature; the free
plan only sends what is composed by hand. At this blog's volume a manual send
per post is fine, and Buttondown's composer is markdown-native, so the post
source is already almost the email.

## What
Add scripts/newsletter.js (`npm run newsletter -- <slug>`): prints the post
title as subject and a paste-ready markdown body — frontmatter stripped,
root-relative links absolutized to blog.pimalaya.org, canonical article link
appended. Publishing a post to the list = run it, paste into a new Buttondown
email, send. The spec drops the RSS-automation requirement.
