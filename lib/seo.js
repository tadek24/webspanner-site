import { articles } from "./articles";
import { services } from "./services";
import { locations } from "./locations";
export const siteUrl = "https://www.webspanner.pl";
export const metadata = {
  "/": {
    title: "Tworzenie stron, sklepów i aplikacji | Webspanner",
    description:
      "Tworzenie stron i sklepów internetowych oraz aplikacji biznesowych. Tadeusz Kwoka — Grybów, Nowy Sącz i współpraca online. Zobacz realizacje i omów projekt.",
  },
  "/oferta": {
    title: "Strony, sklepy internetowe i aplikacje — oferta | Webspanner",
    description:
      "Wybierz usługę dla firmy: tworzenie stron internetowych, sklepów online lub aplikacji biznesowych. Zakres, realizacje, etapy współpracy i indywidualna wycena.",
  },
  "/portfolio": {
    title: "Portfolio — strony, sklepy i konfiguratory 3D | Webspanner",
    description:
      "Zobacz realizacje stron i sklepów oraz przykłady aplikacji Webspanner. Konfiguratory garaży, konstrukcji i ogrodzeń, CRM oraz integracje sprzedaży.",
  },
  "/dema": {
    title: "Przykłady aplikacji i konfiguratorów produktów | Webspanner",
    description:
      "Poznaj sześć przykładów rozwiązań: konfiguratory garaży i ogrodzeń, CRM, sprzedaż marketplace, strona usługowa i komunikator. Zapytaj o prezentację.",
  },
  "/blog": {
    title: "Blog o stronach, sklepach i konfiguratorach | Webspanner",
    description:
      "Praktyczne poradniki dla firm: brief strony internetowej, uruchomienie sklepu, konfigurator produktu, CRM i podstawy SEO. Autor: Tadeusz Kwoka.",
  },
  "/miasta": { title: "Strony internetowe dla firm — miasta i obszar współpracy | Webspanner", description: "Sprawdź obszar współpracy Webspanner: Kraków, Rzeszów, Lublin, Poznań, Wrocław, Nowy Sącz, Gorlice, Jasło i inne miasta. Spotkania na miejscu lub współpraca online." },
  "/kontakt": {
    title: "Kontakt z Tadeuszem Kwoką — omów projekt | Webspanner",
    description:
      "Opisz projekt strony, sklepu lub aplikacji. Bezpośredni kontakt z Tadeuszem Kwoką: kontakt@webspanner.pl, +48 727 469 410. Indywidualna wycena.",
  },
  "/o-nas": {
    title: "Tadeusz Kwoka — bezpośrednia współpraca | Webspanner",
    description:
      "Poznaj twórcę Webspanner. Bezpośrednia współpraca przy stronach, sklepach, konfiguratorach i aplikacjach biznesowych. Od zakresu po wdrożenie.",
  },
  "/baza-wiedzy": {
    title: "Baza wiedzy — przygotowanie projektu internetowego | Webspanner",
    description:
      "Jak przygotować materiały na stronę, uruchomić sklep i zaplanować konfigurator produktu? Praktyczne wskazówki przed rozpoczęciem współpracy.",
  },
  "/polityka-prywatnosci": {
    title: "Polityka prywatności i cookies | Webspanner",
    description:
      "Informacje o przetwarzaniu danych z formularza kontaktowego i korzystaniu z serwisu Webspanner.",
  },
};
for (const s of services)
  metadata["/oferta/" + s.slug] = {
    title: s.seoTitle || s.title + " | Webspanner",
    description: s.description,
  };
for (const a of articles)
  metadata["/blog/" + a.slug] = {
    title: a.title + " | Webspanner",
    description: a.excerpt,
    article: a,
  };
for (const city of locations)
  metadata["/" + city.slug] = {
    title: "Tworzenie stron internetowych " + city.name + " | Webspanner",
    description: "Strony internetowe " + city.locative + ", sklepy online i aplikacje biznesowe. " + (city.localVisit ? "Umówiony dojazd z okolic Grybowa lub rozmowa online." : "Współpraca online bezpośrednio z wykonawcą.") + " Omów zakres i wycenę.",
    city,
  };
export const organization = {
  "@type": "Organization",
  "@id": siteUrl + "/#organization",
  name: "Webspanner",
  legalName: "Webspanner Tadeusz Kwoka",
  url: siteUrl,
  logo: siteUrl + "/og-webspanner.png",
  email: "kontakt@webspanner.pl",
  telephone: "+48727469410",
  sameAs: ["https://www.google.com/maps?cid=5674846645621200610"],
  knowsAbout: ["Tworzenie stron internetowych", "Tworzenie sklepów internetowych", "Aplikacje biznesowe", "Integracje systemów"],
  areaServed: { "@type": "Country", name: "Polska" },
  founder: {
    "@type": "Person",
    name: "Tadeusz Kwoka",
    url: siteUrl + "/o-nas",
    image: siteUrl + "/tadeusz-kwoka.webp",
  },
};
export function pageSeo(pathname) {
  const path = pathname.split(/[?#]/)[0].replace(/\/$/, "") || "/";
  const canonical = path === "/cennik" ? "/oferta" : path;
  return {
    ...(metadata[canonical] || {
      title: "Strona nie istnieje | Webspanner",
      description: "Przejdź do oferty Webspanner lub skontaktuj się z nami.",
    }),
    path: canonical,
    noIndex:
      !metadata[canonical] || process.env.NEXT_PUBLIC_DEPLOY_ENV === "preview",
  };
}
