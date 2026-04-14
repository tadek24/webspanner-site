import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, X } from 'lucide-react'
import { useState } from 'react'

export default function KnowledgeBase() {
    const [selectedArticle, setSelectedArticle] = useState(null)

    const articles = [
        {
            title: "Synergia AI i WordPress w 2026",
            excerpt: "Jak sztuczna inteligencja zmienia zasady gry w tworzeniu stron.",
            content: "Integracja sztucznej inteligencji z systemem WordPress całkowicie zmienia zasady gry w tworzeniu stron WWW. Wykorzystanie modeli generatywnych pozwala na automatyzację tworzenia treści, inteligentne kategoryzowanie produktów oraz personalizację doświadczeń użytkownika w czasie rzeczywistym. Dzięki API, nowoczesne strony potrafią same optymalizować swój kod pod kątem SEO i analizować zachowania klientów, znacznie odciążając administratorów.",
            category: "Technologia"
        },
        {
            title: "Optymalizacja konwersji dzięki Agentom",
            excerpt: "Dlaczego tradycyjne chaty to przeszłość.",
            content: "Tradycyjne chaty tekstowe to przeszłość. Wdrożenie inteligentnych Agentów AI, potrafiących prowadzić naturalną konwersację i analizować intencje zakupowe, drastycznie podnosi współczynnik konwersji (CR). Agent pełni rolę wirtualnego doradcy dostępnego 24/7, który nie tylko odpowiada na pytania, ale proaktywnie proponuje rozwiązania, skutecznie zamykając proces sprzedaży.",
            category: "E-commerce"
        },
        {
            title: "Bezpieczeństwo w chmurze Cloudflare",
            excerpt: "Fundament stabilnego biznesu online.",
            content: "W dobie zaawansowanych cyberataków, oparcie infrastruktury o globalną sieć Cloudflare to fundament stabilnego biznesu online. Zastosowanie mechanizmów Edge Computing, WAF (Web Application Firewall) oraz automatycznej ochrony przed atakami DDoS gwarantuje, że Twój sklep WooCommerce wytrzyma każde obciążenie i odpór złośliwego ruchu, zanim dotrze on do Twojego serwera.",
            category: "Security"
        },
        {
            title: "E-commerce nowej generacji",
            excerpt: "Headless WordPress i szybkość poniżej 1 sekundy.",
            content: "Nowoczesny handel w internecie wymaga elastyczności, jakiej nie dają klasyczne szablony. Przejście na architekturę opartą o szybkie frameworki frontendowe spięte z backendem WooCommerce (podejście headless) pozwala na osiągnięcie ładowania strony poniżej 1 sekundy. W dobie mobile-first, to właśnie ekstremalna wydajność i natychmiastowa reakcja interfejsu decydują o przewadze nad konkurencją.",
            category: "Architektura"
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
                            Dzielę się tym, co działa. Konkretna wiedza bez lania wody.
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
                                    className="bg-white border border-gray-200 p-8 md:p-12 rounded-[32px] max-w-2xl w-full relative shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setSelectedArticle(null)}
                                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
                                    >
                                        <X size={32} />
                                    </button>

                                    <span className="text-blue-600 text-xs font-black uppercase tracking-widest mb-4 block">
                                        {selectedArticle.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight text-gray-900">
                                        {selectedArticle.title}
                                    </h2>
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-gray-600 font-light leading-relaxed">
                                            {selectedArticle.content}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setSelectedArticle(null)}
                                        className="mt-10 px-8 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-900 rounded-xl text-sm font-bold transition-all w-full md:w-auto"
                                    >
                                        Zamknij
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
