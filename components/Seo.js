import Head from "next/head";
import { useRouter } from "next/router";
import { pageSeo, siteUrl, organization } from "../lib/seo";
export default function Seo() {
  const router = useRouter();
  const meta = pageSeo(router.asPath);
  const url = siteUrl + (meta.path === "/" ? "/" : meta.path);
  const graph = [
    organization,
    {
      "@type": "WebSite",
      "@id": siteUrl + "/#website",
      name: "Webspanner",
      url: siteUrl,
      inLanguage: "pl-PL",
      publisher: { "@id": organization["@id"] },
    },
  ];
  if (meta.path !== "/" && !meta.noIndex) {
    const parent = meta.path.startsWith("/blog/")
      ? ["Blog", "/blog"]
      : meta.path.startsWith("/oferta/")
        ? ["Oferta", "/oferta"]
        : meta.city ? ["Obszar współpracy", "/miasta"] : null;
    const crumbs = [
      ["Strona główna", "/"],
      ...(parent ? [parent] : []),
      [meta.article?.title || meta.title.split(" | ")[0], meta.path],
    ];
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map(([name, path], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        item: siteUrl + path,
      })),
    });
  }
  if (meta.article)
    graph.push({
      "@type": "BlogPosting",
      headline: meta.article.title,
      description: meta.description,
      datePublished: meta.article.date + "T09:00:00+02:00",
      dateModified: meta.article.date + "T09:00:00+02:00",
      author: {
        "@type": "Person",
        name: "Tadeusz Kwoka",
        url: siteUrl + "/o-nas",
      },
      publisher: { "@id": organization["@id"] },
      image: siteUrl + "/og-webspanner.png",
      mainEntityOfPage: url,
      inLanguage: "pl-PL",
    });
  if (meta.path.startsWith("/oferta/"))
    graph.push({
      "@type": "Service",
      name: meta.title.split(" | ")[0],
      description: meta.description,
      url,
      provider: { "@id": organization["@id"] },
      areaServed: { "@type": "Country", name: "Polska" },
    });
  if (meta.city) graph.push({
    "@type": "Service", name: "Strony internetowe — " + meta.city.name,
    serviceType: "Projektowanie stron, sklepów i aplikacji", url,
    description: meta.description, provider: { "@id": organization["@id"] },
    areaServed: { "@type": "City", name: meta.city.name, containedInPlace: { "@type": "Country", name: "Polska" } },
    availableChannel: { "@type": "ServiceChannel", serviceUrl: siteUrl + "/kontakt" },
  });
  if (meta.path === "/miasta") graph.push({ "@type": "CollectionPage", name: "Obszar współpracy Webspanner", url, inLanguage: "pl-PL" });
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} key="description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} key="canonical" />
      <meta
        name="robots"
        content={
          meta.noIndex
            ? "noindex,follow"
            : "index,follow,max-image-preview:large"
        }
        key="robots"
      />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:site_name" content="Webspanner" />
      <meta property="og:type" content={meta.article ? "article" : "website"} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={siteUrl + "/og-webspanner.png"} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={siteUrl + "/og-webspanner.png"} />
      {!meta.noIndex && (
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": graph,
            }).replace(/</g, "\u003c"),
          }}
        />
      )}
    </Head>
  );
}
