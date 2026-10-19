import Head from "next/head";
import Layout from "../components/Layout";
import { ProjectGrid, ContactBand } from "../components/Showcase";
export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Portfolio — strony i aplikacje | Webspanner</title>
      </Head>
      <section className="ws-section ws-wrap">
        <span className="ws-eyebrow">Przykłady możliwości</span>
        <h1>
          Różne potrzeby.
          <br />
          Przemyślane rozwiązania<span className="ws-accent">.</span>
        </h1>
        <p className="ws-lead">
          Konfiguracja produktu, organizacja sprzedaży, prezentacja usług i
          komunikacja zespołu. Zobacz przykładowe obszary, w których mogę pomóc.
          Poniżej przedstawiam przykładowe rozwiązania.
        </p>
        <div className="ws-notice">
          Przykłady opisano neutralnymi nazwami. Wizualizacje są schematami
          interfejsów, nie zrzutami ekranów gotowych wdrożeń. Chcesz poznać
          szczegóły? Zapytaj o prezentację.
        </div>
        <ProjectGrid />
      </section>
      <ContactBand />
    </Layout>
  );
}
