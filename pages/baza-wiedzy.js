import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, X } from 'lucide-react'
import { useState } from 'react'

export default function KnowledgeBase() {
    const [selectedArticle, setSelectedArticle] = useState(null)

    const articles = [
        {
            title: "Porównanie BaseLinker vs Apilo (Zalety, wady, koszty)",
            excerpt: "Który system wybrać do zarządzania wielokanałową sprzedażą w 2026? Szczegółowa analiza.",
            content: "### Wprowadzenie do zarządzania magazynem\nZarządzanie nowoczesnym e-commerce bez centralnego systemu ERP lub platformy PIM (Product Information Management) jest dzisiaj technicznie niemożliwe, zakładając że sprzedajesz w więcej niż jednym kanale. Dwa dominujące systemy w Polsce to BaseLinker i Apilo (dawniej ErpBox). Poniższa analiza rozkłada je na czynniki pierwsze.\n\n### BaseLinker - Potężny agregator\nZalety: BaseLinker to rynkowy hegemon, który zdetronizował konkurencję ilością wtyczek. Niezależnie od tego, u jakiego kuriera wysyłasz paczki, BaseLinker połączy się za pomocą API w sekundy. Pozwala powiązać magazyn w Subiekcie GT, zewnętrzną hurtownię oraz Twój sklep z WooCommerce na jednym ekranie.\nWady: Przy gigantycznym obciążeniu dziesiątkami tysięcy SKU (wariantów produktów), proces mapowania i synchronizacja asortymentu w BaseLinkerze przypomina układanie zaawansowanych klocków programistycznych. Jest w tym bezlitosny – mały błąd ludzki w regułach automatyzacji może np. źle przesłać ceny.\nKoszty: Opiera się na wolumenie zamówień, przez co małe biznesy płacą mało, ale korporacje z niskomarżowym rynkiem ubolewają nad drastycznym skokiem cennika.\n\n### Apilo - Elastyczność i natywne Shoper\nZalety: Apilo (część Grupy Shoper) oferuje dużo bardziej elastyczny, wielopoziomowy system pracy ze specyfiką trudnych produktów. Często jest faworyzowane przez sprzedawców w dropshippingu lub z niezwykle głęboką siatką skomplikowanych wariantów w hurtowni PIM.\nWady: Interfejs Apilo i system reguł bywa uznawany za mniej intuicyjny, a czas wdrożenia pracownika do obsługi Apilo bywa odrobinę dłuższy niż do \"prozaicznego\" widoku BaseLinkera.",
            category: "Systemy i Integracje"
        },
        {
            title: "Headless CMS vs Tradycyjny WordPress – co wybrać dla szybkości?",
            excerpt: "Różnice w architekturze monolitów a nowoczesnym podejściu Headless.",
            content: "### Monolit, czyli tradycyjny WordPress\nTradycyjny WordPress z wtyczką WooCommerce to tzw. monolit. Oznacza to, że Panel Administracyjny (tam, gdzie dodajesz produkty) oraz Frontend (to, co widzi klient) są ze sobą na stałe sklejone w jednej pamięci serwera PHP. Gdy na stronę wchodzi klient z kampanii reklamowej, obciąża procesor serwera, każąc mu połączyć się z bazą danych i 'na żywo' wygenerować widok sklepu. W przypadku tysięcy jednoczesnych wejść (np. w Black Friday), baza dławi się i odsyła klientowi biały ekran tzw. Błąd 500.\n\n### Headless Commerce (Next.js i React)\nTechnologia Headless to całkowite techniczne odkrojenie Frontend'u od Backend'u. Baza danych (magazyn na tanim hostingu) komunikuje się bezpiecznym i chudym systemem API z Frontend'em (zbudowanym w superszybkim Frameworku Next.js), który nie przelicza niczego na żywo. On wysyła klientowi gotową graficznie 'zbuforowaną mapę HTML'. Sklep chodzi jak aplikacja natywna w smartfonie, bez mikrosekund opóźnienia.\n\nZalety: Ostrzejsza ochrona przez hakerami, 10-krotnie szybsze czasy renderowania. Zobacz wycenę pakietu Headless na <a href='/cennik' class='text-[#7C3AED] hover:underline font-bold'>karcie Cennika Webspanner.pl</a>, dedykowaną dla liderów rynku.",
            category: "Technologia"
        },
        {
            title: "Bezpieczeństwo w e-commerce:" + " Jak chronić dane klientów i transakcje?",
            excerpt: "Krytyczne wektory włamań na platformy e-commerce z danymi.",
            content: "### Wycieki danych osobowych\nJesteś prawnie odpowiedzialny za setki adresów domowych z etykiet na InPost. Większość amatorskich wdrożeń WooCommerce ignoruje fakt, że otwarta na zewnątrz ścieżka wp-admin to zaproszenie dla botów typu Brute-Force, które próbują odgadnąć Twoje hasło 4 miliony razy na sekundę. Instalacja wtyczek modyfikujących login (np. limit-login-attempts) bez ingerencji na Firewall levelu aplikacji WAF (np. od Cloudflare) daje intruzowi nadal wektor powalająca serwer z zewnątrz, generując Denial of Service (DoS).\n\n### Ścieżka Transakcyjna\nProcesor płatności zawsze jest wyobcowany od Twojego kodu (Klienci przekierowywani na bramki i wracający z Tokenem). Ryzykiem nie jest to, że ktoś 'ukradnie kartę z WordPressa' – tam po prostu ich nie ma. Ryzykiem są wtyczki zewnętrzne, tzw. XSS (Cross Site Scripting). Złośliwy kod z nieaktualnej wtyczki Slidera Galerii wstrzykuje własny formularz w pole Twojego koszyka, odesłając nieświadomego klienta na podszytego przelewy24-scamm.pl.\nBezwzględnie należy regularnie audytować systemy pod względem bibliotek Javascript.",
            category: "Cloud & Security"
        },
        {
            title: "Znaczenie Core Web Vitals dla Twojej pozycji w Google.",
            excerpt: "Wskaźniki ładowania poddane rygorowi Mobile-First Indexing Google.",
            content: "### Co to jest Core Web Vitals?\nGoogle definitywnie ignoruje Twoje zoptymalizowane teksty sprzedażowe, jeśli strona w trybie 4G ładuje się w telefonie dłużej niż 2.5 sekundy (wskaźnik LCP - Largest Contentful Paint). Core Web Vitals to matematyczne udokumentowanie doświadczenia użytkownika przez algorytm indeksujący.\n\n### Trzy fundamenty rankingowe:\n1. **LCP (Largest Contentful Paint):** Gęstość obrazów. Płacisz setki złotych za profesjonalną sesję produktową u fotografa, a następnie wrzucasz to w formacie RAW PNG (4 Megabajty każde) prosto w header. Czas LCP wystrzeliwuje do 10 sekund i klient ucieka do konkurencji. Musisz przekonwertować obrazy w formacie WEBP/AVIF oraz je opóźniać (Lazy Load).\n2. **FID / INP (Interaction to Next Paint):** Jak długo serwer uwalnia Twoje środowisko z blokady operacyjnej na interfejs. Jeśli klient nie łapie menu po kliknięciu Hamburgeru – traci zaufanie.\n3. **CLS (Cumulative Layout Shift):** Zjawisko ruszającej się strony. Czytnik ładuje teksty, a sekunda później doładowuje uciężony font, przez co blok tekstowy odskakuje. Kary nakładane w Google przez nieustalenie 'height' we frontendzie. Webspanner korzysta ze frameworkow mitygujących błąd CLS na poziomie kodu (TailwindCSS i Next.js), chroniąc wkład od reklam GoogleAds.",
            category: "Optymalizacja SEO"
        },
        {
            title: "Integracja API w biznesie – jak połączyć sklep z magazynem i kurierami.",
            excerpt: "Automatyzacja to próg rentowności przy masowych gabarytach sprzedaży.",
            content: "### Koniec ręcznego wystawiania faktur na ERPie\nKiedy prowadzisz startup – nie potrzebujesz API. Odpowiadasz na maile samodzielnie. W dojrzałej fazie biznesu każdy element wysyłki musisz przeliczyć w ujęciu 'kosztogodzin pracownika logistycznego'. REST API oraz standardowo Webhooki to punkty na węzłowych łączach cyfrowych.\n\n### Workflow oparte o Webhooki\nWebhook wykonuje natychmiastowe instrukcje, gdy zmieni się zmienna serwera. Kiedy tylko bramka płatności przejdzie z `payment_pending` na `payment_success`: Webhook komunikuje BaseLinkerowi o zmianie na 'Skompletuj'. BaseLinker generuje natychmiast PDF faktury bez ingerencji człowieka, uderzając przez API do integracji InPost. Etykieta ląduje w systemie na telefonie pana odbierającego towar. Całość po kliknięciu klienta zajęła zaledwie 830 milisekund.\nTworzymy szyte na miarę skrypty Cloudflare z API na potrzeby firm zleceniowych w ramach pakietu Custom z naszego <a href='/cennik' class='text-[#7C3AED] font-bold hover:underline'>Cennika technologii.</a>",
            category: "Systemy i Integracje"
        },
        {
            title: "Ewolucja Marketplace: Dlaczego warto sprzedawać na Erli i eMAG?",
            excerpt: "Zmieniające się trendy prowizyjne a ucieczka od hegemona.",
            content: "### Dlaczego Allegro bywa drogą pod górę?\nSklepy internetowe powiązane wieloletnim dogmatem rynkowym boją się odejść z platformy giganta, z racji przyzwyczajenia do potężnego ruchu wejściowego. Platforma bardzo ostro traktuje tzw. 'Account Health', w związku z czym ułamki spóźnionych przesyłek obniżają rating jakości na zero, degradując ubezpieczenie Smart i rentowność ze sprawą gigantycznie nakładanych prowizji kategorialnych (sięgających do kilkunastu procent po uwzględnieniu reklam i dostaw).\n\n### Przestrzeń darmowego ruchu: Erli\nErli ładuje gigantyczne pieniądze na reklamy telewizyjne po to, aby odbić użytkowników preferujących niższe koszty zakupowe kosztem innej obsługi dostarczania towaru. Jest to złote wyjście do tańszych produktów, w których to walka o pozycjonowanie na Erli gwarantuje ogromny wolumen przy niższej marży z darmowym pozycjonowaniem wewnętrza.\n\n### Ekspansja zagraniczna z eMAG (Rumunia)\nRynek CEE chłonie polskie dobra luksusowe (technologie, części samochodowe, meble z zachodnią estetyką) ze stawkami potrafiącymi podnieść ROI z produktu 3 krotnie w przeliczeniu na Euro/LEI. Integracja do eMAG jest bezbolesna za pomocą nowoczesnych hubów PIM.",
            category: "Strategia i Skalowanie"
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
                        <h1 className="text-5xl md:text-8xl font-black mb-8 italic text-gray-900">Baza Wiedzy</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Praktyczne poradniki i ustrukturyzowane analizy eksperckie dla świadomych decydentów E-commerce zbudowane z myślą o realiach 2026.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-[40px] border border-gray-200 hover:border-[#7C3AED] transition-all cursor-pointer group shadow-sm hover:shadow-xl flex flex-col"
                                onClick={() => setSelectedArticle(article)}
                            >
                                <div className="flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6 w-full">
                                        <span className="bg-[#7C3AED]/10 text-[#7C3AED] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                            {article.category}
                                        </span>
                                        <BookOpen size={24} className="text-gray-400 group-hover:text-[#7C3AED] transition-colors shrink-0" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 group-hover:text-[#7C3AED] transition-colors text-gray-900 leading-tight">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed font-light mb-auto flex-grow">
                                        {article.excerpt}
                                    </p>
                                    <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center w-full">
                                        <span className="text-sm font-bold text-gray-900 group-hover:text-[#7C3AED] uppercase tracking-wider">Czytaj Więcej</span>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#7C3AED]/10 flex items-center justify-center transition-colors">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-400 group-hover:text-[#7C3AED] transition-colors">
                                                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedArticle && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md"
                                onClick={() => setSelectedArticle(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                    className="bg-white border border-gray-200 p-8 md:p-14 rounded-[40px] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl custom-scrollbar"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setSelectedArticle(null)}
                                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors bg-gray-100 p-3 rounded-full hover:bg-gray-200"
                                    >
                                        <X size={24} />
                                    </button>

                                    <span className="bg-[#7C3AED]/10 w-fit text-[#7C3AED] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 block mt-4">
                                        {selectedArticle.category}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight text-gray-900 tracking-tight">
                                        {selectedArticle.title}
                                    </h2>
                                    
                                    <div className="bg-gray-50 border-l-4 border-[#7C3AED] p-6 rounded-r-2xl mb-12">
                                        <p className="text-xl font-medium text-gray-800 italic">
                                            {selectedArticle.excerpt}
                                        </p>
                                    </div>

                                    <div 
                                        className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: selectedArticle.content.replace(/\n\n/g, '<br/><br/>').replace(/### (.*)/g, '<h3 class="text-3xl font-black mt-12 mb-6 text-gray-900 tracking-tight">$1</h3>') }}
                                    />

                                    <div className="mt-16 pt-8 border-t border-gray-100 flex justify-end">
                                        <button
                                            onClick={() => setSelectedArticle(null)}
                                            className="px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                                        >
                                            <X size={20} /> Zamknij Panel 
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </section>
        </Layout>
    )
}
