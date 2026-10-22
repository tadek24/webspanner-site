const services = {
  "strony-internetowe": {
    label: "Strona internetowa",
    questions: [
      "Czym zajmuje się firma i do kogo kierujesz ofertę?",
      "Jakie treści i funkcje powinny znaleźć się na stronie?",
      "Czy masz obecną stronę i planowany termin uruchomienia?",
    ],
    placeholder: "Napisz kilka zdań o firmie, celu strony i potrzebnych funkcjach. Jeśli masz stronę, podaj jej adres.",
  },
  "sklepy-internetowe": {
    label: "Sklep internetowy",
    questions: [
      "Co sprzedajesz i ile produktów lub wariantów ma obejmować sklep?",
      "Jakie płatności, dostawy i połączenia z innymi systemami są potrzebne?",
      "Czy masz już sklep i kiedy chcesz uruchomić nową wersję?",
    ],
    placeholder: "Opisz asortyment, przybliżoną liczbę produktów i potrzebne płatności, dostawy lub integracje.",
  },
  "aplikacje-biznesowe": {
    label: "Aplikacja biznesowa",
    questions: [
      "Jaką czynność w firmie chcesz uporządkować lub przyspieszyć?",
      "Kto będzie korzystać z aplikacji i jak pracuje obecnie?",
      "Z jakimi systemami aplikacja powinna wymieniać dane?",
    ],
    placeholder: "Opisz obecny sposób pracy, problem do rozwiązania i osoby, które będą korzystać z aplikacji.",
  },
  "konfiguratory-produktow": {
    label: "Konfigurator produktów",
    questions: [
      "Jaki produkt klient ma konfigurować?",
      "Jakie warianty, wymiary i zależności trzeba uwzględnić?",
      "Czy efektem ma być wycena, zamówienie czy zapytanie ofertowe?",
    ],
    placeholder: "Opisz produkt, dostępne warianty i to, co klient ma otrzymać po zakończeniu konfiguracji.",
  },
};

const references = {
  "z-rejman": { service: "sklepy-internetowe", title: "Z.Rejman — sklep meblowy" },
  "sklep-rapdach": { service: "sklepy-internetowe", title: "Sklep Rapdach" },
  "rapdach-strona": { service: "strony-internetowe", title: "Rapdach — strona firmowa" },
};

const own = (object, key) => typeof key === "string" && Object.hasOwn(object, key);

export function getContactContext(query = {}) {
  if (!own(services, query.usluga)) return null;
  const service = services[query.usluga];
  const reference = own(references, query.projekt) && references[query.projekt].service === query.usluga
    ? references[query.projekt].title : null;
  return {
    ...service,
    reference,
    subject: reference ? `${service.label} — inspiracja: ${reference}` : service.label,
  };
}

export function contactHref(serviceSlug, projectId) {
  if (!own(services, serviceSlug)) return "/kontakt";
  const query = new URLSearchParams({ usluga: serviceSlug });
  if (own(references, projectId) && references[projectId].service === serviceSlug) {
    query.set("projekt", projectId);
  }
  return `/kontakt?${query}#zapytanie`;
}
