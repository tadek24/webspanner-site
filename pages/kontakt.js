import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
export default function Contact() {
  const [status, setStatus] = useState("idle");
  async function submit(e) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <Layout>
      <Head>
        <title>Kontakt — omów projekt | Webspanner</title>
      </Head>
      <section className="ws-section ws-wrap ws-prose">
        <span className="ws-eyebrow">Pierwszy krok</span>
        <h1>
          Opowiedz, czego
          <br />
          potrzebujesz<span className="ws-accent">.</span>
        </h1>
        <p className="ws-lead">
          Nowa strona, sklep czy narzędzie dla zespołu? Napisz, jaki cel chcesz
          osiągnąć. Wrócę z pytaniami i propozycją kolejnego kroku.
        </p>
        <p>
          <a className="ws-text-link" href="mailto:kontakt@webspanner.pl">
            kontakt@webspanner.pl
          </a>{" "}
          ·{" "}
          <a className="ws-text-link" href="tel:+48727469410">
            +48 727 469 410
          </a>
        </p>
        <form className="ws-form" onSubmit={submit}>
          <label>
            Imię i nazwisko
            <input name="name" autoComplete="name" required maxLength={150} />
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
            <input name="subject" maxLength={200} />
          </label>
          <label>
            O projekcie
            <textarea name="message" required maxLength={10000} />
          </label>
          <small>
            Dane z formularza wykorzystuję do odpowiedzi na zapytanie.{" "}
            <Link className="ws-text-link" href="/polityka-prywatnosci">
              Polityka prywatności
            </Link>
          </small>
          <button className="ws-button" disabled={status === "loading"}>
            {status === "loading" ? "Wysyłanie…" : "Wyślij zapytanie ↗"}
          </button>
          <div role="status" aria-live="polite">
            {status === "success"
              ? "Dziękuję. Wiadomość została wysłana."
              : status === "error"
                ? "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na adres e-mail."
                : ""}
          </div>
        </form>
      </section>
    </Layout>
  );
}
