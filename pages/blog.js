import Link from "next/link";
import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import { ContactBand } from "../components/Showcase";
import { articles } from "../lib/articles";
export default function Blog() {
  const [category, setCategory] = useState("Wszystkie");
  const [query, setQuery] = useState("");
  const categories = ["Wszystkie", ...new Set(articles.map((a) => a.category))];
  const filtered = useMemo(
    () =>
      articles.filter(
        (a) =>
          (category === "Wszystkie" || a.category === category) &&
          (a.title + " " + a.excerpt)
            .toLocaleLowerCase("pl")
            .includes(query.toLocaleLowerCase("pl")),
      ),
    [category, query],
  );
  return (
    <Layout>
      <section className="ws-section ws-wrap">
        <span className="ws-eyebrow">Blog Webspanner</span>
        <h1>
          Praktycznie o stronach,
          <br />
          sprzedaży i narzędziach<span className="ws-accent">.</span>
        </h1>
        <p className="ws-lead">
          Poradniki dla właścicieli firm. Pomogą przygotować projekt, ustalić
          zakres i podjąć decyzję o właściwym rozwiązaniu.
        </p>
        <article className="ws-blog-feature">
          <div>
            <span className="ws-eyebrow">
              Na dobry początek · {articles[0].readTime} min czytania
            </span>
            <h2>
              <Link href={"/blog/" + articles[0].slug}>
                {articles[0].title}
              </Link>
            </h2>
            <p>{articles[0].excerpt}</p>
            <Link className="ws-button" href={"/blog/" + articles[0].slug}>
              Przeczytaj poradnik →
            </Link>
          </div>
          <div className="ws-feature-mark" aria-hidden="true">
            Dobry projekt
            <br />
            zaczyna się
            <br />
            <strong>od pytań.</strong>
          </div>
        </article>
        <div className="ws-blog-tools">
          <div className="ws-filters" aria-label="Kategorie artykułów">
            {categories.map((c) => (
              <button
                key={c}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="ws-search">
            Szukaj w poradnikach
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Np. konfigurator, sklep, SEO"
            />
          </label>
        </div>
        <p className="ws-results" role="status">
          Liczba poradników: {filtered.length}
        </p>
        <div className="ws-blog-grid">
          {filtered.map((a) => (
            <article className="ws-blog-card" key={a.slug}>
              <span className="ws-eyebrow">{a.category}</span>
              <h2>
                <Link href={"/blog/" + a.slug}>{a.title}</Link>
              </h2>
              <p>{a.excerpt}</p>
              <div className="ws-blog-meta">
                <span>
                  Tadeusz Kwoka · <time dateTime={a.date}>20.10.2026</time>
                </span>
                <span>{a.readTime} min</span>
              </div>
              <Link className="ws-text-link" href={"/blog/" + a.slug}>
                Czytaj artykuł →
              </Link>
            </article>
          ))}
        </div>
        {!filtered.length && (
          <p>
            Nie znalazłem poradnika dla tego wyszukiwania. Zmień frazę lub
            wybierz inną kategorię.
          </p>
        )}
      </section>
      <ContactBand />
    </Layout>
  );
}
