import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Rocket, Shield, Cpu, ExternalLink, Zap } from 'lucide-react'

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
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050512]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
                            Twój Sklep,<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#a855f7]">
                                Nasza Inteligentna Dominacja
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                            Łączymy potęgę WordPressa z precyzją sztucznej inteligencji. Tworzymy ekosystemy sprzedażowe, które wyprzedzają konkurencję.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/ai-agent">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-5 bg-primary rounded-2xl font-bold text-xl hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                                >
                                    <Rocket size={24} /> Rozpocznij Projekt
                                </motion.button>
                            </Link>
                            <Link href="/portfolio">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-5 glass rounded-2xl font-bold text-xl hover:bg-white/10 transition-all border border-white/10 w-full sm:w-auto"
                                >
                                    Nasze Projekty
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-32 bg-[#050512] relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Dlaczego Webspanner?</h2>
                        <p className="text-xl text-white/40 max-w-2xl mx-auto">Nowoczesne technologie w służbie Twojego sukcesu.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="text-[#a855f7]" size={40} />,
                                title: "Ekstremalna Szybkość",
                                desc: "Optymalizacja pod kątem 100/100 w Google PageSpeed Insights. Twoja strona ładuje się w mgnieniu oka."
                            },
                            {
                                icon: <Cpu className="text-primary" size={40} />,
                                title: "Integracja AI",
                                desc: "Wykorzystujemy zaawansowane modele językowe do generowania treści, obsługi klienta i analizy danych."
                            },
                            {
                                icon: <Rocket className="text-secondary" size={40} />,
                                title: "Design 2026",
                                desc: "Futurystyczny interfejs użytkownika, który buduje zaufanie i wyróżnia Cię na tle standardowych szablonów."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="glass p-10 rounded-[32px] border border-white/5 hover:border-primary/30 transition-all group"
                            >
                                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-2xl font-extrabold mb-4">{item.title}</h3>
                                <p className="text-white/50 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass p-16 md:p-24 rounded-[48px] border border-primary/20 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            Gotowy na <span className="text-primary">Cyfrową Rewolucję</span>?
                        </h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
                            Nasz AI Agent czeka, aby omówić Twój projekt. Bez kolejek, bez czekania - zacznij rozmowę teraz.
                        </p>
                        <Link href="/ai-agent">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-12 py-5 bg-white text-black rounded-2xl font-bold text-xl hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all"
                            >
                                Porozmawiaj z Agentem AI
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </Layout>
    )
}
