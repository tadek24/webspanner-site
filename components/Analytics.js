import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Link from "next/link";
import { GA_ID, trackContactEvent } from "../lib/analytics";
const STORAGE_KEY = "webspanner-analytics-consent-v1";
const denied = { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" };
function clearAnalyticsCookies() {
  for (const item of document.cookie.split(";")) {
    const key = item.split("=")[0].trim();
    if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(key)) continue;
    for (const domain of ["", "; domain=" + location.hostname, "; domain=.webspanner.pl"]) document.cookie = key + "=; Max-Age=0; path=/; SameSite=Lax" + domain;
  }
}
export default function Analytics() {
  const router = useRouter();
  const [consent, setConsent] = useState(null);
  const [editing, setEditing] = useState(false);
  const [production, setProduction] = useState(false);
  const lastPath = useRef(null);
  useEffect(() => {
    setProduction(["www.webspanner.pl", "webspanner.pl"].includes(location.hostname) && process.env.NEXT_PUBLIC_DEPLOY_ENV !== "preview");
    try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)); if (saved && ["granted", "denied"].includes(saved.value) && Date.now() - saved.savedAt < 180*24*60*60*1000) setConsent(saved.value); } catch {}
  }, []);
  const enabled = production && consent === "granted";
  function pageView() {
    if (!window.__wsAnalyticsConsent || !window.__wsAnalyticsReady) return;
    const path = location.pathname;
    if (lastPath.current === path) return;
    lastPath.current = path;
    window.gtag("event", "page_view", { page_title: document.title, page_location: location.origin + path });
  }
  function ready() {
    if (!window.__wsAnalyticsConsent) return;
    if (!window.__wsAnalyticsReady) {
      window.gtag("js", new Date());
      window.gtag("config", GA_ID, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
      window.__wsAnalyticsReady = true;
    }
    pageView();
  }
  useEffect(() => {
    window.__wsAnalyticsConsent = enabled;
    window["ga-disable-" + GA_ID] = !enabled;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", denied);
    window.gtag("consent", "update", { ...denied, analytics_storage: enabled ? "granted" : "denied" });
    if (!enabled) { clearAnalyticsCookies(); return; }
    if (window.__wsAnalyticsReady) pageView();
  }, [enabled]);
  useEffect(() => {
    const view = () => requestAnimationFrame(pageView);
    router.events.on("routeChangeComplete", view);
    const click = event => {
      const link = event.target.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.startsWith("tel:")) trackContactEvent("contact_click", "phone");
      if (href.startsWith("mailto:")) trackContactEvent("contact_click", "email");
    };
    document.addEventListener("click", click);
    return () => { router.events.off("routeChangeComplete", view); document.removeEventListener("click", click); };
  }, [router.events]);
  function choose(value) {
    window.__wsAnalyticsConsent = production && value === "granted";
    window["ga-disable-"+GA_ID] = !window.__wsAnalyticsConsent;
    if (value === "denied") clearAnalyticsCookies();
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({value, savedAt:Date.now()})); } catch {}
    setConsent(value); setEditing(false);
  }
  return <>
    {enabled && <Script id="webspanner-ga4" src={"https://www.googletagmanager.com/gtag/js?id="+GA_ID} strategy="afterInteractive" onReady={ready}/>}
    {(consent === null || editing) && <section className="ws-consent" aria-label="Ustawienia prywatności"><div><strong>Pomóż ulepszać stronę</strong><p>Za Twoją zgodą Google Analytics zbiera statystyki odwiedzin. Możesz korzystać ze strony bez analityki i zmienić wybór w dowolnej chwili. <Link href="/polityka-prywatnosci">Więcej informacji</Link>.</p></div><div className="ws-consent-actions"><button type="button" className="ws-button ws-button-outline" onClick={()=>choose("denied")}>Tylko niezbędne</button><button type="button" className="ws-button" onClick={()=>choose("granted")}>Zgadzam się na analitykę</button></div></section>}
    {consent !== null && !editing && <button type="button" className="ws-consent-settings" onClick={()=>setEditing(true)}>Ustawienia prywatności</button>}
  </>;
}
