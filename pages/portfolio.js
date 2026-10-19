import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { ProjectGrid, ContactBand } from "../components/Showcase";
export default function Portfolio() {
  const projects = [
    {
      title: "Z.Rejman - Sklep Meblowy",
      desc: "Nowoczesny e-commerce z branży meblarskiej, oferujący stylowe łóżka i fotele tapicerowane. Skupienie na UX i wysokiej jakości prezentacji produktów.",
      img: "/ztrejman-sklep.png",
      category: "E-commerce & UX",
      zalety: ["Product Design", "Zoptymalizowany Checkout", "High-End UX"],
      url: "https://ztrejman-sklep.pl/",
      priority: true,
    },
    {
      title: "Sandey - Beauty & Spa Booking",
      desc: 'Projekt to przykład tego, jak nowoczesny design WordPress może budować nastrój luksusu i spokoju. Platforma została oparta na koncepcji "Lifestyle UX". Wykorzystaliśmy wysokiej jakości zdjęcia w układzie full-screen, które w połączeniu z subtelnymi animacjami reveal, tworzą spójną opowieść o komforcie życia na zewnątrz.',
      img: "/sandey.png",
      category: "Health & Beauty",
      zalety: ["Lifestyle UX", "Full-screen Design", "Mobile-First"],
      url: "https://sandey.pl",
    },
    {
      title: "Sklep Rapdach - E-commerce",
      desc: "Sklep to technologiczne wyzwanie, któremu sprostaliśmy dzięki głębokiej optymalizacji WooCommerce. System obsługuje tysiące wariantów produktów, zachowując błyskawiczną szybkość ładowania. Wdrożyliśmy zaawansowane mechanizmy filtrowania i zintegrowaliśmy całość z systemami płatności i logistyki.",
      img: "/sklep-rapdach.png",
      category: "Industrial E-commerce",
      zalety: [
        "Optymalizacja WooCommerce",
        "1000+ Wariantów",
        "Integracje Logistyczne",
      ],
      url: "https://sklep.rapdach.com",
    },
    {
      title: "Rapdach - Strona Korporacyjna",
      desc: "Projekt to manifestacja luksusu w branży przemysłowej. Strona lidera balustrad zaprojektowana w minimalistycznym stylu, podkreślającym surową elegancję stali i szkła. Inżynieryjne podejście do kodu zaowocowało rekordowymi wynikami w Core Web Vitals, co przekłada się na pozycjonowanie B2B.",
      img: "/rapdach.png",
      category: "Corporate B2B",
      zalety: ["Core Web Vitals", "Minimalizm", "SEO B2B"],
      url: "https://rapdach.com",
    },
    {
      title: "WildHome - Sklep Zoologiczny",
      desc: "Potężna maszyna sprzedażowa operująca na ogromnym asortymencie. Skoncentrowaliśmy się na optymalizacji konwersji poprzez mechanizmy up-sellingu i cross-sellingu wbudowanych w karty produktów. System połączono z platformami opinii i systemem lojalnościowym.",
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
      desc: "Sklep e-commerce klasy premium z bielizną erotyczną. Projekt skoncentrowany na estetyce, optymalizacji ścieżki zakupowej oraz pełnej responsywności. Dopracowana typografia i galerie produktowe tworzą ekskluzywne doświadczenie zakupowe na każdym urządzeniu.",
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
      desc: "Nowoczesna platforma e-learningowa do sprzedaży specjalistycznych szkoleń online. Zoptymalizowany proces zakupowy oraz intuicyjny panel zapewniają bezproblemowe doświadczenie edukacyjne i wysoką sprzedaż.",
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
      desc: "Autorska strona sprzedażowa oferująca kursy online. Projekt łączy silny personal branding z wysoką konwersją, oferując płynne przejście od zapoznania się z ofertą, przez checkout, aż po realizację kursu.",
      img: "/martynasprada.png",
      category: "Personal Branding & E-learning",
      zalety: ["Personal Branding", "Optymalizacja Konwersji", "System Kursów"],
      url: "https://martynasprada.pl/",
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Portfolio — strony i sklepy | Webspanner</title>
      </Head>
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
            <article className="ws-realization" key={project.url}>
              <div className="ws-realization-image">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={1280}
                  height={720}
                  sizes="(max-width:760px) 100vw, 50vw"
                  priority={project.priority}
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
