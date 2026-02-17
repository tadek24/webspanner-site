import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Send, User, Bot, Sparkles } from 'lucide-react'

export default function AIAgent() {
    const [messages, setMessages] = useState([
        { role: 'bot', content: 'Cześć! Jestem Twoim osobistym doradcą Webspanner AI. W czym mogę Ci dzisiaj pomóc?' },
    ])
    const [input, setInput] = useState('')
    const [step, setStep] = useState(0)

    const handleSend = () => {
        if (!input.trim()) return

        const newMessages = [...messages, { role: 'user', content: input }]
        setMessages(newMessages)
        setInput('')

        // Simulate AI responses
        setTimeout(() => {
            if (step === 0) {
                setMessages([...newMessages, { role: 'bot', content: 'Świetnie! A czy masz już wybraną kolorystykę lub styl, który Ci się podoba?' }])
                setStep(1)
            } else if (step === 1) {
                setMessages([...newMessages, { role: 'bot', content: 'Rozumiem. Przygotowuję dla Ciebie strukturę strony, którą Mateusz wdroży na Twój własny panel WordPress w 24h.' }])
                setStep(2)
            }
        }, 1000)
    }

    return (
        <Layout>
            <section className="py-12 h-[80vh] flex flex-col">
                <div className="container mx-auto px-6 flex-grow flex flex-col max-w-4xl">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                            Twój Wirtualny <br />
                            <span className="text-primary">Pracownik</span>
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-black mb-6 italic">Możliwości Agenta AI:</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Automatyzacja Obsługi', desc: 'Obsługuje setki klientów jednocześnie, 24/7, bez pomyłek.' },
                                        { title: 'Personalizacja Oferty', desc: 'Dopasowuje produkty w czasie rzeczywistym do potrzeb użytkownika.' },
                                        { title: 'Inteligentna Analityka', desc: 'Uczy się zachowań Twoich klientów i optymalizuje ścieżkę sprzedaży.' },
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-6 items-start">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                                <Sparkles className="text-primary" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-extrabold text-xl mb-2">{feature.title}</h4>
                                                <p className="text-white/40 leading-relaxed font-light">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="glass rounded-[40px] border border-white/5 overflow-hidden flex flex-col h-[600px] relative"
                        >
                            <div className="p-8 border-b border-white/5 bg-white/5 flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-red-500/50" />
                                <div className="w-4 h-4 rounded-full bg-yellow-500/50" />
                                <div className="w-4 h-4 rounded-full bg-green-500/50" />
                                <span className="ml-4 text-xs font-black uppercase tracking-widest text-white/30">AI Console v4.0</span>
                            </div>

                            <div className="flex-grow p-8 overflow-y-auto space-y-6">
                                <AnimatePresence>
                                    {messages.map((msg, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                                        >
                                            <div className={`max-w-[85%] p-6 rounded-[24px] ${msg.role === 'bot'
                                                ? 'bg-white/5 border border-white/10 text-white/80'
                                                : 'bg-primary text-white font-bold'
                                                }`}>
                                                <p className="text-sm leading-relaxed">{msg.content}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            <div className="p-6 bg-white/5 border-t border-white/5 relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Zadaj pytanie..."
                                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-white/80 text-sm"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-9 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-white transition-colors"
                                >
                                    <Send size={24} />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    <p className="text-center text-white/30 text-xs mt-4">
                        Agent AI jest w fazie Beta. Mateusz zweryfikuje wszystkie dane przed wdrożeniem.
                    </p>
                </div>
            </section>
        </Layout>
    )
}
