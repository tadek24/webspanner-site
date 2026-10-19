export async function onRequest() {
  return Response.json(
    { message: "Ta funkcja została wyłączona." },
    { status: 410 },
  );
}
