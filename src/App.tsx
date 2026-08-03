import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { IndexPage } from './components/IndexPage'
import { PostPage } from './components/PostPage'
import { posts } from './lib/posts'

/*
 * Every page is prerendered at build time (see prerender.js), so this is not a
 * router; it just picks the page for one URL: `/` is the post index, and
 * `/<slug>/` is the matching article. The same switch serves the dev server,
 * where Vite falls back to index.html for every path.
 */
export default function App({ url }: { url: string }) {
  const slug = url.replace(/^\/+|\/+$/g, '')
  const post = posts.find((p) => p.slug === slug)

  return (
    <>
      <Nav />
      <main>{post ? <PostPage post={post} /> : <IndexPage />}</main>
      <Footer />
    </>
  )
}
