import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Check, Zap, Shield, Crown, Sparkles } from 'lucide-react'

export default function Pricing() {
    const plans = [
        {
            name: 'Scale Up',
            price: 'Od 2900 zł',
            desc: 'Idealny dla dynamicznych firm.',
            icon: <Zap className="text-secondary" />,
            features: [
                'WordPress + Elementor Pro',
                'Optymalizacja AI Content',
                'Pełna responsywność',
                'Szybkość < 2s',
                'Wsparcie 30 dni',
            ],
            color: 'border-white/5',
        },
        {
            name: 'AI Standard',
            price: '5900 zł',
            desc: 'Nasz flagowy produkt z AI.',
            icon: <Sparkles className="text-primary" />,
            features: [
                'Własny Agent AI na stronie',
                'Dynamiczne Content Patterns',
                'Analiza konkurencji AI',
                '1 rok hostingu Cloudflare',
                'Gwarancja konwersji',
            ],
            color: 'border-primary border-2 shadow-[0_0_50px_rgba(124,58,237,0.4)]',
            popular: true,
        },
        {
            name: 'Enterprise',
            price: 'Indywidualnie',
            desc: 'Dla najbardziej wymagających.',
            icon: <Crown className="text-accent" />,
            features: [
                'Architektura Next.js Headless',
                'Niestandardowe modele LLM',
                'Full Stack Security',
                'Skalowalność globalna',
                'Priorytetowe wsparcie 24/7',
            ],
            color: 'border-white/5',
        },
    ]

    return (
        <Layout>
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-24"
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-8 italic">Inwestycja w Twój Biznes</h1>
                        <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                            Przejrzyste zasady, bez ukrytych kosztów. Wybierz fundament swojej cyfrowej dominacji.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-10 items-center">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col glass rounded-[40px] p-10 border ${plan.color} relative ${plan.popular ? 'md:scale-105 z-10' : ''}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(124,58,237,0.8)]">
                                        Rekomendowany
                                    </div>
                                )}
                                <div className="mb-10 text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 mx-auto">
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-3xl font-black mb-3">{plan.name}</h3>
                                    <p className="text-white/40 text-sm mb-8">{plan.desc}</p>
                                    <div className="text-5xl font-black tracking-tighter">{plan.price}</div>
                                </div>

                                <ul className="space-y-6 mb-12 flex-grow">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-4 text-sm text-white/60 items-center">
                                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                                <Check size={12} className="text-primary" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-5 rounded-2xl font-black transition-all text-lg ${plan.popular
                                        ? 'bg-primary hover:bg-primary/80 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]'
                                        : 'bg-white/5 hover:bg-white/10 border border-white/10'
                                        }`}
                                >
                                    Zacznij teraz
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}
