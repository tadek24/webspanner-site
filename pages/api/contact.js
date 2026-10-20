import nodemailer from "nodemailer";
import { deliverContact } from "../../lib/contact";
export const config = {
  api: { bodyParser: { sizeLimit: "64kb" } },
  maxDuration: 30,
};
const requests = new Map();
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Użyj metody POST." });
  }
  if (
    !String(req.headers["content-type"] || "")
      .toLowerCase()
      .startsWith("application/json")
  )
    return res
      .status(415)
      .json({ message: "Nieobsługiwany format wiadomości." });
  if (req.headers.origin) {
    try {
      if (new URL(req.headers.origin).host !== req.headers.host)
        return res
          .status(403)
          .json({ message: "Wyślij formularz ze strony Webspanner." });
    } catch {
      return res
        .status(403)
        .json({ message: "Niepoprawne źródło formularza." });
    }
  }
  // Best effort per-instance limit; not a distributed anti-abuse service.
  const now = Date.now();
  for (const [key, value] of requests)
    if (value.until <= now) requests.delete(key);
  const ip = String(
    req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown",
  )
    .split(",")[0]
    .trim();
  const current = requests.get(ip);
  if (current && current.count >= 5) {
    res.setHeader("Retry-After", Math.ceil((current.until - now) / 1000));
    return res
      .status(429)
      .json({
        message:
          "Wysłano kilka zapytań w krótkim czasie. Odczekaj kilka minut lub napisz bezpośrednio na e-mail.",
      });
  }
  if (requests.size < 2000 || current)
    requests.set(ip, {
      count: (current?.count || 0) + 1,
      until: current?.until || now + 600000,
    });
  const result = await deliverContact(req.body, {
    env: process.env,
    createTransport: (options) => nodemailer.createTransport(options),
    log: (code) => console.error("[contact]", code),
  });
  return res.status(result.status).json(result.body);
}
