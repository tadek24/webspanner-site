export const META_PIXEL_ID = "29794899160098519";
export const ANALYTICS_CONSENT_KEY = "webspanner-analytics-consent-v1";
export const MARKETING_CONSENT_KEY = "webspanner-marketing-consent-v1";
export const CONSENT_VERSION = "2026-10-23";
export const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;

export function readPreference(storage, key, now = Date.now()) {
  try {
    const saved = JSON.parse(storage.getItem(key));
    if (!saved || !["granted", "denied"].includes(saved.value) || !Number.isFinite(saved.savedAt)) return null;
    const age = now - saved.savedAt;
    if (age < 0 || age >= CONSENT_MAX_AGE) return null;
    if (key === MARKETING_CONSENT_KEY && saved.policyVersion !== CONSENT_VERSION) return null;
    return saved.value;
  } catch { return null; }
}

export function savePreference(storage, key, value, now = Date.now()) {
  try { storage.setItem(key, JSON.stringify({ value, savedAt: now, policyVersion: CONSENT_VERSION })); } catch {}
}

export function clearMetaCookies() {
  if (typeof document === "undefined") return;
  for (const key of ["_fbp", "_fbc"]) {
    for (const domain of ["", "; domain=" + location.hostname, "; domain=." + location.hostname, "; domain=.webspanner.pl"]) {
      document.cookie = key + "=; Max-Age=0; path=/; SameSite=Lax" + domain;
    }
  }
}

export function setMetaConsent(enabled) {
  if (typeof window === "undefined") return;
  window.__wsMetaConsent = enabled;
  try { if (typeof window.fbq === "function") window.fbq("consent", enabled ? "grant" : "revoke"); } catch {}
  if (!enabled) clearMetaCookies();
}

export function prepareMetaPixel() {
  if (typeof window === "undefined" || !window.__wsMetaConsent || !/^\d+$/.test(META_PIXEL_ID)) return false;
  if (!window.fbq) {
    const fbq = function () {
      if (fbq.callMethod) fbq.callMethod.apply(fbq, arguments);
      else fbq.queue.push(arguments);
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;
  }
  if (!window.__wsMetaInitialized) {
    window.fbq.disablePushState = true;
    window.fbq("consent", "grant");
    window.fbq("set", "autoConfig", false, META_PIXEL_ID);
    window.fbq("init", META_PIXEL_ID);
    window.__wsMetaInitialized = true;
  }
  return true;
}

function canTrack() {
  return typeof window !== "undefined" && window.__wsMetaConsent && window.__wsMetaReady &&
    typeof window.fbq === "function" && /^\d+$/.test(META_PIXEL_ID);
}

export function trackMetaPageView(previousPath = null) {
  if (!canTrack()) return previousPath;
  const path = window.location.pathname;
  if (path === previousPath) return previousPath;
  try { window.fbq("trackSingle", META_PIXEL_ID, "PageView"); return path; } catch { return previousPath; }
}

export function trackMetaLead() {
  if (!canTrack()) return false;
  try { window.fbq("trackSingle", META_PIXEL_ID, "Lead"); return true; } catch { return false; }
}
