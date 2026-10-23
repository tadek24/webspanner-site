export const GA_ID = "G-FMQEZ4KV3H";

const campaignParameters = [
  "utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_term", "utm_content",
  "utm_source_platform", "utm_creative_format", "utm_marketing_tactic",
  "gclid", "dclid", "gbraid", "wbraid",
];
const clickIdentifiers = new Set(["gclid", "dclid", "gbraid", "wbraid"]);

export function analyticsPageLocation(href) {
  let url;
  try { url = new URL(href); } catch { return null; }
  if (!["https:", "http:"].includes(url.protocol)) return null;
  const query = new URLSearchParams();
  for (const key of campaignParameters) {
    const values = url.searchParams.getAll(key);
    if (values.length !== 1) continue;
    const value = values[0].trim();
    if (!value || value.length > 512 || /[\u0000-\u001f\u007f@]|%40/i.test(value)) continue;
    if (clickIdentifiers.has(key) && !/^[a-zA-Z0-9_-]+$/.test(value)) continue;
    query.set(key, value);
  }
  const search = query.toString();
  return url.origin + url.pathname + (search ? "?" + search : "");
}

export function trackPageView(title, previousLocation = null) {
  if (typeof window === "undefined" || !window.__wsAnalyticsConsent || !window.__wsAnalyticsReady || typeof window.gtag !== "function") return previousLocation;
  const pageLocation = analyticsPageLocation(window.location.href);
  if (!pageLocation || pageLocation === previousLocation) return previousLocation;
  // Apply the filtered URL to subsequent events as well as this page view.
  window.gtag("set", "page_location", pageLocation);
  window.gtag("event", "page_view", { page_title: title, page_location: pageLocation });
  return pageLocation;
}

export function trackContactEvent(name, method) {
  if (typeof window === "undefined" || !window.__wsAnalyticsConsent || !window.__wsAnalyticsReady || typeof window.gtag !== "function") return;
  if (!["generate_lead", "contact_click"].includes(name) || !["contact_form", "phone", "email"].includes(method)) return;
  window.gtag("event", name, { method });
}
