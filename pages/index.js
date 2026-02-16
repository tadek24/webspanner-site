import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Rocket, Shield, Cpu, ExternalLink } from 'lucide-react'

export default function Home() {
    const portfolioItems = [
        {
            title: 'Rapdach',
            desc: 'System balustrad i nowoczesny sklep internetowy.',
            tech: 'WordPress/WooCommerce',
            optim: 'Custom Code & AI',
            tags: ['Szkło', 'Stal', 'E-commerce'],
        },
        {
            title: 'Fundacja',
            desc: 'Platforma informacyjna i system dotacji.',
            tech: 'WordPress',
            optim: 'Custom Code & AI',
            tags: ['Społeczność', 'Zaufanie'],
        },
        {
            title: 'Sandey',
            desc: 'Elegancka prezentacja marki i produktów.',
            tech: 'WordPress',
            optim: 'Custom Code & AI',
            tags: ['Design', 'Minimalizm'],
        },
        {
            title: 'Wildhome',
            desc: 'Sklep z akcesoriami do wnętrz.',
            tech: 'WordPress/WooCommerce',
            optim: 'Custom Code & AI',
            tags: ['Lifestyle', 'E-commerce'],
        }
    ]

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    }

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                            Przyszłość Web Developmentu:<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                                AI-Driven, WordPress-Powered
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Budujemy strony szybciej dzięki AI, zachowując pełną elastyczność i kontrolę, którą daje WordPress. Hybrydowe podejście dla Twojego biznesu.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-primary rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all"
                            >
                                Rozpocznij z Agentem AI
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 glass rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                            >
                                Zobacz Portfolio
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-dark relative">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8">Nasza Filozofia</h2>
                            <p className="text-lg text-white/60 mb-8 leading-relaxed">
                                W Webspanner wierzymy, że przyszłość tworzenia stron to symbioza ludzkiej kreatywności, sztucznej inteligencji i sprawdzonych fundamentów.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Rocket size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Szybkość AI</h4>
                                        <p className="text-white/50">Używamy autorskich narzędzi AI do błyskawicznego projektowania struktury i treści.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Elastyczność WordPress</h4>
                                        <p className="text-white/50">Twoja strona oparta jest na najpopularniejszym CMS świata, dając Ci 100% własności i bezpieczeństwa.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            {...fadeInUp}
                            className="relative aspect-square glass rounded-3xl p-8 flex items-center justify-center overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50" />
                            <Cpu size={200} className="text-white/10 animate-pulse" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-6 glass rounded-2xl">
                                    <p className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">AI + WP</p>
                                    <p className="text-sm uppercase tracking-widest text-white/40">Hybrid Solution</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div {...fadeInUp} className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Realizacje</h2>
                        <p className="text-xl text-white/50">Projekty, które zdefiniowały naszą jakość.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {portfolioItems.map((item, index) => (
                            <motion.div
                                key={item.title}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="group relative glass rounded-3xl p-8 hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-white/60 mb-4">{item.desc}</p>
                                    </div>
                                    <ExternalLink className="text-white/20 group-hover:text-primary" />
                                </div>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/40">{tag}</span>
                                    ))}
                                </div>
                                <div className="border-t border-white/5 pt-6 mt-auto">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Silnik</p>
                                            <p className="text-sm font-semibold">{item.tech}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Optymalizacja</p>
                                            <p className="text-sm font-semibold text-accent">{item.optim}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}
