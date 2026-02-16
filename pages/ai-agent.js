import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Send, User, Bot, Sparkles } from 'lucide-react'

export default function AIAgent() {
    const [messages, setMessages] = useState([
        { role: 'bot', content: 'Cześć! Jestem Agentem AI Webspanner. Pomogę Ci przygotować strukturę Twojej nowej strony.' },
        { role: 'bot', content: 'Jakie jest główne zadanie Twojej witryny? (np. sklep, portfolio, wizytówka firmy)' },
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
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
                            <Sparkles className="text-primary" /> Rozmowa z Agentem AI
                        </h1>
                    </div>

                    <div className="flex-grow glass rounded-3xl p-6 overflow-y-auto mb-6 flex flex-col gap-4">
                        <AnimatePresence>
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: msg.role === 'bot' ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-2xl flex gap-3 ${msg.role === 'bot' ? 'bg-white/5 border border-white/10' : 'bg-primary text-white'
                                        }`}>
                                        {msg.role === 'bot' && <Bot size={20} className="shrink-0 text-primary" />}
                                        <p className="text-sm leading-relaxed">{msg.content}</p>
                                        {msg.role === 'user' && <User size={20} className="shrink-0 opacity-50" />}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Wpisz swoją odpowiedź..."
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors text-white"
                        />
                        <button
                            onClick={handleSend}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary rounded-xl hover:bg-primary/80 transition-colors"
                        >
                            <Send size={20} />
                        </button>
                    </div>

                    <p className="text-center text-white/30 text-xs mt-4">
                        Agent AI jest w fazie Beta. Mateusz zweryfikuje wszystkie dane przed wdrożeniem.
                    </p>
                </div>
            </section>
        </Layout>
    )
}
