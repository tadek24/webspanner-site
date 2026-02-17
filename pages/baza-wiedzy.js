import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function KnowledgeBase() {
    const articles = [
        {
            title: 'Synergia AI i WordPress w 2026',
            excerpt: 'Jak połączyć szybkość generatywnych modeli AI z elastycznością najpopularniejszego CMS na świecie.',
            tags: ['AI', 'Tech'],
        },
        {
            title: 'Optymalizacja konwersji dzięki Agentom',
            excerpt: 'Dlaczego tradycyjny chat to przeżytek, a inteligentni agenci to przyszłość obsługi klienta.',
            tags: ['CX', 'AI'],
        },
        {
            title: 'Bezpieczeństwo w chmurze Cloudflare',
            excerpt: 'Jak chronimy Twoją infrastrukturę przed atakami DDoS i zapewniamy globalną szybkość.',
            tags: ['Security', 'DevOps'],
        },
        {
            title: 'E-commerce nowej generacji',
            excerpt: 'Przekształcenie zwykłego sklepu w inteligentną maszynę do sprzedaży z WooCommerce.',
            tags: ['E-commerce', 'UX'],
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
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                            Centrum Wiedzy <br />
                            <span className="text-primary font-black uppercase">Webspanner</span>
                        </h1>
                        <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                            Odkryj, jak nowoczesne technologie mogą napędzić Twój biznes. Artykuły, poradniki i insighty z pierwszej linii frontu AI.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-12 rounded-[40px] border border-white/5 hover:border-primary/20 transition-all group cursor-pointer"
                            >
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {article.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-white/40 leading-relaxed mb-10 text-lg">
                                    {article.excerpt}
                                </p>
                                <button className="text-white font-black inline-flex items-center gap-3 group-hover:gap-6 transition-all text-sm uppercase tracking-widest">
                                    Czytaj artykuł <ArrowRight size={18} className="text-primary" />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-32 glass p-20 rounded-[48px] border border-primary/10 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
                        <h2 className="text-4xl font-black mb-6">Chcesz wiedzieć więcej?</h2>
                        <p className="text-white/40 mb-10 text-lg max-w-xl mx-auto">Nasz Agent AI przeczytał cały internet, abyś Ty nie musiał. Zapytaj go o dowolną technologię.</p>
                        <button className="px-10 py-5 bg-primary rounded-2xl font-black hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all uppercase tracking-widest text-sm">
                            Konsultacja AI
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
