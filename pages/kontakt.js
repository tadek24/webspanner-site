import Layout from "../components/Layout";
import Link from "next/link";
import Portrait from "../components/Portrait";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { getContactContext } from "../lib/contact-intent";
import { trackContactEvent } from "../lib/analytics";
import { trackMetaLead } from "../lib/meta-pixel";
export default function Contact() {
  const router = useRouter();
  const context = getContactContext(router.query);
  const [subject, setSubject] = useState("");
  const subjectEdited = useRef(false);
  const suggestedSubject = context?.subject || "";
  useEffect(() => {
    if (router.isReady && !subjectEdited.current) setSubject(suggestedSubject);
  }, [router.isReady, suggestedSubject]);
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");
  const pending = useRef(false);
  async function submit(e) {
    e.preventDefault();
    if (pending.current) return;
    pending.current = true;
    setStatus("loading");
    setNotice("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 30000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setNotice(
          payload.message ||
            "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na kontakt@webspanner.pl.",
        );
        return;
      }
      setStatus("success");
      if (!data.website) {
        trackContactEvent("generate_lead", "contact_form");
        trackMetaLead();
      }
      setNotice(payload.message || "Dziękuję! Wiadomość została wysłana.");
      form.reset();
      subjectEdited.current = false;
      setSubject(suggestedSubject);
    } catch {
      setStatus("error");
      setNotice(
        "Nie udało się potwierdzić wysyłki. Treść została w formularzu. Sprawdź połączenie lub napisz na kontakt@webspanner.pl.",
      );
    } finally {
      clearTimeout(timer);
      pending.current = false;
    }
  }
  return (
    <Layout>
      <section className="ws-section ws-wrap">
        <span className="ws-eyebrow">Porozmawiajmy o Twojej firmie</span>
        <h1>
          Dobry projekt zaczyna się
          <br />
          od rozmowy<span className="ws-accent">.</span>
        </h1>
        <p className="ws-lead">
          Opisz, co chcesz usprawnić. Pomogę ustalić zakres strony, sklepu,
          konfiguratora lub aplikacji — bez konieczności przygotowywania gotowej
          specyfikacji.
        </p>
        <div className="ws-contact-grid">
          <aside className="ws-contact-person">
            <Portrait compact priority />
            <h2>Rozmawiasz bezpośrednio ze mną.</h2>
            <p>
              Jestem Tadeusz i tworzę Webspanner. Wspólnie ustalimy potrzebne
              funkcje, materiały i następny krok. Możemy porozmawiać online lub
              spotkać się w Twojej firmie — mogę podjechać po uzgodnieniu miejsca,
              terminu i warunków dojazdu.
            </p>
            <a
              className="ws-contact-direct"
              href="mailto:kontakt@webspanner.pl"
            >
              kontakt@webspanner.pl
            </a>
            <a className="ws-contact-direct" href="tel:+48727469410">
              +48 727 469 410
            </a>
            <p className="ws-small">
              Telefon odbieram codziennie w godzinach 7:00–19:00. Wiadomość
              przez formularz możesz wysłać w dowolnym momencie. Spotkania
              odbywają się po wcześniejszym umówieniu; dojeżdżam z okolic Grybowa
              do miejscowości w regionie, w przybliżeniu do 120 km. Możemy też
              porozmawiać online.
            </p>
          </aside>
          <div id="zapytanie" className="ws-inquiry">
            <h2>Opowiedz o projekcie.</h2>
            {context && <div className="ws-inquiry-context" id="contact-brief">
              <p><strong>{context.label}</strong>{context.reference && <> · Inspiracja: {context.reference}</>}</p>
              <p>Wystarczy krótki opis. Pomocne będą odpowiedzi na te pytania:</p>
              <ul>{context.questions.map((question) => <li key={question}>{question}</li>)}</ul>
              <small>Nie musisz znać wszystkich odpowiedzi — zakres ustalimy razem. Temat możesz zmienić.</small>
            </div>}
            <form
              className="ws-form"
              onSubmit={submit}
              aria-busy={status === "loading"}
            >
              <label>
                Imię i nazwisko
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={150}
                />
              </label>
              <label>
                Adres e-mail
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={200}
                />
              </label>
              <label>
                Temat
                <input
                  name="subject"
                  value={subject}
                  onChange={(event) => { subjectEdited.current = true; setSubject(event.target.value); }}
                  maxLength={200}
                  placeholder="Np. strona firmowa lub konfigurator garaży"
                />
              </label>
              <label>
                Co chcesz zrobić?
                <textarea
                  name="message"
                  required
                  maxLength={10000}
                  aria-describedby={context ? "contact-brief" : undefined}
                  placeholder={context?.placeholder || "Cel projektu, potrzebne funkcje, adres obecnej strony — jeśli ją masz."}
                />
              </label>
              <div className="ws-honeypot" aria-hidden="true">
                <label>
                  Zostaw to pole puste
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <small>
                Dane z formularza wykorzystuję do odpowiedzi na zapytanie.{" "}
                <Link className="ws-text-link" href="/polityka-prywatnosci">
                  Polityka prywatności
                </Link>
              </small>
              <button className="ws-button" disabled={status === "loading"}>
                {status === "loading" ? "Wysyłanie…" : "Wyślij zapytanie ↗"}
              </button>
              <div
                className={"ws-form-notice " + status}
                role={status === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {notice}
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
