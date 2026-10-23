import Layout from "../components/Layout";
import Link from "next/link";
import Portrait from "../components/Portrait";
import { ContactBand } from "../components/Showcase";
export default function About() {
  return (
    <Layout>
      <section className="ws-wrap ws-hero ws-about-hero">
        <div>
          <span className="ws-eyebrow">O mnie · Tadeusz Kwoka</span>
          <h1>
            Za Webspannerem
            <br />
            stoi człowiek<span className="ws-accent">.</span>
          </h1>
          <p>
            Cześć, jestem Tadeusz. Od 5 lat tworzę strony, sklepy internetowe
            i aplikacje, które pomagają firmom pokazać ofertę, obsługiwać
            klientów i uporządkować codzienną pracę.
          </p>
          <p>
            Lubię przekładać pomysły na rozwiązania, z których wygodnie
            się korzysta. Dlatego zaczynam od rozmowy o Twojej firmie:
            co robisz, dla kogo i czego potrzebujesz od swojego projektu.
          </p>
          <div className="ws-actions">
            <Link className="ws-button" href="/kontakt#zapytanie">Porozmawiajmy o projekcie →</Link>
            <Link className="ws-text-link" href="/portfolio">Zobacz moje realizacje</Link>
          </div>
          <div className="ws-hero-note">Od pierwszej rozmowy po wdrożenie — bezpośrednio ze mną.</div>
        </div>
        <Portrait priority />
      </section>
      <section className="ws-section ws-tint" aria-labelledby="experience-heading">
        <div className="ws-wrap ws-about-story">
          <div>
            <span className="ws-eyebrow">Doświadczenie w praktyce</span>
            <h2 id="experience-heading">Od strony firmowej<br />po narzędzie do pracy.</h2>
            <p>
              Moje doświadczenie obejmuje strony usługowe, sklepy internetowe
              oraz platformy sprzedaży kursów. Pracuję również nad
              aplikacjami biznesowymi i konfiguratorami produktów,
              które przekładają ofertę firmy na interaktywne narzędzie.
            </p>
            <p>
              Mam także doświadczenie w marketingu internetowym, SEO,
              social media i obsłudze sprzedaży na marketplace.
              Ta perspektywa pomaga mi myśleć o stronie jako części
              biznesu: miejscu, w którym klient poznaje ofertę,
              podejmuje decyzję i robi kolejny krok.
            </p>
            <p>
              W projektach interesuje mnie cały proces: jak przedstawić
              ofertę, ułatwić wybór produktu i doprowadzić użytkownika
              do kontaktu lub zamówienia. Ważne są dla mnie zarówno wygląd,
              jak i wygoda późniejszej obsługi.
            </p>
            <Link className="ws-text-link" href="/portfolio">Poznaj projekty i zakres realizacji →</Link>
          </div>
          <div className="ws-about-evidence">
            <article>
              <span className="ws-eyebrow">Strony firmowe</span>
              <h3>Oferta, którą można poznać.</h3>
              <p>Treści, zdjęcia realizacji i czytelna droga do zapytania. Przykładem jest strona producenta balustrad Rapdach.</p>
              <Link className="ws-text-link" href="/portfolio#rapdach-strona">Zobacz realizację →</Link>
            </article>
            <article>
              <span className="ws-eyebrow">Sklepy internetowe</span>
              <h3>Od produktu do zamówienia.</h3>
              <p>Katalog, warianty, karty produktów i proces zakupowy. W portfolio znajdziesz m.in. sklep Z.Rejman i sklep Rapdach.</p>
              <Link className="ws-text-link" href="/portfolio#z-rejman">Zobacz sklep →</Link>
            </article>
            <article>
              <span className="ws-eyebrow">Aplikacje i konfiguratory</span>
              <h3>Konfigurator garażu StalEuro.</h3>
              <p>Przykład mojej pracy przy aplikacjach: wybór wymiarów i elementów konstrukcji z podglądem 3D. Narzędzie pomaga przejść od pomysłu do konkretnego wariantu produktu.</p>
              <a className="ws-text-link" href="https://konfigurator.staleuro.pl/" target="_blank" rel="noopener noreferrer">Wypróbuj konfigurator ↗<span className="ws-sr"> — nowa karta</span></a>
            </article>
          </div>
        </div>
      </section>
      <section className="ws-section ws-wrap" aria-labelledby="cooperation-heading">
        <span className="ws-eyebrow">Jak pracuję</span>
        <h2 id="cooperation-heading">Wiesz, z kim rozmawiasz<br />i co dzieje się z projektem.</h2>
        <div className="ws-about-principles">
          <article>
            <span className="ws-about-number" aria-hidden="true">01</span>
            <h3>Najpierw poznaję cel.</h3>
            <p>Wspólnie ustalamy, co jest potrzebne na start, a co można rozwinąć później. Nie musisz przychodzić z gotową specyfikacją.</p>
          </article>
          <article>
            <span className="ws-about-number" aria-hidden="true">02</span>
            <h3>Ustalamy konkretny zakres.</h3>
            <p>Przed rozpoczęciem określamy funkcje, materiały, harmonogram i wycenę. Technologię dobieram do zadania oraz sposobu obsługi.</p>
          </article>
          <article>
            <span className="ws-about-number" aria-hidden="true">03</span>
            <h3>Oglądasz efekt przed publikacją.</h3>
            <p>Pracujemy na wersji roboczej i omawiamy uwagi. Przed uruchomieniem akceptujesz projekt; zasady dalszej opieki ustalamy osobno.</p>
          </article>
        </div>
        <div className="ws-about-location">
          <h3>Z okolic Grybowa. We współpracy z firmami z całej Polski.</h3>
          <p>Możemy pracować online lub umówić spotkanie w Twojej firmie. Dojazd ustalamy indywidualnie. Telefon odbieram codziennie od 7:00 do 19:00.</p>
          <Link className="ws-text-link" href="/kontakt">Poznajmy się i omówmy Twój pomysł →</Link>
        </div>
      </section>
      <ContactBand />
    </Layout>
  );
}
