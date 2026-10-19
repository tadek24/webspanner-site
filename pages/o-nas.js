import Layout from "../components/Layout";
import { ContactBand } from "../components/Showcase";
export default function About() {
  return (
    <Layout>
      <section className="ws-section ws-wrap ws-prose">
        <span className="ws-eyebrow">Bezpośrednia współpraca</span>
        <h1>
          Cześć, jestem Tadeusz.
          <br />
          Tworzę Webspanner<span className="ws-accent">.</span>
        </h1>
        <p className="ws-lead">
          Pomagam firmom uporządkować obecność w internecie i zamienić
          powtarzalne zadania w wygodne narzędzia.
        </p>
        <h2>Rozmawiasz z osobą, która realizuje projekt.</h2>
        <p>
          Wspólnie ustalamy, co jest potrzebne na start, co można rozwinąć
          później i jak sprawdzimy gotowe rozwiązanie. Proponuję zakres
          dopasowany do zadania.
        </p>
        <h2>Decyzje wynikają z potrzeb.</h2>
        <p>
          Strona firmowa, sklep i wewnętrzna aplikacja wymagają innego
          podejścia. Technologię dobieram do funkcji, sposobu obsługi i
          możliwości dalszego utrzymania.
        </p>
        <h2>Jasne zasady od początku.</h2>
        <p>
          Przed rozpoczęciem ustalamy zakres, materiały, harmonogram oraz
          wycenę. Przed publikacją oglądasz wersję roboczą i akceptujesz efekt.
          Zasady opieki po uruchomieniu zapisujemy w ustaleniach.
        </p>
      </section>
      <ContactBand />
    </Layout>
  );
}
