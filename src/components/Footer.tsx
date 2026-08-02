import { Container } from './ui/Container'
import { Icon } from './ui/Icon'
import { Logo } from './ui/Logo'
import './Footer.css'

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

/* Grouped footer links. */
const columns: FooterColumn[] = [
  {
    title: 'Follow',
    links: [
      { label: 'RSS feed', href: '/feed.xml' },
      { label: 'Newsletter', href: '/#subscribe' },
      { label: 'Mastodon', href: 'https://fosstodon.org/@pimalaya', external: true },
    ],
  },
  {
    title: 'Pimalaya',
    links: [
      { label: 'Website', href: 'https://pimalaya.org', external: true },
      { label: 'GitHub', href: 'https://github.com/pimalaya', external: true },
      {
        label: 'How Pimalaya works',
        href: 'https://github.com/pimalaya/.github/blob/master/ARCHITECTURE.md',
        external: true,
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        label: 'Matrix',
        href: 'https://matrix.to/#/#pimalaya:matrix.org',
        external: true,
      },
      { label: 'Contact', href: 'mailto:pimalaya.org@posteo.net' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="footer on-dark">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <Logo onDark />
            <p className="footer__tagline">
              The logbook of the Pimalaya project
            </p>
            <a
              className="footer__social"
              href="https://github.com/pimalaya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pimalaya on GitHub"
            >
              <Icon name="github" size={20} />
            </a>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title} className="footer__col">
                <h3 className="footer__col-title">{col.title}</h3>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Clément DOUIN (soywod)</p>
          <p>
            Part of{' '}
            <a href="https://pimalaya.org" target="_blank" rel="noopener noreferrer">
              Pimalaya
            </a>,{' '}
            open-source PIM tools in Rust.
          </p>
        </div>
      </Container>
    </footer>
  )
}
