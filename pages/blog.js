import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import { Newspaper, X, Clock, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(null)

    const posts = [
        {
            title: "Który marketplace wybrać na start w 2026?",
            excerpt: "Przegląd ekosystemów sprzedażowych: Allegro, Erli i nie tylko.",
            content: "Decyzja o wdrożeniu pierwszego kanału marketplace jest kluczowa dla budżetu młodej firmy. Omawiamy najnowsze programy powitalne czołowych platform oraz ukryte w ich regulaminach opłaty. Z tej analizy dowiesz się, czy bezpieczniej jest obciąć marże wchodząc na sprawdzony, wielki rynek z wysokimi kosztami operacyjnymi, czy poszukać niszy u doganiającej z impetem konkurencji.",
            category: "Sprzedaż",
            readTime: "4 min"
        },
        {
            title: "Jak zacząć sprzedawać w internecie - poradnik krok po kroku.",
            excerpt: "Od zakupu domeny po wystawienie pierwszego paragonu.",
            content: "Kompleksowy poradnik opisujący każdy etap cyfryzacji Twojego stacjonarnego biznesu lub otwarcia go od podstaw. Wskazujemy w kolejności prawne i techniczne must-have: regulaminy, bramki tpay, integrację z firmami InPost kurier. Krok po kroku przeprowadzimy Twoje myślenie od założenia serwera hostingowego po wciśnięcie przycisku „Realizuj” pod Twoim pierwszym zamówieniem.",
            category: "E-commerce Start",
            readTime: "7 min"
        },
        {
            title: "Zalety headless commerce dla SEO.",
            excerpt: "Dlaczego odseparowanie frontendu od backendu winduje Google PageSpeed.",
            content: "Headless commerce to odłączenie warstwy wizualnej (tej, którą widzi klient) od mechaniki sklepu (np. WooCommerce). Stosując potężny i lekki framework Next.js na froncie udaje się osiągnąć zawrotne szybkości wskaźników Google Core Web Vitals (LCP, FID, CLS). W efekcie Google wynagradza taki sklep, pompując go wysoko w naturalnych wynikach wyszukiwania, a klient nie porzuca wolno ładujących się kart produktowych.",
            category: "Technologia",
            readTime: "5 min"
        },
        {
            title: "Dlaczego WooCommerce to najlepszy wybór dla małych i średnich firm?",
            excerpt: "Skalowalność, własność i brak ukrytych rekietów opartych na % ze sprzedaży.",
            content: "Platformy typu SaaS kuszą niezwykłą szybkością utworzenia konta, jednak w ujęciu długoterminowym obciążają marżę stałymi pętlami abonamentowymi oraz % od utargu. WooCommerce (będący fundamentem WordPressa) daje Ci 100% własności nad wygenerowanym kodem, bazą klientów i brakiem przymusowych prowizji. Jest najbardziej elastycznym ekosystemem z setkami wtyczek, który bez problemu sprosta ewolucji od start-upu po firmę obracającą milionami.",
            category: "Rozwiązania",
            readTime: "6 min"
        },
        {
            title: "Automatyzacja wysyłek - jak zaoszczędzić 10h tygodniowo.",
            excerpt: "Zintegruj kuriera ze sklepem, zanim spędzisz noce przepisując adresy.",
            content: "Przepisywanie danych z maila potwierdzenia do panelu paczkomatów InPost czy DPD to proces obarczony błędami i zjadający cenny czas, w którym powinieneś skalować sprzedaż. Omawiam jak za pomocą odpowiednio ułożonych reguł wewnętrznych wygenerować etykiety nadawcze masowo zaledwie dwoma kliknięciami, zaraz obok generowanej e-Faktury w Fakturowni.",
            category: "Automatyzacja",
            readTime: "3 min"
        },
        {
            title: "Sztuczna inteligencja w obsłudze klienta e-commerce.",
            excerpt: "AI Agenci, analiza nastrojów i rekomendacje oparte na predykcjach.",
            content: "W 2026 chatbot bywa wręcz irytujący, chyba że zaprzęgniemy do niego wagi dużego językowego modelu (LLM) zintegrowane w postaci Agenta. Taki cyfrowy pracownik, osadzony w oknie czatu, znający na pamięć cały asortyment i potrafiący dopasować oponę do danego rodzaju auta po numerze VIN podyktowanym przez klienta - radykalnie zmienia konwersję ratując porzucone wahania. Sztuczna inteligencja zdejmuje z ramion BOK nawet 60% standardowych operacji zapytaj-odpowiedz.",
            category: "Innowacje",
            readTime: "5 min"
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
                        <h1 className="text-5xl md:text-8xl font-black mb-8 italic text-gray-900">Blog Firmowy</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Bądź na bieżąco z najnowszymi trendami w E-commerce, strategiami rynkowymi i technologiami webowymi.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-[32px] border border-gray-200 overflow-hidden hover:border-purple-300 transition-all cursor-pointer group shadow-sm hover:shadow-xl flex flex-col h-full"
                                onClick={() => setSelectedPost(post)}
                            >
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
                                            <Clock size={14} />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors text-gray-900 leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-light mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-sm font-bold text-gray-900 group-hover:text-primary mt-auto">
                                        <span className="border-b border-transparent group-hover:border-primary pb-0.5 transition-all">Czytaj Wpis</span>
                                        <ChevronRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Blog Post Modal */}
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
                                    className="bg-white p-8 md:p-14 rounded-[40px] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl custom-scrollbar"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setSelectedPost(null)}
                                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 p-3 rounded-full hover:bg-gray-100"
                                    >
                                        <X size={24} />
                                    </button>

                                    <div className="flex items-center gap-4 mb-6 mt-4">
                                        <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest">
                                            {selectedPost.category}
                                        </span>
                                        <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                                            <Clock size={16} />
                                            Czar czytania: {selectedPost.readTime}
                                        </div>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight text-gray-900 tracking-tight">
                                        {selectedPost.title}
                                    </h2>
                                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-light">
                                        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-primary pl-6">
                                            {selectedPost.excerpt}
                                        </p>
                                        {selectedPost.content.split('\n\n').map((paragraph, i) => (
                                            <p key={i} className="mb-6">{paragraph}</p>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setSelectedPost(null)}
                                        className="mt-12 px-8 py-4 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold transition-all w-full md:w-auto shadow-lg"
                                    >
                                        Wróć do spisu artykułów
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
