import { serviceContent } from "./service-content";
export const services = [
  {
    slug: "strony-internetowe",
    title: "Strony internetowe dla firm",
    lead: "Pokaż ofertę tak, żeby klient wiedział, co robisz i jak rozpocząć współpracę.",
    description:
      "Tworzenie stron internetowych dla firm: struktura oferty, projekt, wdrożenie, formularze i podstawy SEO. Bezpośrednia współpraca z Webspanner.",
    forWho:
      "Dla firm usługowych, producentów i specjalistów, którzy potrzebują czytelnej prezentacji swojej oferty oraz zapytań od właściwych klientów.",
    deliverables: [
      "Struktura podstron oparta na usługach i pytaniach klientów.",
      "Indywidualny układ dopasowany do materiałów i identyfikacji firmy.",
      "Widoki na telefon i komputer, formularze oraz podstawy techniczne SEO.",
      "Przekazanie strony i ustalone zasady dalszej obsługi.",
    ],
    process: [
      [
        "Ustalamy cel i materiały",
        "Zaczynamy od tego, komu strona ma pomagać i jakie informacje są potrzebne do podjęcia kontaktu. Weryfikujemy istniejące treści oraz zdjęcia.",
      ],
      [
        "Projektujemy najważniejszą ścieżkę",
        "Układamy ofertę, realizacje i wezwania do kontaktu. Oglądasz kierunek wizualny przed pełnym wdrożeniem.",
      ],
      [
        "Sprawdzamy i uruchamiamy",
        "Testujemy działanie formularzy, nawigację i widoki mobilne. Przy zmianie starej witryny uwzględniamy uzgodnione przekierowania.",
      ],
    ],
    faq: [
      [
        "Czy będę mógł edytować treści?",
        "Sposób edycji ustalamy przed wyceną. Możemy zaplanować panel do samodzielnych zmian albo obsługę aktualizacji przez Webspanner.",
      ],
      [
        "Co wpływa na wycenę strony?",
        "Liczba i rodzaj widoków, przygotowanie treści, języki, formularze, integracje oraz migracja. Najpierw ustalamy zakres, potem wycenę.",
      ],
    ],
  },
  {
    slug: "sklepy-internetowe",
    title: "Sklepy internetowe i integracje sprzedaży",
    lead: "Zbuduj wygodną ścieżkę od wyboru produktu do obsługi zamówienia.",
    description:
      "Projektowanie sklepów internetowych, katalogów, koszyka, płatności i integracji sprzedaży. Zakres i wycena dopasowane do Twojej firmy.",
    forWho:
      "Dla firm rozpoczynających sprzedaż online oraz sklepów, które potrzebują uporządkowania katalogu, procesu zakupu albo połączenia z zapleczem sprzedaży.",
    deliverables: [
      "Kategorie, parametry i warianty produktów dopasowane do asortymentu.",
      "Karty produktów, koszyk i proces zakupu na urządzeniach mobilnych.",
      "Uzgodnione płatności, dostawy oraz wiadomości transakcyjne.",
      "Połączenia z systemami sprzedaży i magazynem w ustalonym zakresie.",
    ],
    process: [
      [
        "Porządkujemy katalog",
        "Ustalamy rodzaje produktów, warianty, stany oraz źródła danych. Wybieramy scenariusze do testów.",
      ],
      [
        "Budujemy ścieżkę zakupu",
        "Projektujemy sposób znalezienia produktu i przejścia do zamówienia. Dopasowujemy integracje do obsługi firmy.",
      ],
      [
        "Testujemy cały proces",
        "Sprawdzamy zakup, przerwaną płatność, statusy i przekazanie zamówienia. Zakres dalszej opieki ustalamy przed startem.",
      ],
    ],
    faq: [
      [
        "Czy mogę przenieść obecny sklep?",
        "Tak, zakres migracji ustalamy po sprawdzeniu danych, obecnego systemu, adresów i integracji. Migrację warto zaplanować przed zmianą wyglądu.",
      ],
      [
        "Czy integracje są w standardzie?",
        "Każde połączenie opisujemy w zakresie projektu. Koszty usług zewnętrznych i wymagania ich dostawców ustalamy osobno.",
      ],
    ],
  },
  {
    slug: "konfiguratory-produktow",
    title: "Konfiguratory produktów i konstrukcji 3D",
    lead: "Pomóż klientowi wybrać wariant i przekaż handlowcowi komplet parametrów.",
    description:
      "Konfiguratory produktów, garaży i konstrukcji. Wymiary, warianty, reguły wyboru i wizualizacja 3D dopasowane do procesu ofertowania producenta.",
    forWho:
      "Dla producentów i firm oferujących produkty z wieloma wariantami: garaże, konstrukcje, ogrodzenia i inne rozwiązania przygotowywane pod wymiar.",
    deliverables: [
      "Wybór wymiarów, wariantów, kolorów i elementów dodatkowych.",
      "Zależności oraz ograniczenia zgodne z uzgodnionymi regułami produktu.",
      "Podgląd 2D lub 3D, jeśli pomaga w wyborze i ocenie konfiguracji.",
      "Czytelne podsumowanie parametrów oraz przekazanie zapytania do obsługi.",
    ],
    process: [
      [
        "Spisujemy reguły produktu",
        "Ustalamy dostępne warianty, dopuszczalne wymiary i kombinacje. Wskazujemy, co wymaga zatwierdzenia przez handlowca.",
      ],
      [
        "Projektujemy wybór i podgląd",
        "Układamy kroki, jednostki i komunikaty. Dobieramy wizualizację do rzeczywistej potrzeby klienta.",
      ],
      [
        "Testujemy konfiguracje",
        "Sprawdzamy przykładowe poprawne i niedopuszczalne kombinacje oraz wynikowe zapytanie. Ustalamy sposób aktualizacji danych.",
      ],
    ],
    faq: [
      [
        "Czy konfigurator musi pokazywać cenę?",
        "Nie. Może zbierać komplet parametrów do indywidualnej wyceny. Automatyczne wartości handlowe wymagają osobnych reguł i aktualnych danych.",
      ],
      [
        "Czy można skonfigurować garaż lub wiatę?",
        "Tak. Przykład w portfolio obejmuje wymiary garażu, dach, bramy, otwory i opcję wiaty. Zakres dla Twoich konstrukcji ustalamy indywidualnie.",
      ],
    ],
  },
  {
    slug: "aplikacje-biznesowe",
    title: "Aplikacje biznesowe i panele dla zespołów",
    lead: "Uporządkuj proces, który dziś opiera się na arkuszach i przepisywaniu danych.",
    description:
      "Dedykowane aplikacje biznesowe, panele CRM i integracje dla firm. Kontakty, oferty, zadania i uprawnienia dopasowane do pracy zespołu.",
    forWho:
      "Dla zespołów, które potrzebują wspólnego narzędzia do obsługi klientów, ofert, zadań lub danych oraz mają proces wymagający indywidualnego dopasowania.",
    deliverables: [
      "Widoki i formularze do konkretnego procesu w firmie.",
      "Role i uprawnienia ustalone na podstawie odpowiedzialności zespołu.",
      "Integracje oraz import lub eksport danych w uzgodnionym zakresie.",
      "Scenariusze sprawdzenia, przekazanie i plan rozwoju pierwszej wersji.",
    ],
    process: [
      [
        "Opisujemy codzienną pracę",
        "Wskazujemy problem, role i niezbędne dane. Sprawdzamy, czy cel można osiągnąć gotowym narzędziem lub mniejszym modułem.",
      ],
      [
        "Budujemy pierwszą wersję",
        "Skupiamy się na najważniejszym przepływie, zamiast od razu odtwarzać wszystkie funkcje dużego systemu.",
      ],
      [
        "Weryfikujemy z zespołem",
        "Testujemy realne scenariusze, dostęp do danych oraz przypadki błędne. Ustalamy utrzymanie i kolejne kroki.",
      ],
    ],
    faq: [
      [
        "Czy potrzebuję własnego CRM?",
        "Nie zawsze. Najpierw sprawdzamy proces i ograniczenia dostępnych rozwiązań. Własny panel powinien mieć uzasadnienie w sposobie pracy firmy.",
      ],
      [
        "Co z rozwojem po wdrożeniu?",
        "Możemy zaplanować kolejne etapy i opiekę. Zasady aktualizacji, kopii zapasowych i obsługi zgłoszeń określamy w ustaleniach.",
      ],
    ],
  },
].map((service) => ({ ...service, ...serviceContent[service.slug] }));
