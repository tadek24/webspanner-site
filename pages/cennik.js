import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Check, Zap, Shield, Crown } from 'lucide-react'

export default function Pricing() {
    const plans = [
        {
            name: 'Standard WordPress',
            price: 'Od 1500 zł',
            desc: 'Solidna baza dla Twojego biznesu.',
            icon: <Shield className="text-secondary" />,
            features: [
                'Instalacja WordPress',
                'Gotowy szablon Premium',
                'Podstawowe SEO',
                'Certyfikat SSL',
                'Szkolenie z obsługi',
            ],
            color: 'border-white/10',
        },
        {
            name: 'AI-Speed Start',
            price: '300 zł',
            desc: 'Błyskawiczne wdrożenie z Agentem AI.',
            icon: <Zap className="text-primary" />,
            features: [
                'Wywiad z Agentem AI',
                'Struktura strony w 24h',
                'Wdrożenie na Twój panel',
                'Podstawowa optymalizacja',
                'Idealne na start',
            ],
            color: 'border-primary ring-2 ring-primary/50 shadow-[0_0_30px_rgba(124,58,237,0.3)]',
            popular: true,
        },
        {
            name: 'Custom Next.js & AI',
            price: 'Indywidualnie',
            desc: 'Dedykowane aplikacje wysokiej klasy.',
            icon: <Crown className="text-accent" />,
            features: [
                'Technologia Next.js (React)',
                'Pełen Custom Design',
                'Zaawansowane funkcje AI',
                '100/100 PageSpeed',
                'Pełna skalowalność',
            ],
            color: 'border-white/10',
        },
    ]

    return (
        <Layout>
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Cennik & Oferta</h1>
                        <p className="text-xl text-white/50 max-w-2xl mx-auto">
                            Wybierz model współpracy, który najlepiej odpowiada Twoim potrzebom. Od szybkich wdrożeń AI po zaawansowane aplikacje customowe.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col glass rounded-3xl p-8 border ${plan.color} relative`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-xs font-bold uppercase tracking-widest">
                                        Najpopularniejszy
                                    </div>
                                )}
                                <div className="mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-white/50 text-sm mb-6">{plan.desc}</p>
                                    <div className="text-4xl font-black">{plan.price}</div>
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-3 text-sm text-white/70">
                                            <Check size={18} className="text-accent shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular
                                            ? 'bg-primary hover:bg-primary/80'
                                            : 'bg-white/5 hover:bg-white/10 border border-white/10'
                                        }`}
                                >
                                    Wybierz pakiet
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}
