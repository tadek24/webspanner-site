import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Send, User, Bot, Sparkles } from 'lucide-react'

export default function AIAgent() {
    const [messages, setMessages] = useState([
        { role: 'bot', content: 'Cześć! Jestem Twoim osobistym doradcą Webspanner AI. W czym mogę Ci dzisiaj pomóc?' },
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [history, setHistory] = useState([])

    const handleSend = async () => {
        if (!input.trim() || isLoading) return

        const userMessage = input.trim()
        const newMessages = [...messages, { role: 'user', content: userMessage }]
        setMessages(newMessages)
        setInput('')
        setIsLoading(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    history: history,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessages(prev => [...prev, { role: 'bot', content: data.text }]);
                setHistory(prev => [
                    ...prev,
                    { role: 'user', parts: [{ text: userMessage }] },
                    { role: 'model', parts: [{ text: data.text }] }
                ]);
            } else {
                setMessages(prev => [...prev, { role: 'bot', content: 'Przepraszam, wystąpił błąd podczas komunikacji z AI.' }]);
            }
        } catch (error) {
            console.error('Chat Error:', error);
            setMessages(prev => [...prev, { role: 'bot', content: 'Błąd połączenia. Spróbuj ponownie później.' }]);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Layout>
            <section className="py-12 min-h-[calc(100vh-80px)] flex flex-col">
                <div className="container mx-auto px-6 h-full flex flex-col max-w-6xl">
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
                                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                                <Sparkles className="text-blue-500" size={24} />
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
                            className="glass rounded-[48px] border border-white/5 overflow-hidden flex flex-col h-[70vh] lg:h-[750px] relative shadow-2xl"
                        >
                            <div className="p-8 border-b border-white/5 bg-[#050512]/50 flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <span className="ml-4 text-[10px] font-black uppercase tracking-widest text-white/30">Gemini 2.0 Oracle</span>
                            </div>

                            <div className="flex-grow p-10 overflow-y-auto space-y-8 custom-scrollbar">
                                <AnimatePresence>
                                    {messages.map((msg, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                                        >
                                            <div className={`max-w-[85%] p-6 rounded-[32px] ${msg.role === 'bot'
                                                ? 'bg-white/5 border border-white/5 text-white/80 font-light'
                                                : 'bg-gradient-to-br from-blue-600 to-purple-700 text-white font-black shadow-lg shadow-blue-500/20'
                                                }`}>
                                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                    {isLoading && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] flex gap-2">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="p-8 bg-[#050512]/50 border-t border-white/5 relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Wpisz treść wiadomości..."
                                    className="w-full bg-black/50 border border-white/10 rounded-[28px] px-8 py-5 outline-none focus:border-blue-500/50 transition-all text-white/80 text-sm font-light pr-16"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-12 top-1/2 -translate-y-1/2 text-blue-500 hover:text-white transition-colors"
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
