import test from "node:test";
import assert from "node:assert/strict";
import { contactHref, getContactContext } from "../lib/contact-intent.js";

test("each service link carries an editable subject and useful message guidance", () => {
  for (const slug of ["strony-internetowe", "sklepy-internetowe", "aplikacje-biznesowe", "konfiguratory-produktow"]) {
    const url = new URL(contactHref(slug), "https://www.webspanner.pl");
    assert.equal(url.pathname, "/kontakt");
    assert.equal(url.hash, "#zapytanie");
    const context = getContactContext(Object.fromEntries(url.searchParams));
    assert.ok(context.subject.length > 10 && context.subject.length <= 200);
    assert.equal(context.questions.length, 3);
    assert.ok(context.placeholder);
    assert.equal(context.reference, null);
  }
});

test("portfolio references travel with the matching service only", () => {
  const url = new URL(contactHref("sklepy-internetowe", "z-rejman"), "https://www.webspanner.pl");
  const context = getContactContext(Object.fromEntries(url.searchParams));
  assert.match(context.subject, /Z.Rejman/);
  assert.equal(context.reference, "Z.Rejman — sklep meblowy");
  assert.equal(getContactContext({ usluga: "strony-internetowe", projekt: "z-rejman" }).reference, null);
  assert.equal(new URL(contactHref("strony-internetowe", "z-rejman"), url).searchParams.has("projekt"), false);
});

test("unknown, repeated and inherited query parameters cannot inject form content", () => {
  for (const value of [undefined, "", "__proto__", "constructor", "<script>", "strona\r\nBcc: victim@example.com", ["strony-internetowe"]]) {
    assert.equal(getContactContext({ usluga: value }), null);
    assert.equal(contactHref(value), "/kontakt");
  }
  assert.equal(getContactContext(), null);
  const context = getContactContext({ usluga: "strony-internetowe", projekt: "<script>", subject: "Injected" });
  assert.equal(context.subject, "Strona internetowa");
  assert.equal(context.reference, null);
});
