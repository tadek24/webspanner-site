const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const headerSafe = (value) =>
  typeof value === "string" && !/[\r\n\0]/.test(value);
export function validateContact(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  const { name, email, subject = "", message, website = "" } = body;
  if (website) return { spam: true };
  if (
    !headerSafe(name) ||
    !headerSafe(email) ||
    !headerSafe(subject) ||
    typeof message !== "string"
  )
    return null;
  const clean = {
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  };
  if (
    !clean.name ||
    clean.name.length > 150 ||
    !EMAIL.test(clean.email) ||
    clean.email.length > 200 ||
    clean.subject.length > 200 ||
    !clean.message ||
    clean.message.length > 10000
  )
    return null;
  return clean;
}
export function smtpConfig(env) {
  if (!env.SMTP_PASSWORD) return null;
  const port = Number(env.SMTP_PORT || 465);
  const user = env.SMTP_USER || "kontakt@webspanner.pl";
  const to = env.CONTACT_TO || "tadekkw123@gmail.com";
  if (
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    !EMAIL.test(user) ||
    !EMAIL.test(to)
  )
    return null;
  return {
    to,
    user,
    transport: {
      host: env.SMTP_HOST || "s143.cyber-folks.pl",
      port,
      secure: port === 465,
      requireTLS: port !== 465,
      authMethod: "LOGIN",
      auth: { user, pass: env.SMTP_PASSWORD },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    },
  };
}
export async function deliverContact(
  body,
  { env, createTransport, log = () => {} },
) {
  const data = validateContact(body);
  if (!data)
    return {
      status: 400,
      body: {
        message: "Sprawdź imię, poprawność adresu e-mail i treść wiadomości.",
      },
    };
  if (data.spam)
    return { status: 200, body: { message: "Dziękuję za wiadomość." } };
  const config = smtpConfig(env);
  if (!config) {
    log("CONTACT_SMTP_NOT_CONFIGURED");
    return {
      status: 503,
      body: {
        message:
          "Formularz jest chwilowo niedostępny. Napisz na kontakt@webspanner.pl lub zadzwoń: +48 727 469 410.",
      },
    };
  }
  const transporter = createTransport(config.transport);
  try {
    const result = await transporter.sendMail({
      from: { name: "Webspanner — formularz", address: config.user },
      to: config.to,
      replyTo: { name: data.name, address: data.email },
      subject: "[Webspanner] " + (data.subject || "Nowe zapytanie"),
      text: "Od: " + data.name + " <" + data.email + ">\n\n" + data.message,
      disableFileAccess: true,
      disableUrlAccess: true,
    });
    if (!result.accepted?.length)
      throw Object.assign(new Error("Rejected"), { code: "EREJECTED" });
    return {
      status: 200,
      body: {
        message:
          "Dziękuję! Serwer pocztowy przyjął wiadomość. Odpowiem na podany adres e-mail.",
      },
    };
  } catch (error) {
    const knownCodes = ["EAUTH", "ECONNECTION", "ETIMEDOUT", "ESOCKET", "EENVELOPE", "EMESSAGE", "EREJECTED", "EDNS"];
    const pass = config.transport.auth.pass;
    log({
      event: "CONTACT_SMTP_FAILURE",
      code: knownCodes.includes(error?.code) ? error.code : "CONTACT_SEND_FAILED",
      responseCode: Number.isInteger(error?.responseCode) ? error.responseCode : null,
      step: String(error?.command || "").startsWith("AUTH") ? "AUTH" : "OTHER",
      authMethod: "LOGIN",
      passwordFormat: /[\r\n]/.test(pass) ? "LINE_BREAK" : /^(["']).*\1$/.test(pass) ? "SURROUNDING_QUOTES" : "OK",
    });
    return {
      status: 502,
      body: {
        message:
          "Nie udało się wysłać wiadomości. Treść pozostaje w formularzu. Spróbuj później lub napisz na kontakt@webspanner.pl.",
      },
    };
  } finally {
    transporter.close?.();
  }
}
