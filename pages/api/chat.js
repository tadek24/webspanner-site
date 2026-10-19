export default function handler(req, res) {
  res
    .status(410)
    .json({
      message:
        "Ta funkcja została wyłączona. Skorzystaj z formularza kontaktowego.",
    });
}
