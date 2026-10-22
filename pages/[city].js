import Link from "next/link";
import Layout from "../components/Layout";
import { ContactBand } from "../components/Showcase";
import { locations, locationBySlug, relatedLocations } from "../lib/locations";
import { services } from "../lib/services";
export function getStaticPaths() { return { paths: locations.map(c => ({ params: { city: c.slug } })), fallback: false }; }
export function getStaticProps({ params }) { return { props: { city: locationBySlug[params.city] } }; }
export default function CityOffer({ city }) {
  return <Layout>
    <section className="ws-section ws-wrap">
      <nav aria-label="Okruszki" className="ws-breadcrumb"><Link href="/">Strona główna</Link><span>/</span><Link href="/miasta">Obszar współpracy</Link><span>/</span><span>{city.name}</span></nav>
      <span className="ws-eyebrow">{city.region} · {city.localVisit ? "dojazd po uzgodnieniu i współpraca online" : "współpraca online"}</span>
      <h1>Strony internetowe<br/><span className="ws-accent">{city.locative}.</span></h1>
      <p className="ws-lead">{city.intro}</p>
      <div className="ws-actions"><Link className="ws-button" href={{ pathname: "/kontakt", query: { miasto: city.slug } }}>Omów projekt — {city.name} ↗</Link><Link className="ws-text-link" href="/portfolio">Zobacz portfolio →</Link></div>
      <p className="ws-location-note">Rozmawiasz bezpośrednio z Tadeuszem Kwoką. {city.localVisit ? "Działam z okolic Grybowa i dojeżdżam na umówione spotkania w regionie, w przybliżeniu do 120 km. Miejsce i termin ustalamy przed wizytą. Możemy również pracować online." : "Projekt prowadzimy online: od ustalenia zakresu po prezentację wersji roboczej i wdrożenie. Ta podstrona opisuje obszar współpracy, a nie lokalne biuro Webspanner."}</p>
    </section>
    <section className="ws-section ws-tint"><div className="ws-wrap ws-location-example">
      <div><span className="ws-eyebrow">Przykładowy projekt do omówienia</span><h2>{city.exampleTitle}.</h2><p>{city.example}</p><p>To przykład możliwego zakresu, nie opis wykonanej realizacji. Wycena zależy od materiałów, funkcji i potrzebnych integracji.</p></div>
      <aside className="ws-location-brief"><h3>Co przygotować przed rozmową?</h3><ul>{city.checklist.map(item => <li key={item}>{item}</li>)}</ul><Link className="ws-text-link" href="/blog/jak-przygotowac-brief-strony-internetowej">Poradnik o przygotowaniu briefu →</Link></aside>
    </div></section>
    <section className="ws-section ws-wrap"><span className="ws-eyebrow">Zakres współpracy · {city.name}</span><h2>Od strony firmowej do narzędzia pracy.</h2><div className="ws-location-services">{services.map(service => <article key={service.slug}><h3><Link href={"/oferta/" + service.slug}>{service.title}</Link></h3><p>{service.description}</p><Link className="ws-text-link" href={"/oferta/" + service.slug}>Zakres, proces i odpowiedzi →</Link></article>)}</div></section>
    <section className="ws-section ws-tint"><div className="ws-wrap"><h2>Jak wygląda współpraca?</h2><div className="ws-location-services"><article><span className="ws-eyebrow">01 · ustalenia</span><h3>Cel i zakres</h3><p>Przesyłasz opis firmy, materiały i potrzebne funkcje. Omawiamy je telefonicznie, online lub podczas uzgodnionego spotkania. Przed rozpoczęciem otrzymujesz uzgodniony zakres i indywidualną wycenę.</p></article><article><span className="ws-eyebrow">02 · przegląd</span><h3>Podgląd i odbiór</h3><p>Oglądasz wersję roboczą. Zbieramy uwagi, sprawdzamy formularze i zachowanie na urządzeniach. Po akceptacji ustalamy publikację oraz zasady dalszych aktualizacji.</p></article></div></div></section>
    <section className="ws-section ws-wrap"><h2>Pytania o współpracę {city.locative}.</h2><div className="ws-faq"><details><summary>Czy możesz przyjechać na spotkanie?</summary><p>{city.localVisit ? "Tak, po wcześniejszym umówieniu. Dojeżdżam z okolic Grybowa do miejscowości w regionie, w przybliżeniu do 120 km. Miejsce i termin ustalamy przed wizytą. Możemy też przeprowadzić projekt online." : "Z firmami z tego obszaru współpracuję online. Nie prowadzę tu lokalnego biura. Zakres, materiały i wersję roboczą możemy omówić zdalnie."}</p></details><details><summary>Czy można zacząć od niewielkiej strony?</summary><p>Tak. Pierwszą wersję dobieramy do celu i dostępnych materiałów. Możemy zaplanować dalszy rozwój o katalog, sklep, konfigurator lub panel obsługi.</p></details><details><summary>Co obejmuje przygotowanie do wyszukiwarki?</summary><p>Ustalamy strukturę oferty, opisujemy usługi, porządkujemy adresy, metadane i linki. Po publikacji sprawdzamy dostępność stron dla Google. Indeksacja i pozycje zależą od wyszukiwarki i nie są gwarantowane.</p></details></div>
      <h3>Inne obsługiwane miasta</h3><nav className="ws-location-links" aria-label="Powiązane lokalizacje">{relatedLocations(city).map(c => <Link key={c.slug} href={"/"+c.slug}>{c.name}</Link>)}<Link href="/miasta">Wszystkie lokalizacje →</Link></nav>
    </section><ContactBand/>
  </Layout>;
}
