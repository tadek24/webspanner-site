import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, X } from 'lucide-react'
import { useState } from 'react'

export default function KnowledgeBase() {
    const [selectedArticle, setSelectedArticle] = useState(null)

    const articles = [
        {
            title: "BaseLinker vs Apilo - co wybrać dla Twojego biznesu?",
            excerpt: "Zestawienie najpopularniejszych systemów ERP/Multichannel do obsługi polskiego e-commerce.",
            content: "Oba systemy – BaseLinker oraz Apilo – oferują potężne narzędzia do automatyzacji sprzedaży na wielu kanałach jednocześnie (Allegro, Amazon, eMAG, własny sklep). \n\nBaseLinker jest niekwestionowanym liderem jeśli chodzi o prostotę integracji, intuicyjność automatyzacji i liczbę dostępnych wtyczek zewnętrznych. Szybko podepniesz tam kurierów i hurtownie. \n\nApilo (wcześniej ErpBox) zyskało uznanie po przejęciu przez Shoper. Wypada znacznie lepiej w firmach o bardzo złożonej i rozbudowanej strukturze magazynowej. Wykazuje większą elastyczność przy specyficznie konfigurowanych produktach oraz zagnieżdżonych strukturach wielkogabarytowych. \n\nWybór powinien być uzależniony od stopnia skomplikowania Twojej gospodarki magazynowej.",
            category: "Systemy i Integracje"
        },
        {
            title: "Ekspansja na Marketplace: Allegro, Amazon, eMAG i Erli - kompletny przewodnik",
            excerpt: "Gdy polski sklep to za mało. Jak mądrze skalować biznes dzięki platformom sprzedażowym.",
            content: "Wyjście poza własny sklep to naturalny krok rozwoju każdego e-commerce. W Polsce bazą i must-have pozostaje Allegro, które pomimo wysokich prowizji, generuje ułamkową barierę wejścia dla kupujących z pakietem Smart. \n\nRosnącym w siłę rywalem jest Erli - oferujące mniejsze opłaty dla sprzedawców, dzięki czemu firmy dysponujące minimalną marżą mogą tu odetchnąć. \n\nW przypadku planowania ekspansji w regionie CEE (Central and Eastern Europe) niezastąpiony staje się eMAG (lider w Rumunii, rosnący w Bułgarii i Węgrzech). \n\nZ kolei Amazon to brama na Europę Zachodnią i USA, wymagająca jednak ekstremalnie pilnego przestrzegania wskaźników jakościowych (Account Health) oraz perfekcyjnego wdrożenia systemów podatkowych OSS. Zdecydowanie nie zaleca się wchodzenia na Amazon \"z marszu\" bez uprzedniej strategii.",
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
                            Praktyczne poradniki i analizy eksperckie dla świadomych decydentów E-commerce w 2026.
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
                                className="bg-white p-10 rounded-[40px] border border-gray-200 hover:border-blue-400/50 transition-all cursor-pointer group shadow-sm hover:shadow-xl"
                                onClick={() => setSelectedArticle(article)}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
                                        {article.category}
                                    </span>
                                    <BookOpen size={24} className="text-gray-400 group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors text-gray-900">{article.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light mb-6">
                                    {article.excerpt}
                                </p>
                                <span className="text-sm font-bold text-gray-900 border-b border-primary pb-1 group-hover:text-primary">CZYTAJ ARTYKUŁ</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Article Modal */}
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
                                    className="bg-white border border-gray-200 p-8 md:p-12 rounded-[32px] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl custom-scrollbar"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setSelectedArticle(null)}
                                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors bg-gray-100 p-2 rounded-full"
                                    >
                                        <X size={24} />
                                    </button>

                                    <span className="text-blue-600 text-xs font-black uppercase tracking-widest mb-4 block mt-4">
                                        {selectedArticle.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight text-gray-900">
                                        {selectedArticle.title}
                                    </h2>
                                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                                        {selectedArticle.content.split('\n\n').map((paragraph, i) => (
                                            <p key={i} className="mb-6">{paragraph}</p>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setSelectedArticle(null)}
                                        className="mt-10 px-8 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-900 rounded-xl text-sm font-bold transition-all w-full md:w-auto"
                                    >
                                        Zamknij Panel
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
