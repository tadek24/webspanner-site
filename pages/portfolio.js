import Layout from "../components/Layout";
import Link from "next/link";
import { contactHref } from "../lib/contact-intent";
import { ProjectGrid, ContactBand } from "../components/Showcase";
export default function Portfolio() {
  const projects = [
    {
      title: "Z.Rejman — sklep meblowy",
      id: "z-rejman",
      desc: "Sklep internetowy z meblami tapicerowanymi. Prezentacja łóżek i foteli oraz ścieżka od karty produktu do zamówienia.",
      img: "/ztrejman-sklep.webp",
      category: "Sklep internetowy z meblami",
      zalety: ["Prezentacja mebli", "Karty produktów", "Zamówienie online"],
      service: "sklepy-internetowe",
      story: [
        ["Cel projektu", "Pokazać ofertę mebli tapicerowanych i umożliwić klientowi przejście od oglądania łóżka lub fotela do złożenia zamówienia."],
        ["Zakres realizacji", "Przygotowanie sklepu z prezentacją asortymentu, kartami produktów i ścieżką zakupową. Zdjęcia oraz informacje o meblach są częścią wyboru produktu."],
        ["Gotowe rozwiązanie", "Klient może zapoznać się z ofertą i zamówić wybrany produkt w sklepie. Firma ma jedno miejsce do prezentacji mebli i przyjmowania zamówień online."],
      ],
      url: "https://ztrejman-sklep.pl/",
      priority: true,
    },
    {
      title: "Sandey — strona internetowa",
      desc: "Realizacja strony z rozbudowaną prezentacją zdjęć i oferty. Przykład układu dopasowanego do oglądania na komputerze i telefonie.",
      img: "/sandey.webp",
      category: "Strona prezentująca ofertę",
      zalety: ["Oferta i zdjęcia", "Rozbudowana galeria", "Widok na telefonie"],
      url: "https://sandey.pl",
    },
    {
      title: "Rapdach — sklep internetowy",
      id: "sklep-rapdach",
      desc: "Sklep internetowy oparty na WooCommerce. Katalog z wariantami produktów, filtrowanie oraz proces zakupu połączony z płatnościami i dostawami.",
      img: "/sklep-rapdach.webp",
      category: "Sklep z wariantami produktów",
      zalety: [
        "Filtrowanie asortymentu",
        "Warianty produktów",
        "Płatności i dostawy",
      ],
      service: "sklepy-internetowe",
      story: [
        ["Cel projektu", "Udostępnić asortyment w sklepie, w którym klient może znaleźć produkt, wybrać odpowiedni wariant i złożyć zamówienie."],
        ["Zakres realizacji", "Wdrożenie sklepu na WooCommerce: katalog, warianty i filtry produktów oraz proces zakupu z płatnościami i metodami dostawy."],
        ["Gotowe rozwiązanie", "Wybór produktu, wariantu, płatności i dostawy odbywa się w jednym procesie. Sklep stanowi kanał przyjmowania zamówień, odrębny od strony prezentującej firmę."],
      ],
      url: "https://sklep.rapdach.com",
    },
    {
      title: "Rapdach — strona firmowa",
      id: "rapdach-strona",
      desc: "Strona firmowa producenta balustrad. Prezentacja oferty i realizacji z wykorzystaniem zdjęć oraz układu przygotowanego dla odbiorców biznesowych.",
      img: "/rapdach.webp",
      category: "Strona producenta balustrad",
      zalety: ["Oferta producenta", "Zdjęcia realizacji", "Kontakt z firmą"],
      service: "strony-internetowe",
      story: [
        ["Cel projektu", "Przedstawić ofertę producenta balustrad i pokazać wykonane realizacje osobom szukającym wykonawcy."],
        ["Zakres realizacji", "Przygotowanie strony firmowej z opisem oferty, zdjęciami realizacji i dostępem do kontaktu. Układ treści uwzględnia odbiorców biznesowych."],
        ["Gotowe rozwiązanie", "Odwiedzający może poznać zakres oferty, obejrzeć przykłady wykonania i skontaktować się z producentem. Strona służy prezentacji firmy, a osobny sklep obsługuje zakupy online."],
      ],
      url: "https://rapdach.com",
    },
    {
      title: "WildHome - Sklep Zoologiczny",
      desc: "Sklep internetowy z produktami dla zwierząt. Realizacja katalogu i kart produktów ze ścieżką zakupową dla klientów detalicznych.",
      img: "/wildhome.webp",
      category: "Sklep z produktami dla zwierząt",
      zalety: [
        "Katalog produktów",
        "Informacje o produktach",
        "Zakupy online",
      ],
      url: "https://wildhome.pl",
    },
    {
      title: "Vellisse — sklep z bielizną",
      desc: "Sklep internetowy z bielizną. Prezentacja kolekcji, galerie produktów i układ dopasowany do urządzeń mobilnych.",
      img: "/vellisse.webp",
      category: "Sklep internetowy z bielizną",
      zalety: [
        "Prezentacja kolekcji",
        "Galerie produktów",
        "Zakupy na telefonie",
      ],
      url: "https://vellisse.pl",
    },
    {
      title: "Skillup - Szkolenia Online",
      desc: "Platforma sprzedaży szkoleń online. Połączenie oferty kursów, procesu zakupu i panelu uczestnika.",
      img: "/skillup-szkolenia.webp",
      category: "Sprzedaż szkoleń online",
      zalety: [
        "Oferta kursów",
        "Zakup szkolenia",
        "Panel uczestnika",
      ],
      url: "https://skillup-szkolenia.pl/",
    },
    {
      title: "Martyna Sprada - Kursy Online",
      id: "martyna-sprada",
      desc: "Strona sprzedażowa z kursami online. Prezentacja autorki i oferty połączona z zakupem oraz dostępem do materiałów kursowych.",
      img: "/martynasprada.webp",
      category: "Strona autorki i kursy online",
      zalety: ["Prezentacja autorki", "Sprzedaż kursów", "Dostęp do materiałów"],
      url: "https://martynasprada.pl/",
    },
  ];
  return (
    <Layout>
      <section className="ws-section ws-wrap">
        <span className="ws-eyebrow">Dotychczasowe realizacje</span>
        <h1>
          Strony i sklepy,
          <br />
          które już działają<span className="ws-accent">.</span>
        </h1>
        <p className="ws-lead">
          Zobacz wcześniejsze realizacje Webspanner — strony firmowe, sklepy
          internetowe oraz platformy kursowe.
        </p>
        <div className="ws-realizations">
          {projects.map((project) => (
            <article className="ws-realization" id={project.id} key={project.url}>
              <div className="ws-realization-image">
                <img
                  src={project.img}
                  alt={project.title}
                  width={1280}
                  height={720}
                  sizes="(max-width:760px) 100vw, 50vw"
                  loading={project.priority ? "eager" : "lazy"} decoding="async"
                />
              </div>
              <div>
                <span className="ws-eyebrow">{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
                {project.story && <dl className="ws-project-story">{project.story.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>}
                <ul className="ws-tags">
                  {project.zalety.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="ws-project-actions"><a
                  className="ws-text-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zobacz projekt ↗<span className="ws-sr"> — nowa karta</span>
                </a>
                {project.story && <Link className="ws-text-link" href={contactHref(project.service, project.id)}>Chcę podobny projekt →</Link>}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="ws-section ws-tint">
        <div className="ws-wrap">
          <span className="ws-eyebrow">Dodatkowe możliwości współpracy</span>
          <h2>Konfiguratory i aplikacje biznesowe.</h2>
          <p className="ws-lead">
            Przykładowe narzędzia do konfiguracji produktów, sprzedaży i
            codziennej pracy zespołu. Wizualizacje są schematami interfejsów.
            Zapytaj o indywidualną prezentację.
          </p>
          <ProjectGrid />
        </div>
      </section>
      <ContactBand />
    </Layout>
  );
}
