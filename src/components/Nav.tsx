import { Button } from './ui/Button'
import { Icon } from './ui/Icon'
import { Logo } from './ui/Logo'
import './Nav.css'

/* Sticky top navigation. Middle links collapse away on small screens. */
export function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="/" className="nav__brand" aria-label="Pimalaya blog home">
          <Logo />
        </a>

        <nav className="nav__links" aria-label="Primary">
          <a href="https://pimalaya.org" target="_blank" rel="noopener noreferrer">
            <span className="nav__link-label">Website</span>
            <span className="nav__link-sub">pimalaya.org</span>
          </a>
          <a
            href="https://matrix.to/#/#pimalaya:matrix.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="nav__link-label">Chat</span>
            <span className="nav__link-sub">Matrix</span>
          </a>
          <a
            href="https://fosstodon.org/@pimalaya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="nav__link-label">News</span>
            <span className="nav__link-sub">Mastodon</span>
          </a>
        </nav>

        <div className="nav__actions">
          <a
            className="nav__icon-link"
            href="https://github.com/pimalaya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pimalaya on GitHub"
          >
            <Icon name="github" size={20} />
          </a>
          <Button href="https://buttondown.com/pimalaya" size="md" external>
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  )
}
