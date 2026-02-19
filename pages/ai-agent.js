import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Send, Sparkles, Lock, Mail } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function AIAgent() {
    const [messages, setMessages] = useState([
        { role: 'bot', content: 'Cześć! Jestem Tadeuszem, Twoim wirtualnym ekspertem. Opowiedz mi o swojej wymarzonej stronie, a ja przygotuję dla Ciebie plan działania.' },
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [history, setHistory] = useState([])

    // Auth State
    const [session, setSession] = useState(null)
    const [loginEmail, setLoginEmail] = useState('')
    const [isLoginLoading, setIsLoginLoading] = useState(false)
    const [loginMessage, setLoginMessage] = useState('')

    useEffect(() => {
        // Sprawdź aktywną sesję przy starcie
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        // Nasłuchuj zmian w autoryzacji
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()
        setIsLoginLoading(true)
        setLoginMessage('')

        try {
            const { error } = await supabase.auth.signInWithOtp({
                email: loginEmail,
                options: {
                    emailRedirectTo: typeof window !== 'undefined' ? window.location.href : undefined,
                },
            })
            if (error) throw error
            setLoginMessage('Wysłano link do logowania na Twój email!')
        } catch (error) {
            setLoginMessage('Błąd logowania: ' + error.message)
        } finally {
            setIsLoginLoading(false)
        }
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
    }

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

    if (!session) {
        return (
            <Layout>
                <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass p-10 rounded-[40px] border border-white/5 max-w-md w-full text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px]" />

                        <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-blue-400">
                            <Lock size={40} />
                        </div>

                        <h2 className="text-3xl font-black mb-4">Dostęp do Agenta</h2>
                        <p className="text-white/40 mb-8 font-light">Zaloguj się, aby porozmawiać o Twoim projekcie. Twój brief zostanie bezpiecznie zapisany.</p>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                                <input
                                    type="email"
                                    placeholder="Twój adres email"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    className="w-full bg-black/30 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-white/20 focus:border-blue-500/50 outline-none transition-all"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoginLoading}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoginLoading ? 'Wysyłanie...' : 'Otrzymaj Link do Logowania'}
                            </button>
                        </form>

                        {loginMessage && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mt-6 text-sm ${loginMessage.includes('Błąd') ? 'text-red-400' : 'text-green-400 font-bold'}`}
                            >
                                {loginMessage}
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            </Layout>
        )
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
                        <button
                            onClick={handleLogout}
                            className="text-white/30 hover:text-white text-sm uppercase tracking-widest font-bold transition-colors"
                        >
                            Wyloguj się
                        </button>
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
                        Agent AI jest w fazie Beta. Tadeusz zweryfikuje wszystkie dane przed wdrożeniem.
                    </p>
                </div>
            </section>
        </Layout>
    )
}
