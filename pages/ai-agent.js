export async function getServerSideProps() {
  return { redirect: { destination: "/kontakt", permanent: true } };
}
export default function LegacyContact() {
  return null;
}
