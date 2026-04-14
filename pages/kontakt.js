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

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Imię"
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                        className="bg-white border border-gray-200 rounded-2xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                        className="bg-white border border-gray-200 rounded-2xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Temat"
                                    required
                                    value={formData.subject}
                                    onChange={e => setFormData({...formData, subject: e.target.value})}
                                    className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                                />
                                <textarea
                                    rows="5"
                                    required
                                    placeholder="Treść wiadomości..."
                                    value={formData.message}
                                    onChange={e => setFormData({...formData, message: e.target.value})}
                                    className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none shadow-sm"
                                />

                                <button 
                                    disabled={status === 'loading'}
                                    className="w-full bg-purple-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] transition-colors"
                                >
                                    {status === 'loading' ? <Loader2 size={20} className="animate-spin text-white" /> : <Send size={20} className="text-white" />}
                                    Wyślij Wiadomość
                                </button>
                                
                                {status === 'success' && (
                                    <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl flex items-center gap-3 font-medium">
                                        <CheckCircle2 size={24} className="shrink-0" />
                                        Wiadomość została pomyślnie wysłana! Odezwiemy się najszybciej jak to możliwe.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl flex items-center gap-3 text-sm font-medium">
                                        <AlertCircle size={24} className="shrink-0" />
                                        Wystąpił problem z połączeniem z serwerem. Upewnij się, że poprawnie wpisałeś dane lub spróbuj ponownie za chwilę.
                                    </div>
                                )}
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}
