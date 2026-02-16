import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { BookOpen, HelpCircle, Code, Layers } from 'lucide-react'

export default function KnowledgeBase() {
    const articles = [
        {
            title: 'Dlaczego łączymy AI z Wordpressem?',
            excerpt: 'Dowiedz się, jak automatyzacja AI przyspiesza development, a WordPress gwarantuje stabilność.',
            icon: <Layers className="text-primary" />,
            category: 'Filozofia',
        },
        {
            title: 'Jak zarządzać sklepem WooCommerce wspieranym przez AI?',
            excerpt: 'Optymalizacja opisów produktów i obsługa klienta dzięki nowoczesnym agentom AI.',
            icon: <BookOpen className="text-secondary" />,
            category: 'Poradnik',
        },
        {
            title: 'Zalety Headless WordPress',
            excerpt: 'Kiedy warto oddzielić warstwę wizualną od panelu zarządzania i jakie korzyści to przynosi.',
            icon: <Code className="text-accent" />,
            category: 'Technologia',
        },
        {
            title: 'Bezpieczeństwo Twojej strony',
            excerpt: 'Jak WordPress i Supabase chronią Twoje dane i dlaczego to najlepszy wybór dla biznesu.',
            icon: <HelpCircle className="text-primary" />,
            category: 'Bezpieczeństwo',
        }
    ]

    return (
        <Layout>
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl font-bold mb-6">Baza Wiedzy</h1>
                        <p className="text-xl text-white/50 max-w-2xl mx-auto">
                            Edukacja to klucz do sukcesu. Dzielimy się wiedzą o tym, jak nowoczesne technologie zmieniają krajobraz e-commerce.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 rounded-3xl hover:border-primary/50 transition-all group cursor-pointer"
                            >
                                <div className="flex gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                        {article.icon}
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2 block">
                                            {article.category}
                                        </span>
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-white/50 leading-relaxed mb-6">
                                            {article.excerpt}
                                        </p>
                                        <button className="text-white font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                                            Czytaj więcej <span className="text-primary">→</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 glass p-12 rounded-3xl text-center">
                        <h2 className="text-3xl font-bold mb-6">Masz więcej pytań?</h2>
                        <p className="text-white/50 mb-8">Nasz Agent AI jest gotowy, aby odpowiedzieć na Twoje wątpliwości i przygotować personalizowaną ofertę.</p>
                        <button className="px-8 py-4 bg-primary rounded-xl font-bold hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all">
                            Zapytaj Agenta AI
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
