import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import CookieConsent from "./CookieConsent";
import { GA_ID, analyticsPageLocation, trackPageView, trackContactEvent } from "../lib/analytics";
import { pageSeo } from "../lib/seo";
import { META_PIXEL_ID, ANALYTICS_CONSENT_KEY, MARKETING_CONSENT_KEY, readPreference, savePreference, setMetaConsent, prepareMetaPixel, trackMetaPageView } from "../lib/meta-pixel";
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
  const [marketingConsent, setMarketingConsent] = useState(null);
  const [draftAnalytics, setDraftAnalytics] = useState(false);
  const [draftMarketing, setDraftMarketing] = useState(false);
  const [metaPrepared, setMetaPrepared] = useState(false);
  const [editing, setEditing] = useState(false);
  const [production, setProduction] = useState(false);
  const lastPageLocation = useRef(null);
  const lastMetaPath = useRef(null);
  useEffect(() => {
    setProduction(["www.webspanner.pl", "webspanner.pl"].includes(location.hostname) && process.env.NEXT_PUBLIC_DEPLOY_ENV !== "preview");
    function restore() {
      let analytics = null, marketing = null;
      try {
        analytics = readPreference(localStorage, ANALYTICS_CONSENT_KEY);
        marketing = readPreference(localStorage, MARKETING_CONSENT_KEY);
      } catch {}
      setConsent(analytics); setDraftAnalytics(analytics === "granted");
      setMarketingConsent(marketing); setDraftMarketing(marketing === "granted");
    }
    restore();
    const sync = event => { if (!event.key || [ANALYTICS_CONSENT_KEY, MARKETING_CONSENT_KEY].includes(event.key)) restore(); };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  const enabled = production && consent === "granted";
  const marketingEnabled = production && marketingConsent === "granted" && /^\d+$/.test(META_PIXEL_ID);
  function metaPageView() { lastMetaPath.current = trackMetaPageView(lastMetaPath.current); }
  function metaReady() { window.__wsMetaReady = true; metaPageView(); }
  useEffect(() => {
    setMetaConsent(marketingEnabled);
    if (!marketingEnabled) return;
    if (prepareMetaPixel()) setMetaPrepared(true);
    metaPageView();
  }, [marketingEnabled]);
  function pageView() {
    lastPageLocation.current = trackPageView(pageSeo(location.pathname).title, lastPageLocation.current);
  }
  function ready() {
    if (!window.__wsAnalyticsConsent) return;
    if (!window.__wsAnalyticsReady) {
      window.gtag("js", new Date());
      window.gtag("config", GA_ID, { send_page_view: false, page_location: analyticsPageLocation(location.href), allow_google_signals: false, allow_ad_personalization_signals: false });
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
    const view = () => requestAnimationFrame(() => { pageView(); metaPageView(); });
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
  function choose(analytics, marketing) {
    const value = analytics ? "granted" : "denied";
    const marketingValue = marketing ? "granted" : "denied";
    window.__wsAnalyticsConsent = production && analytics;
    window["ga-disable-"+GA_ID] = !window.__wsAnalyticsConsent;
    if (value === "denied") clearAnalyticsCookies();
    setMetaConsent(production && marketing && /^\d+$/.test(META_PIXEL_ID));
    try {
      savePreference(localStorage, ANALYTICS_CONSENT_KEY, value);
      savePreference(localStorage, MARKETING_CONSENT_KEY, marketingValue);
    } catch {}
    setConsent(value); setMarketingConsent(marketingValue);
    setDraftAnalytics(analytics); setDraftMarketing(marketing); setEditing(false);
  }
  return <>
    {enabled && <Script id="webspanner-ga4" src={"https://www.googletagmanager.com/gtag/js?id="+GA_ID} strategy="afterInteractive" onReady={ready}/>}
    {metaPrepared && <Script id="webspanner-meta-pixel" src="https://connect.facebook.net/en_US/fbevents.js" strategy="afterInteractive" onReady={metaReady}/>}
    <CookieConsent analytics={consent} marketing={marketingConsent} draftAnalytics={draftAnalytics} draftMarketing={draftMarketing} setDraftAnalytics={setDraftAnalytics} setDraftMarketing={setDraftMarketing} editing={editing} setEditing={setEditing} choose={choose}/>
  </>;
}
