import Link from "next/link";
export const projects = [
  {
    name: "Konfigurator konstrukcji — garaże i wiaty",
    type: "Konfigurator 3D",
    text: "Własny konfigurator garaży: wymiary konstrukcji, wybór dachu, bram, drzwi i okien oraz podgląd 3D. Przykład narzędzia dla producenta oferującego warianty pod wymiar.",
    view: "garage",
    tags: ["Wymiary i dach", "Bramy i otwory", "Wizualizacja 3D"],
  },
  {
    name: "Konfigurator ogrodzeń",
    type: "Konfigurator produktu",
    text: "Przykład wyboru wariantów ogrodzenia i przygotowania oferty. Punkt wyjścia do rozmowy o konfiguratorze dla Twojego asortymentu.",
    view: "config",
    tags: ["Warianty produktu", "Przygotowanie oferty"],
  },
  {
    name: "Panel relacji z klientami",
    type: "Aplikacja biznesowa",
    text: "Przykład narzędzia do organizacji kontaktów i pracy handlowej. Zakres pól, widoków i uprawnień dopasowujemy do procesu firmy.",
    view: "crm",
    tags: ["Kontakty", "Organizacja pracy"],
  },
  {
    name: "Panel sprzedaży marketplace",
    type: "E-commerce / integracje",
    text: "Przykład panelu dla sprzedawcy marketplace. Organizacja sprzedaży i dostęp do danych w jednym miejscu.",
    view: "sales",
    tags: ["Obsługa sprzedaży", "Panel z logowaniem"],
  },
  {
    name: "Strona firmy budowlanej",
    type: "Strona internetowa",
    text: "Prezentacja usług i realizacji w branży budowlanej. Przykład struktury strony, która pomaga klientowi poznać ofertę i nawiązać kontakt.",
    view: "web",
    tags: ["Oferta usług", "Realizacje"],
  },
  {
    name: "Komunikator zespołowy",
    type: "Aplikacja internetowa",
    text: "Demo interfejsu komunikacji. Możliwa baza do zaprojektowania narzędzia współpracy dopasowanego do zespołu.",
    view: "chat",
    tags: ["Wiadomości", "Praca zespołowa"],
  },
];
export function Preview({ kind = "config" }) {
  return (
    <div className={"ws-preview ws-preview-" + kind} aria-hidden="true">
      <div className="ws-window">
        <div className="ws-window-bar">
          <i />
          <i />
          <i />
          <span>Przykładowy interfejs</span>
        </div>
        <div className="ws-ui">
          <div className="ws-ui-side">
            <b>w.</b>
            <i />
            <i />
            <i />
          </div>
          <div className="ws-ui-body">
            <div className="ws-ui-title">
              {kind === "garage"
                ? "Twoja konstrukcja"
                : kind === "config"
                  ? "Twój projekt"
                  : kind === "web"
                    ? "Przestrzeń dla Twojej firmy"
                    : kind === "chat"
                      ? "Rozmowy zespołu"
                      : "Przegląd pracy"}
            </div>
            {kind === "garage" ? (
              <>
                <div className="ws-garage-model">
                  <div className="ws-garage-roof" />
                  <div className="ws-garage-front">
                    <i />
                    <i />
                  </div>
                  <div className="ws-garage-side" />
                </div>
                <div className="ws-ui-options">
                  <span>Wymiary</span>
                  <span>Dach</span>
                  <span>Bramy</span>
                </div>
              </>
            ) : kind === "config" ? (
              <>
                <div className="ws-fence">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <i key={n} />
                  ))}
                </div>
                <div className="ws-ui-options">
                  <span>Model</span>
                  <span>Kolor</span>
                  <span>Wymiary</span>
                </div>
              </>
            ) : (
              <>
                <div className="ws-ui-stats">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="ws-ui-rows">
                  {[1, 2, 3].map((n) => (
                    <div key={n}>
                      <i />
                      <span />
                      <b />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export function ProjectGrid({ limit }) {
  return (
    <div className="ws-projects">
      {projects.slice(0, limit || projects.length).map((p) => (
        <article className="ws-project" key={p.name}>
          <Preview kind={p.view} />
          <div className="ws-project-info">
            <span className="ws-eyebrow">{p.type}</span>
            <h2>{p.name}</h2>
            <p>{p.text}</p>
            <ul className="ws-tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <Link className="ws-text-link" href="/kontakt">
              Zapytaj o prezentację →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
export const services = [
  [
    "01",
    "Strony internetowe",
    "Czytelna oferta, dobrze pokazane realizacje i prosta droga do kontaktu. Strony firmowe, serwisy usługowe i landing pages.",
    "Struktura treści · Projekt interfejsu · Wdrożenie",
  ],
  [
    "02",
    "Sklepy internetowe",
    "Sprzedaż od katalogu po zamówienie. Sklepy z płatnościami, dostawami i integracjami potrzebnymi w codziennej obsłudze.",
    "Katalog · Koszyk i płatności · Integracje",
  ],
  [
    "03",
    "Aplikacje biznesowe",
    "Narzędzia do pracy z klientami, ofertami i informacją. Panele oraz integracje, które porządkują konkretny proces w firmie.",
    "CRM · Panele zespołu · Automatyzacja",
  ],
  [
    "04",
    "Konfiguratory produktów — dodatkowa możliwość",
    "Pomóż klientowi wybrać wariant, określić parametry i wysłać kompletne zapytanie. Reguły konfiguracji dopasowane do produktu.",
    "Warianty · Zależności · Zapytania ofertowe",
  ],
];
export function Services() {
  return (
    <div className="ws-services">
      {services.map(([n, title, text, detail]) => (
        <article key={n}>
          <span className="ws-number">{n}</span>
          <div>
            <h3>
              <Link
                href={
                  "/oferta/" +
                  [
                    "strony-internetowe",
                    "sklepy-internetowe",
                    "aplikacje-biznesowe",
                    "konfiguratory-produktow",
                  ][Number(n) - 1]
                }
              >
                {title}
              </Link>
            </h3>
            <p>{text}</p>
            <small>{detail}</small>
            <br />
            <Link
              className="ws-text-link ws-service-link"
              href={
                "/oferta/" +
                [
                  "strony-internetowe",
                  "sklepy-internetowe",
                  "aplikacje-biznesowe",
                  "konfiguratory-produktow",
                ][Number(n) - 1]
              }
            >
              Poznaj zakres współpracy →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
export function ContactBand() {
  return (
    <section className="ws-contact-band">
      <div className="ws-wrap">
        <div>
          <span className="ws-eyebrow">Porozmawiajmy o Twoim projekcie</span>
          <h2>
            Co chcesz usprawnić
            <br />w swojej firmie?
          </h2>
          <p>
            Opisz pomysł lub problem. Wspólnie ustalimy zakres i następny krok.
          </p>
        </div>
        <Link className="ws-button" href="/kontakt">
          Omów projekt ↗
        </Link>
      </div>
    </section>
  );
}
