import Layout from "../components/Layout";
import { ContactBand } from "../components/Showcase";
export default function Articles() {
  return (
    <Layout>
      <section className="ws-section ws-wrap ws-prose">
        <span className="ws-eyebrow">Praktyczne wskazówki</span>
        <h1>Zanim zaczniemy projekt.</h1>
        <article>
          <h2>Jak przygotować materiały na stronę?</h2>
          <p>
            Zbierz opis oferty, dane kontaktowe, logo i zdjęcia, do których masz
            prawa. Określ, kto jest odbiorcą i jakie pytania zadaje przed
            zakupem. Ułatwi to zaplanowanie treści i nawigacji.
          </p>
        </article>
        <article>
          <h2>Co ustalić przed uruchomieniem sklepu?</h2>
          <p>
            Przygotuj katalog produktów, warianty, zasady dostaw i płatności.
            Ustal sposób obsługi zamówień i zwrotów. Przed publikacją sprawdź
            pełną ścieżkę zakupową na komputerze i telefonie.
          </p>
        </article>
        <article>
          <h2>Kiedy warto zbudować konfigurator?</h2>
          <p>
            Gdy produkt ma wiele zależnych wariantów, a przygotowanie oferty
            wymaga wielu pytań. Najpierw spisz reguły wyboru i dane potrzebne do
            wyceny. Na tej podstawie można określić zakres pierwszej wersji.
          </p>
        </article>
      </section>
      <ContactBand />
    </Layout>
  );
}
