import test from "node:test";
import assert from "node:assert/strict";
import { analyticsPageLocation, trackPageView, trackContactEvent } from "../lib/analytics.js";

test("landing page preserves Google click identifiers and campaign attribution", () => {
  const url = new URL(analyticsPageLocation("https://www.webspanner.pl/?gclid=Test_Click-123&utm_source=google&utm_medium=cpc&utm_campaign=sklepy&utm_id=123&utm_content=tekst&utm_term=sklep+internetowy"));
  assert.equal(url.searchParams.get("gclid"), "Test_Click-123");
  assert.equal(url.searchParams.get("utm_source"), "google");
  assert.equal(url.searchParams.get("utm_medium"), "cpc");
  assert.equal(url.searchParams.get("utm_campaign"), "sklepy");
  assert.equal(url.searchParams.get("utm_term"), "sklep internetowy");
  for (const key of ["dclid", "gbraid", "wbraid"]) {
    assert.equal(new URL(analyticsPageLocation(`https://www.webspanner.pl/?${key}=Test-123_ABC`)).searchParams.get(key), "Test-123_ABC");
  }
});

test("unknown query data, credentials and fragments never enter the measured URL", () => {
  assert.equal(analyticsPageLocation("https://user:password@www.webspanner.pl/kontakt?email=jan%40example.com&telefon=123456789&message=prywatne&usluga=sklepy-internetowe&projekt=klient#zapytanie"), "https://www.webspanner.pl/kontakt");
  assert.equal(analyticsPageLocation("https://www.webspanner.pl/?utm_source=google&email=private%40example.com#fragment"), "https://www.webspanner.pl/?utm_source=google");
});

test("malformed, ambiguous or contact-containing campaign values are excluded", () => {
  for (const query of ["gclid=a&gclid=b", "gclid=bad%20value", "gclid=%3Cscript%3E", "utm_campaign=jan%40example.com", "utm_campaign=jan%2540example.com", "utm_campaign=private%0Adata", "utm_campaign=" + "a".repeat(513)]) {
    assert.equal(analyticsPageLocation("https://www.webspanner.pl/?" + query), "https://www.webspanner.pl/");
  }
  for (const href of ["not a URL", "javascript:alert(1)", "data:text/plain,private"]) assert.equal(analyticsPageLocation(href), null);
});

test("campaign parameter order and irrelevant query changes cannot duplicate views", () => {
  assert.equal(analyticsPageLocation("https://www.webspanner.pl/?gclid=ABC&utm_source=google&x=1"), analyticsPageLocation("https://www.webspanner.pl/?x=2&utm_source=google&gclid=ABC#next"));
});

test("consent, readiness, navigation and duplicate page views work together", () => {
  const previousWindow = globalThis.window;
  const calls = [];
  globalThis.window = { __wsAnalyticsConsent: false, __wsAnalyticsReady: false, location: { href: "https://www.webspanner.pl/?gclid=Test-123&email=private%40example.com" }, gtag: (...args) => calls.push(args) };
  try {
    let previous = trackPageView("Home");
    assert.equal(previous, null);
    assert.equal(calls.length, 0);
    window.__wsAnalyticsConsent = true;
    assert.equal(trackPageView("Home"), null);
    assert.equal(calls.length, 0);
    window.__wsAnalyticsReady = true;
    previous = trackPageView("Home", previous);
    assert.deepEqual(calls, [
      ["set", "page_location", "https://www.webspanner.pl/?gclid=Test-123"],
      ["event", "page_view", { page_title: "Home", page_location: "https://www.webspanner.pl/?gclid=Test-123" }],
    ]);
    previous = trackPageView("Home", previous);
    assert.equal(calls.length, 2);
    window.location.href = "https://www.webspanner.pl/kontakt?usluga=sklepy-internetowe#zapytanie";
    previous = trackPageView("Contact", previous);
    assert.equal(calls.filter(call => call[1] === "page_view").length, 2);
    assert.equal(calls.at(-1)[2].page_location, "https://www.webspanner.pl/kontakt");
    previous = trackPageView("Contact", previous);
    assert.equal(calls.length, 4);
    window.__wsAnalyticsConsent = false;
    window.location.href = "https://www.webspanner.pl/portfolio";
    assert.equal(trackPageView("Portfolio", previous), previous);
    trackContactEvent("generate_lead", "contact_form");
    assert.equal(calls.length, 4);
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});

test("server rendering never sends analytics", () => {
  assert.equal(trackPageView("Server"), null);
});
