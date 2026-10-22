import Layout from "../components/Layout";
import { ProjectGrid, ContactBand } from "../components/Showcase";
export default function Portfolio() {
  const projects = [
    {
      title: "Z.Rejman - Sklep Meblowy",
      id: "z-rejman",
      desc: "Sklep internetowy z meblami tapicerowanymi. Prezentacja łóżek i foteli oraz ścieżka od karty produktu do zamówienia.",
      img: "/ztrejman-sklep.png",
      category: "E-commerce & UX",
      zalety: ["Product Design", "Zoptymalizowany Checkout", "High-End UX"],
      url: "https://ztrejman-sklep.pl/",
      priority: true,
    },
    {
      title: "Sandey — strona internetowa",
      desc: "Realizacja strony z rozbudowaną prezentacją zdjęć i oferty. Przykład układu dopasowanego do oglądania na komputerze i telefonie.",
      img: "/sandey.png",
      category: "Health & Beauty",
      zalety: ["Lifestyle UX", "Full-screen Design", "Mobile-First"],
      url: "https://sandey.pl",
    },
    {
      title: "Sklep Rapdach - E-commerce",
      id: "sklep-rapdach",
      desc: "Sklep internetowy oparty na WooCommerce. Katalog z wariantami produktów, filtrowanie oraz proces zakupu połączony z płatnościami i dostawami.",
      img: "/sklep-rapdach.png",
      category: "Industrial E-commerce",
      zalety: [
        "Optymalizacja WooCommerce",
        "Warianty produktów",
        "Integracje Logistyczne",
      ],
      url: "https://sklep.rapdach.com",
    },
    {
      title: "Rapdach - Strona Korporacyjna",
      id: "rapdach-strona",
      desc: "Strona firmowa producenta balustrad. Prezentacja oferty i realizacji z wykorzystaniem zdjęć oraz układu przygotowanego dla odbiorców biznesowych.",
      img: "/rapdach.png",
      category: "Corporate B2B",
      zalety: ["Oferta producenta", "Realizacje", "Kontakt B2B"],
      url: "https://rapdach.com",
    },
    {
      title: "WildHome - Sklep Zoologiczny",
      desc: "Sklep internetowy z produktami dla zwierząt. Realizacja katalogu i kart produktów ze ścieżką zakupową dla klientów detalicznych.",
      img: "/wildhome.png",
      category: "High-Volume Retail",
      zalety: [
        "Conversion Rate Optimization",
        "Cross-selling",
        "System Lojalnościowy",
      ],
      url: "https://wildhome.pl",
    },
    {
      title: "Vellisse - Premium E-commerce",
      desc: "Sklep internetowy z bielizną. Prezentacja kolekcji, galerie produktów i układ dopasowany do urządzeń mobilnych.",
      img: "/vellisse.png",
      category: "Premium E-commerce",
      zalety: [
        "Estetyka Premium",
        "Optymalizacja Konwersji",
        "Pełna Responsywność",
      ],
      url: "https://vellisse.pl",
    },
    {
      title: "Skillup - Szkolenia Online",
      desc: "Platforma sprzedaży szkoleń online. Połączenie oferty kursów, procesu zakupu i panelu uczestnika.",
      img: "/skillup-szkolenia.png",
      category: "E-learning & E-commerce",
      zalety: [
        "Platforma E-learningowa",
        "Automatyzacja Sprzedaży",
        "Panel Kursanta",
      ],
      url: "https://skillup-szkolenia.pl/",
    },
    {
      title: "Martyna Sprada - Kursy Online",
      id: "martyna-sprada",
      desc: "Strona sprzedażowa z kursami online. Prezentacja autorki i oferty połączona z zakupem oraz dostępem do materiałów kursowych.",
      img: "/martynasprada.png",
      category: "Personal Branding & E-learning",
      zalety: ["Personal Branding", "Optymalizacja Konwersji", "System Kursów"],
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
                <ul className="ws-tags">
                  {project.zalety.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a
                  className="ws-text-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zobacz projekt ↗<span className="ws-sr"> — nowa karta</span>
                </a>
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
