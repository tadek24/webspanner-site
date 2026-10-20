import Portrait from "../components/Portrait";
import { articles } from "../lib/articles";
import Link from "next/link";
import Layout from "../components/Layout";
import { Services, ProjectGrid, ContactBand } from "../components/Showcase";
export default function Home() {
  return (
    <Layout>
      <section className="ws-hero ws-wrap">
        <div>
          <span className="ws-eyebrow">Tadeusz Kwoka · Webspanner</span>
          <h1>
            Dobra strona.
            <br />
            Sprawniejszy biznes<span className="ws-accent">.</span>
          </h1>
          <p>
            Projektuję i wdrażam strony, sklepy, konfiguratory produktów oraz
            aplikacje biznesowe. Od pierwszej rozmowy po narzędzie, z którego
            korzystasz na co dzień.
          </p>
          <div className="ws-actions">
            <Link className="ws-button" href="/kontakt">
              Porozmawiajmy o projekcie ↗
            </Link>
            <Link className="ws-text-link" href="/dema">
              Zobacz możliwości →
            </Link>
          </div>
          <div className="ws-hero-note">
            Bezpośredni kontakt. Spotkanie na miejscu lub online. Indywidualna wycena.
          </div>
        </div>
        <div className="ws-hero-visual">
          <Portrait priority />
        </div>
      </section>
      <div className="ws-strip">
        <div className="ws-wrap">
          <span>Strony i sklepy</span>
          <span>Konfiguratory produktów</span>
          <span>Aplikacje biznesowe</span>
          <span>Integracje systemów</span>
        </div>
      </div>
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
            <span className="ws-eyebrow">Zobacz, jak to może działać</span>
            <h2>
              Mniej obietnic.
              <br />
              Więcej do sprawdzenia.
            </h2>
            <p>
              Przykłady pokazują kierunki współpracy. Poniższe wizualizacje są
              schematami interfejsów. O szczegóły i prezentację możesz zapytać
              bezpośrednio.
            </p>
          </div>
          <ProjectGrid limit={2} />
          <Link className="ws-text-link ws-more" href="/dema">
            Zobacz wszystkie przykłady →
          </Link>
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
