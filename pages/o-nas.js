import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Cpu, Zap, Star, ShieldCheck } from 'lucide-react'

export default function About() {
    return (
        <Layout>
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-8 italic">Cześć, jestem Tadeusz</h1>
                        <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                            Jestem ekspertem WordPress i pasjonatem AI. Łączę programowanie z automatyzacją, aby dostarczać rozwiązania jutra już dziś.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-12 rounded-[48px] border border-white/5 md:col-span-2 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all" />
                            <h3 className="text-3xl font-black mb-6">Architekt, nie tylko programista</h3>
                            <p className="text-white/40 text-lg leading-relaxed font-light">
                                Sztuczna Inteligencja to dla mnie potężne narzędzie, jak precyzyjny laser w rękach chirurga. To ja - Tadeusz - projektuję architekturę, dbam o bezpieczeństwo i nadaję unikalny charakter Twojej stronie. AI jest moim asystentem, który pozwala mi pracować szybciej i dokładniej niż całe zespoły deweloperskie, ale to moje doświadczenie gwarantuje sukces Twojego projektu.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass p-12 rounded-[48px] border border-white/5 flex flex-col items-center justify-center text-center"
                        >
                            <Zap className="text-blue-500 mb-6" size={48} />
                            <h3 className="text-3xl font-black mb-2">100/100</h3>
                            <p className="text-white/40 text-sm italic font-bold">Google PageSpeed</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-12 rounded-[48px] border border-white/5 flex flex-col items-center justify-center text-center"
                        >
                            <ShieldCheck className="text-purple-500 mb-6" size={48} />
                            <h3 className="text-3xl font-black mb-2">WordPress</h3>
                            <p className="text-white/40 text-sm">Bezpieczny & Skalowalny</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass p-12 rounded-[48px] border border-white/5 md:col-span-2 relative overflow-hidden group"
                        >
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] group-hover:bg-purple-500/20 transition-all" />
                            <h3 className="text-3xl font-black mb-6">Mój Proces</h3>
                            <div className="grid grid-cols-2 gap-8 text-left">
                                <div>
                                    <div className="text-blue-400 font-black mb-2 uppercase tracking-widest text-xs italic">Fundament</div>
                                    <p className="text-white/40 text-sm">Solidna architektura WordPress/WooCommerce</p>
                                </div>
                                <div>
                                    <div className="text-purple-400 font-black mb-2 uppercase tracking-widest text-xs italic">Przyspieszenie</div>
                                    <p className="text-white/40 text-sm">Optymalizacja kodu i treści przez AI</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
