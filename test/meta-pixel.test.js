import test from "node:test";
import assert from "node:assert/strict";
import { META_PIXEL_ID, ANALYTICS_CONSENT_KEY, MARKETING_CONSENT_KEY, CONSENT_VERSION, CONSENT_MAX_AGE, readPreference, savePreference, setMetaConsent, prepareMetaPixel, trackMetaPageView, trackMetaLead } from "../lib/meta-pixel.js";

test("existing analytics consent does not grant marketing consent", () => {
  const now = 1792740000000;
  const values = new Map([[ANALYTICS_CONSENT_KEY, JSON.stringify({value:"granted",savedAt:now})]]);
  const storage = {getItem:key=>values.get(key),setItem:(key,value)=>values.set(key,value)};
  assert.equal(readPreference(storage, ANALYTICS_CONSENT_KEY, now), "granted");
  assert.equal(readPreference(storage, MARKETING_CONSENT_KEY, now), null);
  savePreference(storage, MARKETING_CONSENT_KEY, "denied", now);
  assert.equal(readPreference(storage, MARKETING_CONSENT_KEY, now), "denied");
  assert.equal(readPreference(storage, ANALYTICS_CONSENT_KEY, now), "granted");
  assert.equal(JSON.parse(values.get(MARKETING_CONSENT_KEY)).policyVersion, CONSENT_VERSION);
});

test("expired, future, malformed and old-version marketing choices fail closed", () => {
  const now = 1792740000000;
  for (const record of [null, {}, {value:"granted",savedAt:now+1,policyVersion:CONSENT_VERSION}, {value:"granted",savedAt:now-CONSENT_MAX_AGE,policyVersion:CONSENT_VERSION}, {value:"granted",savedAt:now,policyVersion:"old"}, {value:true,savedAt:now,policyVersion:CONSENT_VERSION}]) {
    assert.equal(readPreference({getItem:()=>JSON.stringify(record)}, MARKETING_CONSENT_KEY, now), null);
  }
  assert.equal(readPreference({getItem:()=>{throw Error("blocked storage");}},MARKETING_CONSENT_KEY,now),null);
});

test("no browser, no consent or an unready SDK cannot send a lead", () => {
  assert.equal(prepareMetaPixel(),false);
  assert.equal(trackMetaLead(),false);
  globalThis.window = {location:{pathname:"/kontakt"}};
  try {
    assert.equal(prepareMetaPixel(),false);
    assert.equal(window.fbq,undefined);
    window.__wsMetaConsent = true;
    assert.equal(trackMetaLead(),false);
  } finally { delete globalThis.window; }
});

test("manual pixel initializes once and sends no form fields or automatic events", () => {
  assert.match(META_PIXEL_ID,/^\d+$/);
  globalThis.window = {__wsMetaConsent:true,location:{pathname:"/kontakt"}};
  try {
    assert.equal(prepareMetaPixel(),true);
    assert.equal(prepareMetaPixel(),true);
    const calls = window.fbq.queue.map(args=>Array.from(args));
    assert.equal(calls.filter(args=>args[0] === "init").length,1);
    assert.equal(calls.some(args=>args[0] === "trackSingle"),false);
    assert.equal(window.fbq.disablePushState,true);
    assert.ok(calls.some(args=>args[0] === "set" && args[1] === "autoConfig" && args[2] === false));
    assert.deepEqual(calls.find(args=>args[0] === "init"),["init",META_PIXEL_ID]);
    window.__wsMetaReady = true;
    let previous = trackMetaPageView();
    previous = trackMetaPageView(previous);
    window.location.pathname = "/portfolio";
    trackMetaPageView(previous);
    assert.equal(trackMetaLead(),true);
    const events = window.fbq.queue.map(args=>Array.from(args)).filter(args=>args[0] === "trackSingle");
    assert.deepEqual(events.map(args=>args[2]),["PageView","PageView","Lead"]);
    assert.ok(events.every(args=>args.length === 3));
    setMetaConsent(false);
    const length = window.fbq.queue.length;
    assert.equal(trackMetaLead(),false);
    assert.equal(trackMetaPageView(),null);
    assert.equal(window.fbq.queue.length,length);
    assert.equal(window.fbq.queue.at(-1)[1],"revoke");
  } finally { delete globalThis.window; }
});

test("an unavailable Meta SDK cannot break form success handling", () => {
  globalThis.window = {__wsMetaConsent:true,__wsMetaReady:true,location:{pathname:"/kontakt"},fbq:()=>{throw Error("SDK unavailable");}};
  try { assert.equal(trackMetaLead(),false); assert.equal(trackMetaPageView(),null); }
  finally { delete globalThis.window; }
});
