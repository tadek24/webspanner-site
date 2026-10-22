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
        {service.intro && <p className="ws-service-intro">{service.intro}</p>}
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
        {service.sections && <section className="ws-service-content" aria-label="Szczegóły usługi">
          {service.sections.map(([title, text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}
        </section>}
        {service.examples && <section className="ws-related">
          <h2>Przykłady z portfolio</h2>
          <div className="ws-service-evidence">{service.examples.map((example) => <article key={example.anchor}>
            <img src={example.image} alt={example.title} width={1280} height={720} loading="lazy" decoding="async" />
            <h3><Link href={"/portfolio#" + example.anchor}>{example.title}</Link></h3><p>{example.text}</p>
            <Link className="ws-text-link" href={"/portfolio#" + example.anchor}>Zobacz realizację →</Link>
          </article>)}</div>
        </section>}
        {service.slug === "aplikacje-biznesowe" && <section className="ws-related"><h2>Zobacz przykładowe narzędzia</h2><p>Panel relacji z klientami i panel sprzedaży marketplace pokazują możliwe kierunki aplikacji. Są przykładami do omówienia, a nie obietnicą gotowego zakresu Twojego wdrożenia.</p><Link className="ws-text-link" href="/dema">Przykłady aplikacji i prezentacja →</Link></section>}
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
        {service.brief && <section className="ws-notice ws-service-brief"><h2>Co przygotować do wyceny?</h2><ul>{service.brief.map((item) => <li key={item}>{item}</li>)}</ul><p>Nie musisz mieć gotowej specyfikacji. Na podstawie rozmowy ustalimy potrzebne funkcje, materiały i etapy.</p><div className="ws-actions"><Link className="ws-button" href="/kontakt">Poproś o indywidualną wycenę ↗</Link><a className="ws-text-link" href="tel:+48727469410">Zadzwoń: 727 469 410</a></div></section>}
        <section className="ws-faq">
          <h2>Najczęstsze pytania</h2>
          {[...service.faq, ...(service.faqExtra || [])].map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </section>
        <section className="ws-related"><h2>Współpraca na miejscu i online</h2><p>Webspanner prowadzę w okolicach Grybowa. Dojeżdżam na uzgodnione spotkania w regionie, a z firmami z całej Polski współpracuję online. Termin i miejsce spotkania ustalamy przed wizytą.</p><nav className="ws-location-links" aria-label="Lokalna współpraca"><Link href="/grybow">Grybów</Link><Link href="/nowy-sacz">Nowy Sącz</Link><Link href="/gorlice">Gorlice</Link><Link href="/jaslo">Jasło</Link><Link href="/miasta">Obszar współpracy →</Link></nav></section>
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
