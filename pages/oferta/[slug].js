import Link from "next/link";
import Layout from "../../components/Layout";
import { ContactBand } from "../../components/Showcase";
import { services } from "../../lib/services";
import { articles } from "../../lib/articles";
export default function Service({ service }) {
  return (
    <Layout>
      <section className="ws-section ws-wrap">
        <nav className="ws-breadcrumb" aria-label="Ścieżka nawigacji">
          <Link href="/">Start</Link>
          <span>/</span>
          <Link href="/oferta">Oferta</Link>
          <span>/</span>
          <span aria-current="page">{service.title}</span>
        </nav>
        <span className="ws-eyebrow">Oferta Webspanner</span>
        <h1>
          {service.title}
          <span className="ws-accent">.</span>
        </h1>
        <p className="ws-lead">{service.lead}</p>
        <p className="ws-lead">{service.forWho}</p>
        <div className="ws-actions">
          <Link className="ws-button" href="/kontakt">
            Omów zakres projektu ↗
          </Link>
          <Link className="ws-text-link" href="/portfolio">
            Zobacz portfolio →
          </Link>
        </div>
        <div className="ws-service-detail">
          <div>
            <h2>Co może obejmować projekt</h2>
            <ul>
              {service.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <aside className="ws-notice">
            <h2>
              Najpierw zakres.
              <br />
              Potem wycena.
            </h2>
            <p>
              Nie publikuję sztywnych pakietów. Ustalamy potrzebne funkcje,
              materiały i integracje, a następnie otrzymujesz propozycję etapów
              oraz indywidualną wycenę.
            </p>
          </aside>
        </div>
        <h2>Jak wygląda współpraca</h2>
        <div className="ws-steps">
          {service.process.map(([title, text], i) => (
            <article key={title}>
              <span className="ws-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <section className="ws-faq">
          <h2>Najczęstsze pytania</h2>
          {service.faq.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </section>
        <section className="ws-related">
          <h2>Przygotuj się do projektu</h2>
          <div className="ws-blog-grid">
            {articles
              .filter((a) => a.service === service.slug)
              .slice(0, 2)
              .map((a) => (
                <article className="ws-blog-card" key={a.slug}>
                  <h3>
                    <Link href={"/blog/" + a.slug}>{a.title}</Link>
                  </h3>
                  <p>{a.excerpt}</p>
                </article>
              ))}
          </div>
        </section>
      </section>
      <ContactBand />
    </Layout>
  );
}
export function getStaticPaths() {
  return {
    paths: services.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}
export function getStaticProps({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  return service ? { props: { service } } : { notFound: true };
}
