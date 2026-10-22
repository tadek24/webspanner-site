import Portrait from "../components/Portrait";
import { articles } from "../lib/articles";
import Link from "next/link";
import Layout from "../components/Layout";
import { Services, ContactBand } from "../components/Showcase";
export default function Home() {
  return (
    <Layout>
      <section className="ws-hero ws-wrap">
        <div>
          <span className="ws-eyebrow">Tadeusz Kwoka · Webspanner</span>
          <h1>
            Strony i sklepy internetowe.
            <br />
            Aplikacje dla Twojej firmy<span className="ws-accent">.</span>
          </h1>
          <p>
            Projektuję i tworzę strony WWW, sklepy online oraz aplikacje
            biznesowe. Pomagam pokazać ofertę, uruchomić sprzedaż i uporządkować
            pracę zespołu. Rozmawiasz bezpośrednio z wykonawcą — Tadeuszem Kwoką.
          </p>
          <div className="ws-actions">
            <Link className="ws-button" href="/kontakt">
              Porozmawiajmy o projekcie ↗
            </Link>
            <Link className="ws-text-link" href="/portfolio">
              Zobacz realizacje →
            </Link>
          </div>
          <div className="ws-hero-note">
            Grybów i okolice · dojazd po uzgodnieniu · współpraca online w całej Polsce.
          </div>
        </div>
        <div className="ws-hero-visual">
          <Portrait priority />
        </div>
      </section>
      <div className="ws-strip">
        <div className="ws-wrap">
          <span>Strony internetowe</span>
          <span>Sklepy internetowe</span>
          <span>Aplikacje biznesowe</span>
          <span>Integracje systemów</span>
        </div>
      </div>
      <nav className="ws-wrap ws-focus-links" aria-label="Główne usługi Webspanner"><Link href="/oferta/strony-internetowe">Tworzenie stron internetowych →</Link><Link href="/oferta/sklepy-internetowe">Tworzenie sklepów internetowych →</Link><Link href="/oferta/aplikacje-biznesowe">Aplikacje biznesowe na zamówienie →</Link></nav>
      <section className="ws-section ws-wrap">
        <div className="ws-section-heading">
          <span className="ws-eyebrow">W czym mogę pomóc</span>
          <h2>
            Technologia z konkretnym
            <br />
            zadaniem do wykonania.
          </h2>
          <p>
            Dobieramy rozwiązanie do sposobu pracy Twojej firmy, odbiorców i
            planów rozwoju.
          </p>
        </div>
        <Services />
      </section>
      <section className="ws-section ws-tint">
        <div className="ws-wrap">
          <div className="ws-section-heading">
            <span className="ws-eyebrow">Dotychczasowe realizacje</span>
            <h2>
              Strony i sklepy,
              <br />
              które już działają.
            </h2>
            <p>
              Zobacz przykłady strony firmowej i sklepu internetowego.
              W portfolio znajdziesz pełną listę ośmiu realizacji.
            </p>
          </div>
          <div className="ws-service-evidence">
            <article><img src="/rapdach.png" alt="Rapdach — strona firmowa producenta" width={1280} height={720} loading="lazy" decoding="async" /><h3><Link href="/portfolio#rapdach-strona">Rapdach — strona firmowa</Link></h3><p>Prezentacja oferty i realizacji producenta. Przykład strony wspierającej kontakt z klientami biznesowymi.</p><Link className="ws-text-link" href="/portfolio#rapdach-strona">Zobacz realizację →</Link></article>
            <article><img src="/ztrejman-sklep.png" alt="Z.Rejman — sklep internetowy z meblami" width={1280} height={720} loading="lazy" decoding="async" /><h3><Link href="/portfolio#z-rejman">Z.Rejman — sklep internetowy</Link></h3><p>Sklep z meblami tapicerowanymi: katalog produktów i ścieżka od wyboru modelu do zamówienia.</p><Link className="ws-text-link" href="/portfolio#z-rejman">Zobacz realizację →</Link></article>
          </div>
          <Link className="ws-text-link ws-more" href="/portfolio">
            Zobacz wszystkie realizacje →
          </Link>
          <p className="ws-small">Szukasz aplikacji biznesowej? <Link className="ws-text-link" href="/oferta/aplikacje-biznesowe">Poznaj zakres aplikacji i paneli →</Link></p>
        </div>
      </section>
      <section className="ws-section ws-wrap">
        <div className="ws-section-heading">
          <span className="ws-eyebrow">Jak pracujemy</span>
          <h2>
            Wiesz, co powstaje.
            <br />I co będzie dalej.
          </h2>
        </div>
        <div className="ws-steps">
          {[
            [
              "Rozmowa i zakres",
              "Ustalamy cel, odbiorców, potrzebne funkcje i materiały. Otrzymujesz zakres oraz indywidualną wycenę.",
            ],
            [
              "Projekt i wdrożenie",
              "Oglądasz kierunek wizualny i wersję roboczą. Uzgadniamy poprawki na kolejnych etapach.",
            ],
            [
              "Uruchomienie i rozwój",
              "Sprawdzamy kluczowe ścieżki, publikujemy po akceptacji i ustalamy zasady dalszej opieki.",
            ],
          ].map(([title, text], i) => (
            <article key={title}>
              <span className="ws-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="ws-section ws-tint">
        <div className="ws-wrap">
          <span className="ws-eyebrow">Przygotuj się do projektu</span>
          <h2>Praktyczne wskazówki dla firm.</h2>
          <div className="ws-blog-grid">
            {articles.slice(0, 3).map((a) => (
              <article className="ws-blog-card" key={a.slug}>
                <span className="ws-eyebrow">{a.category}</span>
                <h3>
                  <Link href={"/blog/" + a.slug}>{a.title}</Link>
                </h3>
                <p>{a.excerpt}</p>
                <Link className="ws-text-link" href={"/blog/" + a.slug}>
                  Czytaj poradnik →
                </Link>
              </article>
            ))}
          </div>
          <Link className="ws-text-link ws-more" href="/blog">
            Zobacz cały blog →
          </Link>
        </div>
      </section>
      <ContactBand />
    </Layout>
  );
}
