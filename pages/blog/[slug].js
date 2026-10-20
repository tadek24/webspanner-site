import Link from "next/link";
import Layout from "../../components/Layout";
import { ContactBand } from "../../components/Showcase";
import { articles } from "../../lib/articles";
export default function Article({ article }) {
  const related = articles
    .filter((a) => a.slug !== article.slug)
    .sort(
      (a, b) =>
        Number(b.category === article.category) -
        Number(a.category === article.category),
    )
    .slice(0, 2);
  return (
    <Layout>
      <article className="ws-section ws-wrap ws-article">
        <nav className="ws-breadcrumb" aria-label="Ścieżka nawigacji">
          <Link href="/">Start</Link>
          <span>/</span>
          <Link href="/blog">Blog</Link>
          <span>/</span>
          <span aria-current="page">{article.category}</span>
        </nav>
        <header>
          <span className="ws-eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <p className="ws-lead">{article.excerpt}</p>
          <div className="ws-blog-meta">
            <span>
              Autor: <Link href="/o-nas">Tadeusz Kwoka</Link> ·{" "}
              <time dateTime={article.date}>20 października 2026</time>
            </span>
            <span>{article.readTime} min czytania</span>
          </div>
        </header>
        <div className="ws-article-layout">
          <aside className="ws-toc">
            <strong>W tym poradniku</strong>
            <ol>
              {article.sections.map(([heading], i) => (
                <li key={heading}>
                  <a href={"#sekcja-" + (i + 1)}>{heading}</a>
                </li>
              ))}
            </ol>
          </aside>
          <div className="ws-article-body">
            {article.sections.map(([heading, ...paragraphs], i) => (
              <section key={heading} id={"sekcja-" + (i + 1)}>
                <h2>{heading}</h2>
                {paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
            <section className="ws-takeaways">
              <h2>Co warto przygotować</h2>
              <ul>
                {article.takeaways.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
            {article.sources && (
              <section>
                <h2>Źródła i dalsza lektura</h2>
                <ul>
                  {article.sources.map(([name, url]) => (
                    <li key={url}>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {name} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <div className="ws-notice">
              <h2>Przełóż pomysł na zakres projektu.</h2>
              <p>
                <Link href={"/oferta/" + article.service}>
                  Zobacz powiązaną usługę →
                </Link>{" "}
                lub <Link href="/kontakt">opisz swoje potrzeby</Link>.
                Dobierzemy rozwiązanie do sposobu pracy Twojej firmy.
              </p>
            </div>
          </div>
        </div>
        <section className="ws-related">
          <h2>Przeczytaj również</h2>
          <div className="ws-blog-grid">
            {related.map((a) => (
              <article className="ws-blog-card" key={a.slug}>
                <span className="ws-eyebrow">{a.category}</span>
                <h3>
                  <Link href={"/blog/" + a.slug}>{a.title}</Link>
                </h3>
                <p>{a.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </article>
      <ContactBand />
    </Layout>
  );
}
export function getStaticPaths() {
  return {
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false,
  };
}
export function getStaticProps({ params }) {
  const article = articles.find((a) => a.slug === params.slug);
  return article ? { props: { article } } : { notFound: true };
}
