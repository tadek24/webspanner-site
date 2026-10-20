import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
const links = [
  ["Oferta", "/oferta"],
  ["Portfolio", "/portfolio"],
  ["Przykłady", "/dema"],
  ["Blog", "/blog"],
  ["O współpracy", "/o-nas"],
  ["Kontakt", "/kontakt"],
];
export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="ws-site">
      <a className="ws-skip" href="#main">
        Przejdź do treści
      </a>
      <header className="ws-header">
        <div className="ws-wrap ws-nav">
          <Link className="ws-brand" href="/" onClick={() => setOpen(false)}>
            <span aria-hidden="true">w.</span> webspanner
          </Link>
          <button
            className="ws-menu"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Zamknij" : "Menu"}
          </button>
          <nav
            id="site-nav"
            aria-label="Nawigacja główna"
            className={open ? "ws-links is-open" : "ws-links"}
          >
            {links.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={router.pathname === href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="ws-footer">
        <div className="ws-wrap">
          <div className="ws-footer-top">
            <div>
              <Link className="ws-brand" href="/">
                webspanner.
              </Link>
              <p>Strony, sklepy i narzędzia do codziennej pracy.</p>
            </div>
            <div>
              <a href="mailto:kontakt@webspanner.pl">kontakt@webspanner.pl</a>
              <br />
              <a href="tel:+48727469410">+48 727 469 410</a>
            </div>
          </div>
          <div className="ws-footer-bottom">
            <span>© {new Date().getFullYear()} Webspanner</span>
            <div>
              <Link href="/baza-wiedzy">Baza wiedzy</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/miasta">Obszar współpracy</Link>
              <Link href="/polityka-prywatnosci">Prywatność</Link>
            </div>
          </div>
          <nav className="ws-location-links ws-footer-cities" aria-label="Strony internetowe według miasta"><Link href="/krakow">Kraków</Link><Link href="/rzeszow">Rzeszów</Link><Link href="/lublin">Lublin</Link><Link href="/poznan">Poznań</Link><Link href="/wroclaw">Wrocław</Link><Link href="/nowy-sacz">Nowy Sącz</Link><Link href="/gorlice">Gorlice</Link><Link href="/jaslo">Jasło</Link><Link href="/miasta">Pozostałe miasta →</Link></nav>
        </div>
      </footer>
    </div>
  );
}
