import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Cpu, Zap, Star, ShieldCheck, MapPin } from 'lucide-react'

export default function About() {
    return (
        <Layout>
            <section className="py-24 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-8 italic text-gray-900">Tadeusz – Architekt Twojej Sprzedaży w Internecie.</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Mam 25 lat i od blisko dekady (ponad 7 lat) buduję cyfrowe fundamenty dla biznesów. Moja przygoda z kodem zaczęła się wcześnie, ale to, co wyróżnia Webspanner, to unikalne połączenie technologii z praktyką handlową.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 rounded-[48px] border border-gray-100 md:col-span-2 relative overflow-hidden group shadow-sm hover:shadow-lg transition-all"
                        >
                            <h3 className="text-3xl font-black mb-6 text-gray-900">Handlowe Doświadczenie</h3>
                            <p className="text-gray-500 text-lg leading-relaxed font-light">
                                <strong className="text-gray-900">Od 6 lat aktywnie działam w handlu internetowym.</strong> Nie tylko tworzę sklepy, ale sam w nich sprzedaję. Wiem, czego oczekują Twoi klienci, na co zwracają uwagę i co sprawia, że porzucają koszyk. Moje projekty to nie tylko kod – to przemyślane maszyny sprzedażowe.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-12 rounded-[48px] border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-all"
                        >
                            <Zap className="text-blue-500 mb-6" size={48} />
                            <h3 className="text-3xl font-black mb-2 text-gray-900">100/100</h3>
                            <p className="text-gray-500 text-sm italic font-bold">Google PageSpeed</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 rounded-[48px] border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-all"
                        >
                            <ShieldCheck className="text-purple-600 mb-6" size={48} />
                            <h3 className="text-3xl font-black mb-2 text-gray-900">WordPress</h3>
                            <p className="text-gray-500 text-sm">Bezpieczny & Skalowalny</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-12 rounded-[48px] border border-gray-100 md:col-span-2 relative overflow-hidden group shadow-sm hover:shadow-lg transition-all"
                        >
                            <h3 className="text-3xl font-black mb-6 text-gray-900">Mój Proces</h3>
                            <div className="grid grid-cols-2 gap-8 text-left">
                                <div>
                                    <div className="text-blue-600 font-black mb-2 uppercase tracking-widest text-xs italic">Fundament</div>
                                    <p className="text-gray-500 text-sm leading-relaxed">Solidna architektura WordPress/WooCommerce dostosowana do najnowszych standardów.</p>
                                </div>
                                <div>
                                    <div className="text-purple-600 font-black mb-2 uppercase tracking-widest text-xs italic">Przyspieszenie</div>
                                    <p className="text-gray-500 text-sm leading-relaxed">Optymalizacja kodu i powtarzalnych zadań dla błyskawicznego wdrożenia.</p>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* SEKCJA KONTAKTOWA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#7C3AED] text-white p-12 rounded-[48px] md:col-span-3 mt-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-10"
                        >
                            <div>
                                <h3 className="text-3xl font-black mb-4">Porozmawiajmy o Twoim projekcie</h3>
                                <p className="text-purple-100 text-lg">Skontaktuj się ze mną bezpośrednio, aby omówić szczegóły.</p>
                            </div>
                            <div className="flex flex-col items-center md:items-end gap-3 font-bold text-2xl">
                                <a href="tel:+48727469410" className="hover:text-purple-200 transition-colors bg-white/10 px-6 py-3 rounded-2xl w-full text-center">+48 727 469 410</a>
                                <a href="mailto:kontakt@webspanner.pl" className="hover:text-purple-200 transition-colors bg-white/10 px-6 py-3 rounded-2xl w-full text-center text-xl">kontakt@webspanner.pl</a>
                            </div>
                        </motion.div>

                        {/* SEKCJA LOKALNE SEO */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 p-12 rounded-[48px] border-2 border-dashed border-gray-300 md:col-span-3 mt-8 shadow-inner flex flex-col md:flex-row items-center gap-10"
                        >
                            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                                <MapPin className="text-primary" size={40} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-4 text-gray-900">Działamy Lokalnie, Tworzymy Globalnie</h3>
                                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                    Webspanner dostarcza technologie e-commerce na terenie całej Polski. Nasze biura projektowe wspierają lokalnie przedsiębiorców w <strong className="text-gray-900">Małopolsce (Kraków, Nowy Sącz)</strong>, na <strong className="text-gray-900">Podkarpaciu (Rzeszów)</strong> oraz w <strong className="text-gray-900">Świętokrzyskim (Kielce)</strong>. Niezależnie od lokalizacji, Twoja firma zyska widoczność w całym kraju.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
