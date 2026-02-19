import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Image from 'next/image'

export default function Kontakt() {
    return (
        <Layout>
            <section className="py-12 md:py-24 min-h-[90vh] flex items-center">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                        {/* Left Column - Profile */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white/5 p-12 rounded-[48px] border border-white/10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                                    <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
                                        {/* Placeholder for Photo */}
                                        <div className="w-full h-full bg-white/10" />
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-3xl font-black italic">Tadeusz</h1>
                                    <p className="text-blue-400 font-bold">Niezależny Ekspert</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <a href="tel:+48727469410" className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                        <Phone size={24} className="text-white/60 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Telefon</p>
                                        <p className="text-xl font-bold group-hover:text-blue-400 transition-colors">+48 727 469 410</p>
                                    </div>
                                </a>

                                <a href="mailto:kontakt@webspanner.pl" className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                                        <Mail size={24} className="text-white/60 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email</p>
                                        <p className="text-xl font-bold group-hover:text-purple-400 transition-colors">kontakt@webspanner.pl</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                                        <MapPin size={24} className="text-white/60" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Obszar Działania</p>
                                        <p className="text-xl font-bold">Polska / Remote</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-5xl font-black mb-8 italic">Napisz do mnie</h2>
                            <p className="text-white/40 text-lg mb-12">
                                Masz pomysł na projekt? A może potrzebujesz szybkiej konsultacji? Wypełnij formularz, a odpiszę w ciągu 24h.
                            </p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Imię"
                                        className="bg-transparent border border-white/10 rounded-2xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/5 transition-all"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-transparent border border-white/10 rounded-2xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/5 transition-all"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Temat"
                                    className="w-full bg-transparent border border-white/10 rounded-2xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/5 transition-all"
                                />
                                <textarea
                                    rows="5"
                                    placeholder="Treść wiadomości..."
                                    className="w-full bg-transparent border border-white/10 rounded-2xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/5 transition-all resize-none"
                                />

                                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-[1.02] transition-all">
                                    <Send size={20} />
                                    Wyślij Wiadomość
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}
