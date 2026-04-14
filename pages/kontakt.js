import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function Kontakt() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    }

    return (
        <Layout>
            <section className="py-12 md:py-24 min-h-[90vh] flex items-center bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                        {/* Left Column - Profile */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-12 rounded-[48px] border border-gray-100 relative overflow-hidden shadow-xl"
                        >
                            <div className="flex items-center gap-6 mb-8 relative z-10">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                                    <div className="w-full h-full rounded-full bg-white overflow-hidden relative border-2 border-white flex items-center justify-center font-black text-3xl text-primary">
                                        W
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-3xl font-black italic text-gray-900">Tadeusz</h1>
                                    <p className="text-blue-600 font-bold">Niezależny Ekspert</p>
                                </div>
                            </div>

                            <div className="space-y-8 relative z-10">
                                <a href="tel:+48727469410" className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                                        <Phone size={24} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Telefon</p>
                                        <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">+48 727 469 410</p>
                                    </div>
                                </a>

                                <a href="mailto:kontakt@webspanner.pl" className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-purple-50 group-hover:border-purple-200 transition-colors">
                                        <Mail size={24} className="text-gray-400 group-hover:text-purple-600 transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email</p>
                                        <p className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">kontakt@webspanner.pl</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
                                        <MapPin size={24} className="text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Obszar Działania</p>
                                        <p className="text-xl font-bold text-gray-900">Polska / Remote</p>
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
                            <h2 className="text-5xl font-black mb-8 italic text-gray-900">Napisz do mnie</h2>
                            <p className="text-gray-500 text-lg mb-12">
                                Masz pomysł na projekt? A może potrzebujesz szybkiej konsultacji? Wypełnij formularz, a odpiszę najszybciej jak to możliwe.
                            </p>

                            <div className="bg-white p-8 md:p-12 border border-[#7C3AED] rounded-[32px] shadow-lg text-center">
                                <h3 className="text-2xl font-black text-gray-900 mb-6">Czekam na Twoją wiadomość</h3>
                                <p className="text-xl text-gray-700 font-medium mb-8">
                                    Skontaktuj się ze mną bezpośrednio:
                                </p>
                                <div className="flex flex-col gap-4">
                                    <a href="tel:+48727469410" className="text-3xl lg:text-4xl font-black text-[#7C3AED] hover:text-[#6D28D9] transition-colors">
                                        +48 727 469 410
                                    </a>
                                    <div className="h-px w-16 bg-gray-200 mx-auto my-2"></div>
                                    <a href="mailto:kontakt@webspanner.pl" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                                        kontakt@webspanner.pl
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}
