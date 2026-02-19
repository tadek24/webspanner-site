import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Rocket, Shield, Cpu, ExternalLink, Zap } from 'lucide-react'
import Hero3D from '../components/Hero3D'

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
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Hero3D />
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-tight italic">
                            Twój Sklep Śpi.<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                Moje AI Sprzedaje.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                            Tworzę ultra-szybkie strony na WordPress i sklepy WooCommerce. Bezśrednio, konkretnie, skutecznie. W mojej pracy wykorzystuję AI, aby dostarczać Ci rozwiązania szybciej niż duże zespoły.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/ai-agent">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl font-black text-xl hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-white"
                                >
                                    <Rocket size={24} /> Rozpocznij Projekt
                                </motion.button>
                            </Link>
                            <Link href="/portfolio">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-5 glass rounded-2xl font-black text-xl hover:bg-white/10 transition-all border border-white/10 w-full sm:w-auto text-white italic"
                                >
                                    Moje Realizacje
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-7xl font-black mb-6 italic">Dlaczego Tadeusz?</h2>
                        <p className="text-xl text-white/30 max-w-2xl mx-auto font-light">Nie płacisz za biuro i menadżerów. Płacisz za mój kod i doświadczenie.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="text-blue-400" size={40} />,
                                title: "Zero-Click Commerce",
                                desc: "Boty prowadzą klienta od pytania do zakupu. Twoja rola ogranicza się do wysyłki towaru."
                            },
                            {
                                icon: <Cpu className="text-purple-500" size={40} />,
                                title: "WooCommerce na Sterydach",
                                desc: "Skalowalność bez zatrudniania nowych pracowników. AI obsługuje nieograniczoną liczbę klientów."
                            },
                            {
                                icon: <Rocket className="text-blue-600" size={40} />,
                                title: "Hybrydowa Moc",
                                desc: "Stabilność WordPressa + Inteligencja LLM. Sprawdzone rozwiązania doprawione wizją jutra."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="glass p-12 rounded-[48px] border border-white/5 hover:border-blue-500/30 transition-all group"
                            >
                                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                                <p className="text-white/40 leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Marketplace Section */}
            <section className="py-32 relative bg-[#0A0A1B]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-7xl font-black mb-6 italic">Marketplace & Integracje</h2>
                        <p className="text-xl text-white/30 max-w-2xl mx-auto font-light">Pomogę Ci wyjść z ofertą na największe platformy.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Wdrożenia */}
                        <div className="glass p-10 rounded-[40px] border border-white/5 break-words">
                            <h3 className="text-3xl font-black mb-8 text-blue-400">Wdrożenia</h3>
                            <ul className="space-y-6">
                                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-xl font-bold">Allegro</span>
                                    <span className="text-2xl font-black text-white/80">od 1499 PLN</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-xl font-bold">Erli</span>
                                    <span className="text-2xl font-black text-white/80">od 1199 PLN</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-xl font-bold">Emag</span>
                                    <span className="text-2xl font-black text-white/80">od 1599 PLN</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-xl font-bold">Amazon</span>
                                    <span className="text-2xl font-black text-white/80">od 2499 PLN</span>
                                </li>
                                <li className="flex justify-between items-center pt-2">
                                    <span className="text-xl font-bold text-white/50">Inne</span>
                                    <span className="text-lg font-bold text-white/50">Wycena indywidualna</span>
                                </li>
                            </ul>
                            <p className="text-white/20 text-xs mt-6 italic">
                                *Podane ceny obejmują bazowe wdrożenie techniczne, mapowanie kategorii i konfigurację do 100 produktów. Zaawansowane integracje wyceniane indywidualnie.
                            </p>
                        </div>

                        {/* Wystawianie Produktów */}
                        <div className="glass p-10 rounded-[40px] border border-white/5 relative overflow-hidden break-words">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
                            <h3 className="text-3xl font-black mb-8 text-purple-400">Moje Wsparcie</h3>
                            <p className="text-white/40 mb-8 font-light">W cenie: edycja zdjęć, opis SEO, parametryzacja. Robię to osobiście lub z pomocą moich narzędzi AI.</p>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center">
                                    <div>
                                        <div className="font-bold text-xl">Pakiet Startowy</div>
                                        <div className="text-sm text-white/40">1-50 szt.</div>
                                    </div>
                                    <div className="text-3xl font-black">15 PLN<span className="text-sm text-white/30 font-normal">/szt</span></div>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center border-l-4 border-l-purple-500">
                                    <div>
                                        <div className="font-bold text-xl">Pakiet Profesjonalny</div>
                                        <div className="text-sm text-white/40">51-200 szt.</div>
                                    </div>
                                    <div className="text-3xl font-black">10 PLN<span className="text-sm text-white/30 font-normal">/szt</span></div>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center">
                                    <div>
                                        <div className="font-bold text-xl">Pakiet Premium</div>
                                        <div className="text-sm text-white/40">+200 szt.</div>
                                    </div>
                                    <div className="text-3xl font-black">7 PLN<span className="text-sm text-white/30 font-normal">/szt</span></div>
                                </div>
                            </div>
                        </div>
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
                            Mój AI Agent czeka, aby omówić Twój projekt. Bez kolejek, bez czekania - zacznij rozmowę teraz.
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
