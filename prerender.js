// Build-time pre-render: render every page (the index plus one page per post)
// to static HTML, strip the SPA module script so the shipped pages run from
// HTML + CSS alone, and emit feed.xml + sitemap.xml from the post data.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const dist = resolve(root, 'dist')
const siteUrl = 'https://blog.pimalaya.org'

const { renderPages, buildFeed } = await import(
  pathToFileURL(resolve(dist, 'server/entry-server.js')).href
)

// The built client index.html is the shared template (it links the hashed
// stylesheet). Read it once before we overwrite it with the rendered index.
const template = readFileSync(resolve(dist, 'index.html'), 'utf-8')

const { pages } = renderPages()

// --- Pages: static, no SPA runtime. ---
// Every page reuses the template's <link> stylesheet but drops the module
// script and any modulepreload: the blog ships zero JavaScript. Retarget the
// per-page <title>, description, and canonical URL.
for (const page of pages) {
  const canonical = page.slug ? `${siteUrl}/${page.slug}/` : `${siteUrl}/`
  const html = template
    .replace('<!--app-head-->', '')
    .replace('<!--app-html-->', page.appHtml)
    .replace(/\s*<script type="module"[^>]*><\/script>/g, '')
    .replace(/\s*<link rel="modulepreload"[^>]*>/g, '')
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${escapeHtml(page.description)}" />`,
    )
    .replace(
      `href="${siteUrl}/" />`,
      `href="${canonical}" />`,
    )
    .replace(
      /<meta property="og:title"[\s\S]*?\/>/,
      `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    )
    .replace(
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    )
    .replace(
      `<meta property="og:url" content="${siteUrl}/" />`,
      `<meta property="og:url" content="${canonical}" />`,
    )

  const dir = page.slug ? resolve(dist, page.slug) : dist
  mkdirSync(dir, { recursive: true })
  writeFileSync(resolve(dir, 'index.html'), html)
  console.log(`✓ pre-rendered dist/${page.slug ? page.slug + '/' : ''}index.html`)
}

// --- RSS feed (see src/lib/feed.ts, shared with the dev server). ---
writeFileSync(resolve(dist, 'feed.xml'), buildFeed())
console.log('✓ generated dist/feed.xml')

// --- Sitemap + robots. ---
const urls = pages
  .map((page) => {
    const loc = page.slug ? `${siteUrl}/${page.slug}/` : `${siteUrl}/`
    return `  <url><loc>${loc}</loc></url>`
  })
  .join('\n')
writeFileSync(
  resolve(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
)
writeFileSync(
  resolve(dist, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
)
console.log('✓ generated dist/sitemap.xml + dist/robots.txt')

// The server bundle is a build artefact only; keep it out of the deployed site.
rmSync(resolve(dist, 'server'), { recursive: true, force: true })

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
