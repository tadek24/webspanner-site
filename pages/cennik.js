import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Check, Zap, Server, Building, Globe, Star } from 'lucide-react'

export default function Pricing() {
    const plans = [
        {
            name: 'Starter',
            price: 'Od 1490 zł',
            desc: 'Wizytówka / Landing Page',
            icon: <Zap className="text-gray-500" />,
            features: [
                'Nowoczesna strona wizytówka',
                'Landing Page z ukierunkowaniem na akcję (CTA)',
                'Responsywność i dostosowanie do mobile',
                'Optymalizacja SEO pod wyszukiwarki',
            ],
            color: 'border-gray-200 bg-white',
            buttonColor: 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200'
        },
        {
            name: 'E-commerce Basic',
            price: 'Od 3490 zł',
            desc: 'Klasyczny sklep WooCommerce',
            icon: <Server className="text-secondary" />,
            features: [
                'Pełnoprawny sklep internetowy (WooCommerce)',
                'Integracja z bramką płatności (tpay / Przelewy24)',
                'Konfiguracja wysyłek i kurierów',
                'Zarządzanie asortymentem i statystykami',
            ],
            color: 'border-gray-200 bg-white',
            buttonColor: 'bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/20'
        },
        {
            name: 'Marketplace Pro',
            price: 'Od 5490 zł',
            desc: 'Sklep + Integracje Multichannel',
            icon: <Star className="text-primary" />,
            features: [
                'Funkcjonalności pakietu "E-commerce Basic"',
                'Wdrożenie i obsługa Allegro, Erli, eMAG',
                'Dodawanie, optymalizacja i formatowanie produktów',
                'Strategia zwiększania zasięgów sprzedaży',
            ],
            color: 'border-primary border-2 shadow-2xl bg-white scale-100 md:scale-105 z-10 relative',
            buttonColor: 'bg-primary hover:bg-primary/90 text-white shadow-lg',
            popular: true,
        },
        {
            name: 'Global Expansion',
            price: 'Od 8990 zł',
            desc: 'Ekspansja zagraniczna & ERP',
            icon: <Globe className="text-blue-500" />,
            features: [
                'Funkcjonalności pakietu "Marketplace Pro"',
                'Amazon i marketplace\'y zagraniczne',
                'Pełna integracja BaseLinker lub Apilo',
                'Scentralizowane zarządzanie stanami magazynowymi',
            ],
            color: 'border-gray-200 bg-white',
            buttonColor: 'bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200'
        },
        {
            name: 'Enterprise',
            price: 'Indywidualnie',
            desc: 'Pełna dominacja technologiczna',
            icon: <Building className="text-purple-900" />,
            features: [
                'Pełna automatyzacja i integracja procesów wspierana AI',
                'Dedykowane aplikacje i systemy',
                'Globalna architektura chmurowa',
                'Opieka, SLA i rozwój 24/7',
            ],
            color: 'border-gray-200 bg-gray-50',
            buttonColor: 'bg-gray-900 hover:bg-black text-white'
        },
    ]

    return (
        <Layout>
            <section className="py-24 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-24"
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-8 italic text-gray-900">Inwestycja w Twój Biznes</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Przejrzyste zasady, profesjonalne podejście. Wybierz pakiet, który najbardziej pasuje do obecnego etapu Twojej firmy.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 items-center">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col rounded-3xl p-8 border ${plan.color} h-full`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                                        Najczęstszy Wybór
                                    </div>
                                )}
                                <div className="mb-8 mt-2 text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 mx-auto border border-gray-100 shadow-sm">
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-xl font-black mb-2 text-gray-900">{plan.name}</h3>
                                    <p className="text-gray-500 text-xs mb-6 h-8">{plan.desc}</p>
                                    <div className="text-2xl font-black tracking-tighter text-gray-900">{plan.price}</div>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex gap-3 text-xs text-gray-600 items-start">
                                            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check size={10} className="text-green-600" />
                                            </div>
                                            <span className="leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-4 rounded-xl font-bold transition-all text-sm mt-auto ${plan.buttonColor}`}
                                >
                                    Wybierz
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}
