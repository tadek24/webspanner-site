export const GA_ID = "G-FMQEZ4KV3H";
export function trackContactEvent(name, method) {
  if (typeof window === "undefined" || !window.__wsAnalyticsConsent || !window.__wsAnalyticsReady || typeof window.gtag !== "function") return;
  if (!["generate_lead", "contact_click"].includes(name) || !["contact_form", "phone", "email"].includes(method)) return;
  window.gtag("event", name, { method });
}
