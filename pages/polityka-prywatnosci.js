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

                            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">4. Pliki Cookies (Ciasteczka) i Google Analytics</h3>
                            <p className="mb-6">
                                Nasza strona internetowa używa plików cookies. Są to niewielkie pliki tekstowe wysyłane przez serwer www i przechowywane przez oprogramowanie komputera przeglądarki. Wykorzystujemy integrację modułu <strong>Google Analytics</strong> w celu analizowania ruchu (ilość odwiedzin, urządzenia itp). Dzięki tym danym projektujemy stronę tak, by była wygodniejsza w obsłudze. Nie profilujemy automatycznie wyceny na podstawie ciasteczek.
                            </p>

                            <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">5. Zabezpieczenie danych i prawa użytkownika</h3>
                            <p className="mb-6">
                                Zapewniamy maksymalne bezpieczeństwo przetrzymywania maili. Twoje dane nie są bez Twojej wiedzy odprzedawane spółkom zewnętrznym. Posiadasz prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, czy żądania przeniesienia. Wszelkie wole zmian lub usunięcia danych prosimy kierować na adres: <strong>kontakt@webspanner.pl</strong>.
                            </p>
                            
                            <p className="text-sm text-gray-400 mt-12 italic border-t border-gray-100 pt-6">
                                Ostatnia aktualizacja reguł prywatności: kwiecień 2026 r.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    )
}
