import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function PolitykaPrywatnosci() {
    return (
        <Layout>
            <section className="py-24 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-10 md:p-16 rounded-[40px] border border-gray-200 shadow-sm"
                    >
                        <h1 className="text-4xl md:text-6xl font-black mb-10 text-gray-900 border-b border-gray-100 pb-8 tracking-tight">Polityka Prywatności i Cookies</h1>

                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-light">
                            <p className="mb-8">
                                Szanujemy Twoją prywatność. Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług witryny <strong>webspanner.pl</strong>.
                            </p>

                            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">1. Administrator Danych Osobowych</h3>
                            <p className="mb-6">
                                Administratorem danych osobowych zawartych w serwisie jest Webspanner. Przetwarzamy Twoje dane zgodnie z obowiązującymi przepisami prawa, w szczególności z ogólnym rozporządzeniem o ochronie danych RO-DO.
                            </p>

                            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">2. Cel zbierania i przetwarzania danych</h3>
                            <p className="mb-4">
                                Przekazywane przez Ciebie dane osobowe (np. w formularzu kontaktowym) wykorzystujemy w celu:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Odpowiedzi na Twoje zapytania przesyłane przez formularz kontaktowy.</li>
                                <li>Przygotowania dla Ciebie oferty lub wyceny dedykowanej tworzenia oprogramowania.</li>
                                <li>Monitorowania statystyk analitycznych witryny (Google Analytics).</li>
                            </ul>

                            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">3. Formularz Kontaktowy i SMTP</h3>
                            <p className="mb-6">
                                Korzystając z formularza kontaktowego udostępniasz nam swój adres e-mail i imię. Są one używane w infrastrukturze Vercel oraz przekazywane za pomocą szfrowanego protokołu SSL do serwera dostawcy poczty (Cyber-folks) wyłącznie po to, by odpisać na Twoje wiadomości.
                            </p>

                            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">4. Cookies, analityka i pomiar reklam</h3>
                            <p className="mb-6">
                                Google Analytics uruchamiamy po wyrażeniu zgody na analitykę. Zbieramy statystyki odsłon oraz zdarzenia kontaktu. Zdarzenie skutecznego zapytania zapisujemy po potwierdzeniu przyjęcia wiadomości przez serwer pocztowy. Do Analytics nie przekazujemy treści formularza, imienia, adresu e-mail ani numeru telefonu odwiedzającego. Ustawienia pomiaru Google nie obejmują reklamowej personalizacji ani Google Signals.
                            </p>
                            <p className="mb-6">
                                Meta Pixel (Facebook i Instagram) uruchamiamy wyłącznie po osobnej zgodzie na marketing. Służy do pomiaru skuteczności reklam: rejestruje odsłony oraz zdarzenie Lead po skutecznym wysłaniu formularza. Meta może otrzymywać adres odwiedzanej strony, adres IP, informacje o przeglądarce i urządzeniu oraz identyfikatory, m.in. z cookies _fbp i _fbc. Nie dołączamy do zdarzeń pól formularza ani nie włączamy automatycznego dopasowywania danych kontaktowych. Odbiorcą danych jest Meta Platforms Ireland Limited; szczegóły przetwarzania, w tym przekazywania danych poza Europejski Obszar Gospodarczy, opisuje <a href="https://www.facebook.com/privacy/policy/" className="underline" rel="noreferrer" target="_blank">Polityka prywatności Meta</a>.
                            </p>
                            <p className="mb-6">
                                Wybór „Tylko niezbędne” wyłącza oba opcjonalne rodzaje pomiaru. Zgody na analitykę i marketing są niezależne. Decyzję, datę zapisu i wersję informacji zapisujemy w localStorage przeglądarki na maksymalnie 180 dni, osobno dla danej przeglądarki i urządzenia. Nie prowadzimy centralnego rejestru tych wyborów na serwerze. W każdej chwili możesz zmienić lub wycofać zgody przyciskiem „Ustawienia cookies”. Wycofanie zatrzymuje dalszy pomiar i usuwa dostępne dla tej witryny cookies danego narzędzia; nie usuwa automatycznie danych już przekazanych dostawcy. Sama wcześniejsza zgoda na Google Analytics nie oznacza zgody na Meta Pixel.
                            </p>

                            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">5. Zabezpieczenie danych i prawa użytkownika</h3>
                            <p className="mb-6">
                                Zapewniamy maksymalne bezpieczeństwo przetrzymywania maili. Twoje dane nie są bez Twojej wiedzy odprzedawane spółkom zewnętrznym. Posiadasz prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, czy żądania przeniesienia. Wszelkie wole zmian lub usunięcia danych prosimy kierować na adres: <strong>kontakt@webspanner.pl</strong>.
                            </p>

                            <p className="text-sm text-gray-400 mt-12 italic border-t border-gray-100 pt-6">
                                Ostatnia aktualizacja informacji o pomiarze i zgodach: 23 października 2026 r.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    )
}
