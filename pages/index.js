import Layout from '../components/Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Rocket, Shield, Cpu, Zap, ShoppingCart, Layers, Truck, FileText } from 'lucide-react'
import Hero3D from '../components/Hero3D'

export default function Home() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-50">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20 filter grayscale invert">
                    <Hero3D />
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-tight italic text-gray-900">
                            Twój Sklep Śpi.<br />
                            <span className="text-[#7C3AED]">
                                Moje AI Sprzedaje.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                            Tworzę ultra-szybkie strony na WordPress i sklepy WooCommerce. Oraz wdrażam Twoją sprzedaż na największe platformy w Polsce i za granicą.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/kontakt">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-5 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-xl font-bold text-xl text-white transition-colors flex items-center justify-center w-full sm:w-auto shadow-lg"
                                >
                                    Napisz do mnie
                                </motion.button>
                            </Link>
                            <Link href="/portfolio">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-5 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl font-bold text-xl text-gray-900 transition-colors w-full sm:w-auto shadow-sm"
                                >
                                    Moje Realizacje
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-7xl font-black mb-6 italic text-gray-900">Dlaczego Tadeusz?</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">Nie płacisz za biuro i menadżerów. Płacisz za mój kod i doświadczenie.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="text-[#7C3AED]" size={40} />,
                                title: "Zero-Click Commerce",
                                desc: "Boty prowadzą klienta od pytania do zakupu. Twoja rola ogranicza się do wysyłki towaru."
                            },
                            {
                                icon: <Cpu className="text-[#7C3AED]" size={40} />,
                                title: "WooCommerce na Sterydach",
                                desc: "Skalowalność bez zatrudniania nowych pracowników. AI obsługuje nieograniczoną liczbę klientów."
                            },
                            {
                                icon: <Rocket className="text-[#7C3AED]" size={40} />,
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
                                className="bg-white p-12 rounded-[48px] border border-gray-100 hover:border-[#7C3AED]/30 transition-all group shadow-sm hover:shadow-xl"
                            >
                                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-2xl font-black mb-4 text-gray-900">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nowe Usługi */}
            <section className="py-32 relative bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-7xl font-black mb-6 italic text-gray-900">Moje Usługi</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">Kompleksowe wsparcie dla Twojego biznesu e-commerce.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* 1 */}
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                             <div className="w-16 h-16 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                                 <ShoppingCart className="text-[#7C3AED]" size={32} />
                             </div>
                             <h3 className="text-2xl font-black mb-4 text-gray-900">Marketplace Management</h3>
                             <p className="text-gray-600 leading-relaxed">
                                Strategia sprzedaży i tworzenie ofert na platformach: <strong className="text-gray-900">Allegro, Erli, eMAG, Amazon</strong>. Pomagam w pełnym wyjściu z ofertą na największe rynki i zarządzam ekspozycją Twoich produktów.
                             </p>
                        </motion.div>
                        {/* 2 */}
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                             <div className="w-16 h-16 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                                 <Layers className="text-[#7C3AED]" size={32} />
                             </div>
                             <h3 className="text-2xl font-black mb-4 text-gray-900">Integracje Systemowe</h3>
                             <p className="text-gray-600 leading-relaxed">
                                Pełna synchronizacja zamówień oraz stanów magazynowych. Pracuję na systemach takich jak <strong className="text-gray-900">BaseLinker</strong> oraz <strong className="text-gray-900">Apilo</strong>, automatyzując obieg danych w Twojej firmie.
                             </p>
                        </motion.div>
                        {/* 3 */}
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                             <div className="w-16 h-16 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                                 <Truck className="text-[#7C3AED]" size={32} />
                             </div>
                             <h3 className="text-2xl font-black mb-4 text-gray-900">Logistyka i Płatności</h3>
                             <p className="text-gray-600 leading-relaxed">
                                Niezawodna integracja z wiodącymi firmami kurierskimi (InPost, DPD, DHL) oraz szybkimi bramkami płatności (tpay, Przelewy24, PayU).
                             </p>
                        </motion.div>
                        {/* 4 */}
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.3}} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                             <div className="w-16 h-16 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                                 <FileText className="text-[#7C3AED]" size={32} />
                             </div>
                             <h3 className="text-2xl font-black mb-4 text-gray-900">Content Management</h3>
                             <p className="text-gray-600 leading-relaxed">
                                Profesjonalne tworzenie, edycja i dodawanie produktów na platformy sprzedażowe z uwzględnieniem zasad optymalizacji SEO opisu.
                             </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden bg-white">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-16 md:p-24 rounded-[48px] bg-[#7C3AED] text-center relative overflow-hidden shadow-2xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">
                            Gotowy na <span className="text-purple-200">Cyfrową Rewolucję</span>?
                        </h2>
                        <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-12">
                            Mój AI Agent czeka, aby omówić Twój projekt. Bez kolejek, bez czekania - zacznij rozmowę teraz.
                        </p>
                        <Link href="/ai-agent">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-12 py-5 bg-white text-[#7C3AED] rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-xl"
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
