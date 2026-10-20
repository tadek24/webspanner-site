import test from "node:test";
import assert from "node:assert/strict";
import { validateContact, smtpConfig, deliverContact } from "../lib/contact.js";
const valid = {
  name: "Klient testowy",
  email: "test@example.com",
  subject: "Test formularza",
  message: "Wiadomość testowa.",
};
const env = { SMTP_PASSWORD: "test-only-value" };
test("rejects missing fields, arrays and oversized messages", () => {
  assert.equal(validateContact(null), null);
  assert.equal(validateContact([]), null);
  assert.equal(validateContact({ ...valid, name: " " }), null);
  assert.equal(validateContact({ ...valid, message: "x".repeat(10001) }), null);
});
test("rejects header injection and malformed email", () => {
  assert.equal(
    validateContact({ ...valid, email: "a@example.com\r\nBcc:x@example.com" }),
    null,
  );
  assert.equal(validateContact({ ...valid, subject: "test\nBcc:x" }), null);
  assert.equal(validateContact({ ...valid, email: "a@invalid" }), null);
});
test("normalizes whitespace without discarding message line breaks", () => {
  assert.equal(
    validateContact({
      ...valid,
      name: "  Klient  ",
      message: " pierwszy\ndrugi ",
    }).message,
    "pierwszy\ndrugi",
  );
});
test("reports missing SMTP configuration without attempting mail", async () => {
  const logs = [];
  const result = await deliverContact(valid, {
    env: {},
    createTransport: () => {
      throw Error("must not run");
    },
    log: (c) => logs.push(c),
  });
  assert.equal(result.status, 503);
  assert.deepEqual(logs, ["CONTACT_SMTP_NOT_CONFIGURED"]);
  assert.ok(!JSON.stringify(result).includes("password"));
});
test("honeypot never opens a connection", async () => {
  const result = await deliverContact(
    { ...valid, website: "spam" },
    {
      env,
      createTransport: () => {
        throw Error("must not run");
      },
    },
  );
  assert.equal(result.status, 200);
});
test("uses TLS and bounded connection timeouts", () => {
  const config = smtpConfig(env);
  assert.equal(config.transport.port, 465);
  assert.equal(config.transport.secure, true);
  assert.equal(config.transport.authMethod, "LOGIN");
  assert.equal(config.transport.connectionTimeout, 10000);
  assert.equal(
    smtpConfig({ ...env, SMTP_PORT: "587" }).transport.requireTLS,
    true,
  );
  assert.equal(smtpConfig({ ...env, SMTP_PORT: "invalid" }), null);
});
test("accepts copied Gmail app-password grouping without changing other SMTP passwords", () => {
  const grouped = "abcd efgh\nijkl mnop\n";
  const config = smtpConfig({ SMTP_PASSWORD: grouped, SMTP_HOST: "smtp.gmail.com\n", SMTP_USER: "tadekkw123@gmail.com\n" });
  assert.equal(config.transport.host, "smtp.gmail.com");
  assert.equal(config.user, "tadekkw123@gmail.com");
  assert.equal(config.transport.auth.pass, "abcdefghijklmnop");
  assert.equal(smtpConfig({ ...env, SMTP_PASSWORD: grouped }).transport.auth.pass, grouped);
  assert.equal(smtpConfig({ SMTP_PASSWORD: "not-an-app-password\n", SMTP_HOST: "smtp.gmail.com" }).transport.auth.pass, "not-an-app-password\n");
});
test("sends reply-to safely and accepts success only after SMTP acceptance", async () => {
  let options;
  let mail;
  let closed = false;
  const result = await deliverContact(valid, {
    env,
    createTransport: (o) => {
      options = o;
      return {
        sendMail: async (m) => {
          mail = m;
          return { accepted: ["kontakt@webspanner.pl"] };
        },
        close: () => {
          closed = true;
        },
      };
    },
  });
  assert.equal(result.status, 200);
  assert.equal(mail.replyTo.address, valid.email);
  assert.equal(mail.from.address, "kontakt@webspanner.pl");
  assert.equal(mail.to, "tadekkw123@gmail.com");
  assert.equal(mail.html, undefined);
  assert.equal(mail.disableFileAccess, true);
  assert.equal(options.auth.pass, env.SMTP_PASSWORD);
  assert.equal(closed, true);
});
test("does not report success when SMTP accepts no recipient", async () => {
  const result = await deliverContact(valid, {
    env,
    createTransport: () => ({
      sendMail: async () => ({ accepted: [] }),
      close() {},
    }),
  });
  assert.equal(result.status, 502);
});
test("redacts provider error and preserves only diagnostic code in logs", async () => {
  const logs = [];
  const result = await deliverContact(valid, {
    env,
    createTransport: () => ({
      sendMail: async () => {
        throw Object.assign(new Error("sensitive-provider-detail"), {
          code: "EAUTH",
        });
      },
      close() {},
    }),
    log: (c) => logs.push(c),
  });
  assert.equal(result.status, 502);
  assert.deepEqual(logs, [{ event: "CONTACT_SMTP_FAILURE", code: "EAUTH", responseCode: null, step: "OTHER", authMethod: "LOGIN", passwordFormat: "OK" }]);
  assert.ok(!JSON.stringify(result).includes("sensitive-provider-detail"));
});
test("reports password formatting without exposing credentials or provider response", async () => {
  for (const [password, expected] of [["private-value\n", "LINE_BREAK"], ['"private-value"', "SURROUNDING_QUOTES"]]) {
    const logs = [];
    const result = await deliverContact(valid, {
      env: { SMTP_PASSWORD: password },
      createTransport: () => ({ sendMail: async () => { throw Object.assign(new Error(password), { code: "unexpected-sensitive-value", response: password, responseCode: 535, command: "AUTH LOGIN" }); }, close() {} }),
      log: entry => logs.push(entry),
    });
    assert.equal(result.status, 502);
    assert.equal(logs[0].code, "CONTACT_SEND_FAILED");
    assert.equal(logs[0].responseCode, 535);
    assert.equal(logs[0].step, "AUTH");
    assert.equal(logs[0].passwordFormat, expected);
    assert.ok(!JSON.stringify({ result, logs }).includes("private-value"));
  }
});
