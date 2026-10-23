import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function CookieConsent({ analytics, marketing, draftAnalytics, draftMarketing, setDraftAnalytics, setDraftMarketing, editing, setEditing, choose }) {
  const [details, setDetails] = useState(false);
  const panel = useRef(null);
  const previousFocus = useRef(null);
  const needsChoice = analytics === null || marketing === null;
  const showDetails = details || editing;

  function closeDetails() { setDetails(false); setEditing(false); }
  function save(analyticsValue, marketingValue) {
    choose(analyticsValue, marketingValue);
    closeDetails();
  }
  function openSettings() {
    setDraftAnalytics(analytics === "granted");
    setDraftMarketing(marketing === "granted");
    setEditing(true);
  }
  useEffect(() => {
    if (!showDetails) return;
    previousFocus.current = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.focus();
    function onKey(event) {
      if (event.key === "Escape") { event.preventDefault(); closeDetails(); }
      if (event.key !== "Tab") return;
      const items = panel.current?.querySelectorAll('button:not([disabled]), a[href], input:not([disabled])');
      if (!items?.length) return;
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === panel.current)) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && (document.activeElement === last || document.activeElement === panel.current)) { event.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      previousFocus.current?.focus?.();
    };
  }, [showDetails]);

  return <>
    {needsChoice && !showDetails && <section className="ws-cookie-banner" aria-labelledby="cookie-banner-title">
      <div><h2 id="cookie-banner-title">Zgoda na pliki cookie i dane</h2>
        <p>Używamy plików cookie i podobnych technologii, aby strona działała poprawnie. Za Twoją zgodą pomagają nam też analizować odwiedziny, ulepszać stronę i mierzyć skuteczność reklam. Zgoda jest dobrowolna. Możesz korzystać ze strony bez opcjonalnych cookies i zmienić wybór w dowolnej chwili.</p>
        <Link href="/polityka-prywatnosci">Polityka prywatności i cookies</Link>
      </div>
      <div className="ws-cookie-actions">
        <button type="button" onClick={()=>save(true,true)}>Akceptuję wszystkie</button>
        <button type="button" onClick={()=>save(false,false)}>Tylko niezbędne</button>
        <button type="button" onClick={()=>setDetails(true)}>Dostosuj zgody</button>
      </div>
    </section>}
    {!needsChoice && !showDetails && <button type="button" className="ws-consent-settings" onClick={openSettings}>Ustawienia cookies</button>}
    {showDetails && <div className="ws-cookie-backdrop">
      <section ref={panel} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title" className="ws-cookie-dialog">
        <header><div><span className="ws-cookie-eyebrow">Twoja prywatność</span><h2 id="cookie-settings-title">Skonfiguruj zgody</h2></div><button type="button" className="ws-cookie-close" aria-label="Zamknij ustawienia cookies" onClick={closeDetails}>×</button></header>
        <div className="ws-cookie-content">
          <p className="ws-cookie-intro">Dostosuj ustawienia ciasteczek. Każdą opcjonalną zgodę możesz włączyć lub wyłączyć niezależnie.</p>
          <section className="ws-cookie-category"><div className="ws-cookie-category-heading"><h3>Ciasteczka niezbędne do korzystania ze strony</h3><span className="ws-cookie-required">Zawsze aktywne</span></div><p>Umożliwiają prawidłowe działanie podstawowych funkcji strony oraz zapamiętanie Twoich decyzji dotyczących prywatności.</p></section>
          <section className="ws-cookie-category"><h3>Ciasteczka umożliwiające ulepszanie strony</h3><label className="ws-cookie-toggle"><input type="checkbox" role="switch" aria-label="Ciasteczka umożliwiające ulepszanie strony" checked={draftAnalytics} onChange={event=>setDraftAnalytics(event.target.checked)}/><span aria-hidden="true" className="ws-cookie-track"/><span>{draftAnalytics ? "Akceptuję" : "Nie akceptuję"}</span></label><p>Pomagają nam zrozumieć, jak odwiedzający korzystają ze strony, które treści są przydatne i co warto poprawić.</p></section>
          <section className="ws-cookie-category"><h3>Ciasteczka marketingowe</h3><label className="ws-cookie-toggle"><input type="checkbox" role="switch" aria-label="Ciasteczka marketingowe" checked={draftMarketing} onChange={event=>setDraftMarketing(event.target.checked)}/><span aria-hidden="true" className="ws-cookie-track"/><span>{draftMarketing ? "Akceptuję" : "Nie akceptuję"}</span></label><p>Pozwalają mierzyć skuteczność reklam, powiązać odwiedziny i zapytania z reklamami oraz lepiej dopasowywać działania reklamowe. Dane o korzystaniu ze strony mogą być przekazywane partnerom reklamowym.</p></section>
          <p className="ws-cookie-note">Wybór zapisujemy w tej przeglądarce na maksymalnie 180 dni. Możesz go zmienić lub wycofać przyciskiem „Ustawienia cookies”. <Link href="/polityka-prywatnosci">Szczegóły i dostawcy narzędzi</Link>.</p>
        </div>
        <footer className="ws-cookie-actions"><button type="button" onClick={()=>save(draftAnalytics,draftMarketing)}>Zapisz moje ustawienia</button><button type="button" onClick={()=>save(false,false)}>Tylko niezbędne</button><button type="button" onClick={()=>save(true,true)}>Akceptuję wszystkie</button></footer>
      </section>
    </div>}
  </>;
}
