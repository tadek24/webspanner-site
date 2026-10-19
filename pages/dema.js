import Head from "next/head";
import Layout from "../components/Layout";
import { ProjectGrid, ContactBand } from "../components/Showcase";
export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Przykłady aplikacji i konfiguratorów | Webspanner</title>
      </Head>
      <section className="ws-section ws-wrap">
        <span className="ws-eyebrow">Przykłady możliwości</span>
        <h1>
          Zobacz kierunki
          <br />
          możliwej współpracy<span className="ws-accent">.</span>
        </h1>
        <p className="ws-lead">
          Pięć przykładów: od strony usługowej po konfigurator i narzędzia dla
          zespołu. Każde może być początkiem rozmowy o Twoim projekcie.
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
