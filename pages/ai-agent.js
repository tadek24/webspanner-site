import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Send, Sparkles, Lock, Mail } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function AIAgent() {
    const [messages, setMessages] = useState([
        { role: 'bot', content: 'Cześć! Jestem Tadeuszem, Twoim wirtualnym ekspertem. Wersja demonstracyjna pozwala na 3 darmowe zapytania. Opowiedz mi o swojej wymarzonej stronie!' },
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [history, setHistory] = useState([])

    // Demo State
    const [messageCount, setMessageCount] = useState(0)
    const DEMO_LIMIT = 3

    // Auth State
    const [session, setSession] = useState(null)
    const [loginEmail, setLoginEmail] = useState('')
    const [isLoginLoading, setIsLoginLoading] = useState(false)
    const [loginMessage, setLoginMessage] = useState('')

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

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

        if (!session && messageCount >= DEMO_LIMIT) {
             setMessages(prev => [...prev, { role: 'bot', content: 'Wykorzystałeś limit darmowych zapytań w trybie Demo. Zaloguj się w formularzu obok lub użyj zakładki Kontakt, aby kontynuować rozmowę.' }]);
             return;
        }

        const userMessage = input.trim()
        const newMessages = [...messages, { role: 'user', content: userMessage }]
        setMessages(newMessages)
        setInput('')
        setIsLoading(true)

        if (!session) {
            setMessageCount(prev => prev + 1)
        }

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
            <section className="py-12 min-h-[calc(100vh-80px)] flex flex-col bg-gray-50">
                <div className="container mx-auto px-6 h-full flex flex-col max-w-7xl">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-8xl font-black mb-4 leading-tight text-gray-900">
                            Twój Wirtualny <br />
                            <span className="text-primary">Pracownik</span>
                        </h1>
                        {session ? (
                            <button
                                onClick={handleLogout}
                                className="text-gray-500 hover:text-primary text-sm uppercase tracking-widest font-bold transition-colors"
                            >
                                Wyloguj się
                            </button>
                        ) : (
                            <p className="text-gray-500 font-medium">Tryb demonstracyjny - wypróbuj możliwości sztucznej inteligencji.</p>
                        )}
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10 items-start max-w-7xl mx-auto w-full">
                        
                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-12 lg:col-span-4"
                        >
                            {!session ? (
                                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-[60px]" />
                                     <h3 className="text-2xl font-black mb-2 text-gray-900">Pełen Dostęp</h3>
                                     <p className="text-gray-500 mb-6 font-light text-sm">Zaloguj się, aby znieść limity wiadomości i zapisać historię konwersacji do audytu.</p>
                                     <form onSubmit={handleLogin} className="space-y-4 relative z-10">
                                         <div className="relative">
                                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                             <input
                                                 type="email"
                                                 placeholder="Twój email"
                                                 value={loginEmail}
                                                 onChange={(e) => setLoginEmail(e.target.value)}
                                                 className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                                 required
                                             />
                                         </div>
                                         <button
                                             type="submit"
                                             disabled={isLoginLoading}
                                             className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-xl transition-all disabled:opacity-50 text-sm shadow-md"
                                         >
                                             {isLoginLoading ? 'Wysyłanie...' : 'Otrzymaj Link do Logowania'}
                                         </button>
                                     </form>
                                     {loginMessage && (
                                         <p className={`mt-4 text-xs font-bold ${loginMessage.includes('Błąd') ? 'text-red-500' : 'text-green-600'}`}>
                                             {loginMessage}
                                         </p>
                                     )}
                                </div>
                            ) : (
                                <div className="bg-white border border-green-200 p-8 rounded-3xl shadow-sm text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Lock size={24} className="text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Zalogowano</h3>
                                    <p className="text-sm text-gray-500">Korzystasz z pełnej wersji systemu. Twój inteligentny doradca jest gotowy.</p>
                                </div>
                            )}

                            <div>
                                <h2 className="text-2xl font-black mb-6 italic text-gray-900">Możliwości Agenta:</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Automatyzacja', desc: 'Obsługa setek klientów naraz bez zająknięcia.' },
                                        { title: 'Personalizacja', desc: 'Dopasowanie do potrzeb i historii użytkownika.' },
                                        { title: 'Analityka', desc: 'Wyciąga wnioski i optymalizuje lejek.' },
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                                                <Sparkles className="text-blue-600" size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-extrabold text-lg mb-1 text-gray-900">{feature.title}</h4>
                                                <p className="text-gray-500 leading-relaxed font-light text-sm">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Chat Interface */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-[40px] border border-gray-200 overflow-hidden flex flex-col h-[70vh] lg:h-[750px] relative shadow-2xl lg:col-span-8"
                        >
                            <div className="p-6 border-b border-gray-100 bg-gray-50 flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <span className="ml-4 text-[10px] font-black uppercase tracking-widest text-gray-500">AI Tadeusz - Gemini 2.0</span>
                                {!session && (
                                    <span className="ml-auto text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                        Wiadomości: {messageCount}/3
                                    </span>
                                )}
                            </div>

                            <div className="flex-grow p-8 overflow-y-auto space-y-6 bg-white custom-scrollbar">
                                <AnimatePresence>
                                    {messages.map((msg, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                                        >
                                            <div className={`max-w-[85%] p-5 rounded-[24px] ${msg.role === 'bot'
                                                ? 'bg-gray-100 text-gray-800 font-medium'
                                                : 'bg-gradient-to-br from-primary to-secondary text-white font-medium shadow-md'
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
                                            <div className="bg-gray-100 p-5 rounded-[24px] flex gap-2">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
                                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="p-6 bg-gray-50 border-t border-gray-100 relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder={!session && messageCount >= DEMO_LIMIT ? "Limit darmowych wiadomości wykorzystany." : "Napisz wiadomość..."}
                                    disabled={!session && messageCount >= DEMO_LIMIT}
                                    className="w-full bg-white border border-gray-200 rounded-[28px] px-8 py-4 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all text-gray-900 text-sm font-medium pr-16 disabled:bg-gray-100 disabled:text-gray-400"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!session && messageCount >= DEMO_LIMIT}
                                    className="absolute right-10 top-1/2 -translate-y-1/2 text-primary hover:text-secondary transition-colors disabled:opacity-50"
                                >
                                    <Send size={24} />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>
        </Layout>
    )
}
