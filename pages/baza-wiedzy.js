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
            content: "### Wprowadzenie do zarządzania magazynem\nZarządzanie nowoczesnym e-commerce bez centralnego systemu ERP lub platformy PIM (Product Information Management) jest dzisiaj technicznie niemożliwe, zakłądając że sprzedajesz w więcej niż jednym kanale. Dwa dominujące systemy w Polsce to BaseLinker i Apilo (dawniej ErpBox). Poniższa analiza rozkłada je na czynniki pierwsze.\n\n### BaseLinker - Potężny agregator\nZalety: BaseLinker to rynkowy hegemon, który zdetronizował konkurencję ilością wtyczek. Niezależnie od tego, u jakiego kuriera wysyłasz paczki, BaseLinker połączy się za pomocą API w sekundy. Pozwala powiązać magazyn w Subiekcie GT, zewnętrzną hurtownię oraz Twój sklep z WooCommerce na jednym ekranie.\nWady: Przy gigantycznym obciążeniu dziesiątkami tysięcy SKU (wariantów produktów), proces mapowania i synchronizacja asortymentu w BaseLinkerze przypomina układanie zaawansowanych klocków programistycznych. Jest w tym bezlitosny – mały błąd ludzki w regułach automatyzacji może np. źle przesłać ceny.\nKoszty: Opiera się na wolumenie zamówień, przez co małe biznesy płacą mało, ale korporacje z niskomarżowym rynkiem ubolewają nad drastycznym skokiem cennika.\n\n### Apilo - Elastyczność i natywne Shoper\nZalety: Apilo (część Grupy Shoper) oferuje dużo bardziej elastyczny, wielopoziomowy system pracy ze specyfiką trudnych produktów. Często jest faworyzowane przez sprzedawców w dropshippingu lub z niezwykle głęboką siatką skomplikowanych wariantów w hurtowni PIM.\nWady: Interfejs Apilo i system reguł bywa uznawany za mniej intuicyjny, a czas wdrożenia pracownika do obsługi Apilo bywa odrobinę dłuższy niż do \"prozaicznego\" widoku BaseLinkera.\n\n### Co wybrać?\nOceń profil i architekturę magazynu. Jeśli sprzedajesz na Allegro, we własnym sklepie <a href='/cennik' class='text-[#7C3AED] hover:underline font-bold'>zobacz pakiety Cennika</a> i potrzebujesz w miarę szybko odpalić automatyczne listy do kuriera DPD - bierz BaseLinker. Jeśli jesteś architektem e-commerce, łączysz cztery hurtownie dropshippingowe z pięcioma magazynami fizycznymi i masz 200 tysięcy unikalnych kodów EAN ubrań w wielu wariantach – przetestuj wydajność drzewa w Apilo.",
            category: "Systemy i Integracje"
        },
        {
            title: "Przewodnik po Marketplace (Allegro, Amazon, eMAG, Erli)",
            excerpt: "Jak wyprowadzić swoje zyski poza okowy pojedynczego sklepu internetowego.",
            content: "### Multichannel to dziś konieczność\nWłasny system sprzedaży (WooCommerce czy Headless) to filar, wokół którego obraca się Twoja niezależność (polecamy sprawdzić nasz <a href='/cennik' class='text-[#7C3AED] hover:underline font-bold'>Cennik projektowania sklepów</a>). Marketplace to z kolei stacje kosmiczne o niewyobrażalnie wyższym nakładzie na marketing. Twoim celem w 2026 powinno być wysyłanie odpowiednio spreparowanych statków towarowych z Twojej bazy na te stacje.\n\n### Allegro - Gigant, ale drogi\nPrawda absolutna: Polacy sprawdzają wszystko na Allegro, nim wrzucą to w wyszukiwarkę. Jest synonimem e-zakupów. Niestety, wejście w program Super Sprzedawca wymaga rygorystycznego Account Health oraz potężnej prowizji w niektórych strefach i opłaty jakościowej za smart. Jeśli Twoja marża to >30%, to eldorado. Jeśli to dropshipping na marży 7% – przygotuj się na pracę po kosztach, licząc że klient ostatecznie trafi na Twój sklep własny.\n\n### Erli - Bilet dla młodszych graczy\nOgromne nakłady telewizyjne na Erli oraz mniejsza prowizja względem lidera ściągnęły tysiące firm. Klienci przyzwyczaili się, że na Erli jest taniej (choć z racji dostaw bywa ciężej logistycznie niż w \"Smarcie\"). Jeśli rywalizujesz ceną – Erli to obowiązkowy punkt wyjścia.\n\n### Wyprawa zagraniczna - eMAG i Amazon\nJeżeli rynek krajowy masz podbity, kieruj się na CEE (Rumunia, Węgry, Bułgaria) za pośrednictwem eMAG. Rumunia przeżywa technologiczny rozkwit i głód zakupowy, z którym Polska borykała się dekadę temu - chłonność jest gigantyczna tam na dobre polskie wyroby budowlane czy meblarskie.\nNatomiast Amazon to liga dla gotowych. Pełna infrastruktura logistyczna FBA (Fulfillment by Amazon) lub zaawansowane OSS przy wysyłce samemu FBM. Tu najmniejszy wskaźnik zwrotów i opłaty VAT niszczą nierozsądne biznesy, ale poprawnie skalowane operacje dają przepustkę do zarobków podawanych w setkach tysięcy Euro bez ograniczeń.",
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {articles.map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-[40px] border border-gray-200 hover:border-[#7C3AED]/50 transition-all cursor-pointer group shadow-sm hover:shadow-xl"
                                onClick={() => setSelectedArticle(article)}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="bg-[#7C3AED]/10 text-[#7C3AED] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#7C3AED]/10">
                                        {article.category}
                                    </span>
                                    <BookOpen size={24} className="text-gray-400 group-hover:text-[#7C3AED] transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 group-hover:text-[#7C3AED] transition-colors text-gray-900">{article.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light mb-6">
                                    {article.excerpt}
                                </p>
                                <span className="text-sm font-bold text-gray-900 border-b border-[#7C3AED] pb-1 group-hover:text-[#7C3AED]">CZYTAJ ARTYKUŁ</span>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedArticle && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm"
                                onClick={() => setSelectedArticle(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className="bg-white border border-gray-200 p-8 md:p-14 rounded-[40px] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl custom-scrollbar"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setSelectedArticle(null)}
                                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors bg-gray-100 p-3 rounded-full hover:bg-gray-200"
                                    >
                                        <X size={24} />
                                    </button>

                                    <span className="text-[#7C3AED] text-sm font-black uppercase tracking-widest mb-4 block mt-4">
                                        {selectedArticle.category}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight text-gray-900">
                                        {selectedArticle.title}
                                    </h2>
                                    <div 
                                        className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: selectedArticle.content.replace(/\n\n/g, '<br/><br/>').replace(/### (.*)/g, '<h3 class="text-2xl font-bold mt-8 text-gray-900">$1</h3>') }}
                                    />

                                    <button
                                        onClick={() => setSelectedArticle(null)}
                                        className="mt-12 px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl font-bold transition-all w-full md:w-auto shadow-lg"
                                    >
                                        Zamknij Panel i wróć
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
