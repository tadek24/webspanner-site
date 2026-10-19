import Head from "next/head";
import Layout from "../components/Layout";
import { Services, ContactBand } from "../components/Showcase";
export default function Oferta() {
  return (
    <Layout>
      <Head>
        <title>Oferta — strony, sklepy i aplikacje | Webspanner</title>
      </Head>
      <section className="ws-section ws-wrap">
        <span className="ws-eyebrow">Zakres współpracy</span>
        <h1>
          Od strony firmowej
          <br />
          po własne narzędzie<span className="ws-accent">.</span>
        </h1>
        <p className="ws-lead">
          Zacznijmy od tego, co ma się zmienić w Twojej firmie. Na tej podstawie
          dobierzemy funkcje, technologię i kolejność prac.
        </p>
        <Services />
        <div className="ws-notice">
          <h2>Każdy projekt wyceniam indywidualnie.</h2>
          <p>
            Na zakres i koszt wpływają funkcje, liczba widoków, treści,
            integracje i sposób zarządzania. Po rozmowie otrzymasz propozycję
            prac i harmonogram. Opiekę oraz rozwój ustalamy osobno.
          </p>
        </div>
      </section>
      <ContactBand />
    </Layout>
  );
}
