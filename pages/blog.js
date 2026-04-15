import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import { Newspaper, X, Clock, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(null)

    const posts = [
        {
            title: "Jak zacząć sprzedaż online w 2026?",
            excerpt: "Strategia wejścia na rynek e-commerce krok po kroku.",
            content: "### Faza Pierwsza - Skonkretyzowanie niszy i modelu zysków\nPrzed napisaniem linijki kodu, musisz upewnić się, czy Twój biznes operuje na modelu B2C (detal) czy B2B (hurt). W 2026 nie można 'po prostu założyć sklepu ze wszystkim'. Ustal wąską ofertę – to minimalizuje koszty startowego marketingu.\n\n### Faza Druga - Zbudowanie rdzenia technicznego\nPodstawa, na której oprzesz biznes, zadecyduje o stabilności. Czy to Headless CMS z frontendem w React? Czy system oparty na WooCommerce? Jeśli nie jesteś pewien, opłaca się zobaczyć profesjonalne pakiety startowe wdrożenia – polecamy zajrzeć w nasz zmodernizowany <a href='/cennik' class='text-[#7C3AED] hover:underline font-bold'>katalog i cennik technologii</a>, który ściągnie trudne decyzje z Twoich barków.\n\n### Faza Trzecia - Obsługa Płatności i Kurierów\nW Polsce bramka płatnicza (PayU, Przelewy24, Tpay, Autopay) oraz wtyczka firmy kurierskiej (InPost Paczkomaty / kurier DPD) to system zero-jedynkowy przy konwersji ze strony klienta. System ten ma zadziałać płynnie, bo jedna 'zacinka' podczas potwierdzania torebki na smartfonie, gwarantuje bezwarunkowo porzucenie koszyka.",
            category: "E-commerce Start",
            readTime: "7 min"
        },
        {
            title: "SEO dla lokalnych przedsiębiorców.",
            excerpt: "Dlaczego pozycjonowanie w promieniu 50 kilometrów to Twoja główna broń.",
            content: "### Siła słowa w okolicy\nFirmy instalatorskie, salony kosmetyczne, restauracje wegańskie albo serwisy samochodowe (jak nasze interaktywne <a href='/dema' class='text-[#7C3AED] hover:underline font-bold'>demo branżowe</a>) nie konkurują z molochami z Warszawy czy Krakowa, jeśli znajdują się w Tarnowie czy Krośnie. Konkurują jedynie z małym zbiorem podobnych lokalnych działalności.\n\n### Mapa kluczem do serca\nDobrze zaprojektowana strona i odpowiedni link-building to jedno. Kluczową strategią jest zoptymalizowanie strony głównej pod hasła \"usługi + [Moje miasto]\" ORAZ podpięcie strony do optymalnie zarządzanej Wizytówki Google Moja Firma.\n\n### Czego unikać w Local SEO\n- Tworzenia automatycznych opisów przez ChatGPT i ślepego przeklejania na podstrony 'okolicznych wsi'. Google karze mechanizmy spam-contentowe.\n- Braku weryfikacji znaczników Title z poprawną ortografią w znacznikach miejscowych.\n\nProfesjonalne generowanie contentu na miasta wykonane z precyzją, zapewni Ci stabilny, comiesięczny organiczny ruch lokalnych klientów z zerowym kosztem reklamowym.",
            category: "Marketing",
            readTime: "5 min"
        },
        {
            title: "Optymalizacja szybkości WooCommerce na Vercel.",
            excerpt: "Architektura Serverless jako lek na wolne sklepy internetowe.",
            content: "### Dlaczego WooCommerce bywa wolne?\nStandardowy WordPress przetwarza każdy cykl odpowiedzi do serwera (PHP, zapytania SQL) w morderczym czasie podczas oblężenia, np. Black Friday. Im więcej wtyczek od promocji, faktur i kaskadowych popupów, tym baza się bardziej poci. Tanie serwery rzucają błędy Error 500.\n\n### Architektura ucieczki: Next.js + Vercel\nZmigrowanie samej wizualizacji sklepu do środowiska frontendowego (Headless) zdejmuje z WooCommerce wszystkie zbędne procesy obliczeniowe związane np. z ułożeniem koszyka czy wyszukiwarkami. Platforma Vercel rozrzuca Twój projekt po serwerach brzegowych (Edge Computing). Dzięki temu, niezależnie gdzie jest klient, sklep buforuje się dla niego wręcz asynchronicznie szybciej z lokalnej kopii.\n\nSzukasz gotowego modułu tego typu na ratunek przy upadającej szybkości PageSpeed? Napisz na kontakt@webspanner.pl, znajdziemy wyjście i naprawimy Twój serwer.",
            category: "Technologia",
            readTime: "6 min"
        },
        {
            title: "Dlaczego Headless to przyszłość.",
            excerpt: "Całkowita wolność i omijanie starych schematów architektonicznych.",
            content: "### Definicja Architektury Odłączonej\nHeadless w e-commerce to rozwiązanie polegające na technologicznym odcięciu modułu wyświetlającego obraz na telefonie (tzw. „głowy” lub Frontendu) od głównego, ciężkiego mechanizmu bazy danych magazynu, użytkowników i faktur (Backendu). Komunikują się one szybkim autostradowym łączem (API).\n\n### Plusy deweloperskie i zyski właściciela\nGdy projektujesz nowoczesną apkę webową dla firmy, Twoi programiści z Next.js lub React mają pełną dowolność, żeby stworzyć unikalną makietę o niezwykle skomplikowanym layoucie nie myśląc o narzuconych limitach WordPressa. Z tego tytułu Twój produkt będzie jedyny w swoim rodzaju.\n\nDzięki Headless zaoszczędzimy nawet sekundy ładowania, a to w erze sieci Mobile i TikToka przełoży się na drastyczne obniżenie współczynnika odrzuceń na witrynie sprzedażowej (Bounce Rate > 60% obciąża biznes śmiertelnie).",
            category: "Architektura",
            readTime: "4 min"
        },
        {
            title: "AI w wirtualnej przymierzalni i wyszukiwaniu",
            excerpt: "Rewolucja Generative AI w asyście e-commerce B2C.",
            content: "### Modelowanie rekomendacji przed zakupem\nChatboty wyszły z fazy zaprogramowanych reguł „Jeśli X, napisz Y”. Modele oparte na LLM rozumieją intencje z pełnego zdania. Dzięki temu klient w Twoim e-sklepie odzieżowym lub z częściami motoryzacyjnymi nie musi mozolnie przeklikiwać się przez zawiłe kategorie. Może napisać: „Pokaż mi eleganckie koszule pasujące do letnich stylizacji po plaży do 200 zł”. \n\n### Wizyjna siła technologii i porady\nZyskujemy potężne atrybuty lojalizacyjne u powracających klientów. Jeśli technicznie rozważasz dodanie agenta asystującego do swoich projektów i jesteś zainteresowany wdrożeniem – skonsultuj wyjście oparte na rozwiązaniach klasy Enterprise dołączonych do projektów w naszym <a href='/cennik' class='text-[#7C3AED] hover:underline font-bold'>zaktualizowanym cenniku Vercel</a>.",
            category: "Innowacje",
            readTime: "5 min"
        },
        {
            title: "Omnichannel vs Multichannel w praktyce",
            excerpt: "Dlaczego synchronizacja wielu kanałów i zacieranie granic robi tak wielką różnicę na marży.",
            content: "### Różnica między kanałami wieloma a połączonymi\nMultichannel to sytuacja, gdy z powodzeniem sprzedajesz na własnym sklepie, poprzez eMAG, Amazon i w punkcie stacjonarnym w Warszawie, ale programy lojalnościowe z Internetu w ogóle nie są honorowane przy ladzie, a ceny na Allegro brutalnie rozbiją politykę z reszty firmy.\n\n### Wejście w epokę Omnichannel\nPełny omnichannel to ekosystem, gdzie klient przegląda asortyment klikając na telefonie, zaczyna wrzucać do koszyka będąc zalogowanym w domowej sieci Wifi po PC na wygodnej kanapie. Rezerwuje u inżynierów w magazynie dostawę bezpośrednio ze wskazanego węzła centrali blisko niego. Doświadczenie klienta płynnie podróżuje po całej firmie bez uświadamiania go z różnicy kanałów komunikacji.",
            category: "Strategia i Biznes",
            readTime: "3 min"
        },
        {
            title: "Subskrypcje fizyczne i usługi w E-commerce",
            excerpt: "Abonamenty produktowe to nowa faza ustabilizowania MRR (Monthly Recurring Revenue).",
            content: "Oparcie swojego obciążonego dużą dozą zmiennej sklepu o pudełka sprzedawane w abonamencie, stabilizuje rozwój. Doświadczyły tego ogromne sieci diet pudełkowych, subskrypcyjnych kaw rzemieślniczych dla kawiarni, systemów chemii gospodarstwa domowego nakładanej co miesiąc jako cykliczna dostawa dla firm usługowych czy firm medycznych.\nJeżeli technologicznie system sklepowy obsłuży mechanikę tokenizacji z karty Visa/Mastercard na automatyczne płatności rekurencyjne cykliczne dla Ciebie (jak na Netflix) – zdejmujesz trudny proces walki z konkurencją do minimum i generujesz bezpieczną rentierską politykę zarządzania przepływem (Cash Flow).",
            category: "Nisze",
            readTime: "6 min"
        },
        {
            title: "Lokalne i Globalne Cyberbezpieczeństwo dla MŚP",
            excerpt: "W jaki sposób podstawowy Cloudflare filtruje 90% niebezpiecznego ruchu obciążając przy tym serwery intruza.",
            content: "Hakerzy rzadko celują w konkretnie ten sklep Pana z małego miasteczka na uboczu serwera. Po prostu wypuszczają złośliwe setki tysięcy maszyn automatycznych analizujących wektory dziur w kodzie WooCommerce. Jeśli dziura istnieje (stary plugin bez zabezpieczenia), Twój sklep upada, albo zostaje wypełniony złośliwym link-buildingiem na farmy ukrytych linków chińskich obuwii, co niszczy rating SEO o -70 pozycji wgłąb z dnia na dzień.\n\nObroną jest proaktywny WAF (Web Application Firewall) blokujący dostęp z sieci IP botneta w ogóle do wyrejestrowania pliku, czy też ukrywanie punktów kluczowych jak panel admina przed wyszukaniem. Dbaj o kopie zapasowe przed kryzysowym szturmem na Twoją markę.",
            category: "IT / Cyber",
            readTime: "4 min"
        },
        {
            title: "Jak pisać wciągające opisy produktów",
            excerpt: "Opis to jedyny tekst Twojej strony docierający realnie przed oczy decyzyjne i na portfel klienta.",
            content: "Nigdy byś nie uwierzył, o ile można zwiększyć cenę tego samego zegarka czy swetra z bawełny, umiejętnie konstruując metaforę w opisie produktu. W 2026 nikt nie czyta specyfikacyjnej, przydługiej tabeli wrzuconej bez formatowania w blok tekstowy.\nOprzyj opisy produktów o logikę AIDA i wygenerowanie silnych wyobrażeń. Przedstaw korzyść, usuń suchy parametr. Parametr: \"Zegarek z tytanu 40mm. Wodoodporność\". Korzyść i formatowanie: \"Stworzony z lotniczego tytanu. Gotowy wytrzymać trudy ekstremalnego biwaku górskiego i w pełni odporny na przypadkowe zalanie. Idealny towarzysz na każdą przygodę we dwoje.\"\nO tego rodzaju marketing operacyjny dbamy oferując to jako usługę na najniższych w naszym portfolio zleceniach w cenniku platform rozruchowych.",
            category: "Copywriting / Oferta",
            readTime: "3 min"
        }
    ]

    return (
        <Layout>
            <section className="py-24 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-8 italic text-gray-900">Magazyn E-commerce</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Przepracowana baza strategii biznesowych od technologicznego progu kodu po potęgę pozycjonowania firm B2B.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-[32px] border border-gray-200 overflow-hidden hover:border-[#7C3AED] transition-all cursor-pointer group shadow-sm hover:shadow-xl flex flex-col h-full"
                                onClick={() => setSelectedPost(post)}
                            >
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="bg-[#7C3AED]/10 text-[#7C3AED] px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
                                            <Clock size={14} />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-[#7C3AED] transition-colors text-gray-900 leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-light mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-sm font-bold text-gray-900 group-hover:text-[#7C3AED] mt-auto">
                                        <span className="border-b border-transparent group-hover:border-[#7C3AED] pb-0.5 transition-all">Czytaj Całość</span>
                                        <ChevronRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedPost && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md"
                                onClick={() => setSelectedPost(null)}
                            >
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    className="bg-white p-8 md:p-14 rounded-[40px] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl custom-scrollbar"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setSelectedPost(null)}
                                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-gray-100"
                                        aria-label="Zamknij artykuł"
                                    >
                                        <X size={24} />
                                    </button>

                                    <div className="flex items-center gap-4 mb-6 mt-4">
                                        <span className="bg-[#7C3AED]/10 text-[#7C3AED] px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest">
                                            {selectedPost.category}
                                        </span>
                                        <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                                            <Clock size={16} />
                                            Szacowany czas czytania: {selectedPost.readTime}
                                        </div>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight text-gray-900 tracking-tight">
                                        {selectedPost.title}
                                    </h2>
                                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-light mb-12">
                                        <p className="text-xl font-medium text-gray-800 mb-10 border-l-4 border-[#7C3AED] pl-6 italic">
                                            {selectedPost.excerpt}
                                        </p>
                                        {/* Injecting safely HTML blocks mapped from specific # string breaks */}
                                        <div dangerouslySetInnerHTML={{ __html: selectedPost.content.replace(/\n\n/g, '<br/><br/>').replace(/### (.*)/g, '<h3 class="text-2xl font-bold mt-8 text-gray-900">$1</h3>') }} />
                                    </div>

                                    <button
                                        onClick={() => setSelectedPost(null)}
                                        className="mt-12 px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl font-bold transition-all w-full md:w-auto shadow-lg"
                                    >
                                        Przejdź do głównej tablicy wpisów
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </section>
        </Layout>
    )
}
