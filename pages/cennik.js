import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Check, Columns, Store, Building, Globe, Star, Plus } from 'lucide-react'

export default function Pricing() {
    const plans = [
        {
            name: 'Starter',
            price: 'Od 1490 zł',
            desc: 'Wizytówka / Landing Page',
            icon: <Columns className="text-gray-500" />,
            features: [
                'Jednostronicowa wizytówka (Landing Page)',
                'Budowa z zachowaniem UX/UI',
                'Podstawowe SEO',
                'Optymalizacja szybkości ładowania',
            ],
            color: 'border-gray-200 bg-white',
            buttonColor: 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200'
        },
        {
            name: 'Business Plus',
            price: 'Od 2990 zł',
            desc: 'Rozbudowana strona firmowa',
            icon: <Building className="text-blue-500" />,
            features: [
                'Pełna strona (do 5 podstron)',
                'Moduł Bloga i Aktualności',
                'Integracja z Google Maps',
                'Wdrożenie Google Analytics / Tag Manager',
            ],
            color: 'border-gray-200 bg-white',
            buttonColor: 'bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200'
        },
        {
            name: 'E-commerce Start',
            price: 'Od 3990 zł',
            desc: 'Sklep WooCommerce na start',
            icon: <Store className="text-green-600" />,
            features: [
                'Gotowy do sprzedaży Sklep WooCommerce',
                'Integracja zewnętrznych płatności online',
                'Konfiguracja 1 dostawcy/kuriera',
                'Panel zarządzania produktami CMS',
            ],
            color: 'border-green-500 border-2 shadow-2xl bg-white scale-100 md:scale-105 z-10 relative',
            buttonColor: 'bg-green-600 hover:bg-green-700 text-white shadow-lg',
            popular: true,
        },
        {
            name: 'E-commerce Pro',
            price: 'Od 5990 zł',
            desc: 'Zaawansowany Biznes B2C',
            icon: <Star className="text-primary" />,
            features: [
                'Sklep o krytycznie wysokiej wydajności',
                'Zaawansowane mechanizmy filtrowania',
                'Integracja z systemami fakturowymi (np. Fakturownia)',
                'Ratowanie porzuconych koszyków',
            ],
            color: 'border-gray-200 bg-white',
            buttonColor: 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20'
        },
        {
            name: 'Custom Solutions',
            price: 'Indywidualnie',
            desc: 'Dedykowane aplikacje',
            icon: <Globe className="text-purple-900" />,
            features: [
                'Dedykowane aplikacje we frameworku Next.js',
                'Architektura Headless CMS',
                'Nietypowe integracje oprogramowania PIM/ERP',
                'Pełna globalna skalowalność',
            ],
            color: 'border-gray-200 bg-gray-50',
            buttonColor: 'bg-gray-900 hover:bg-black text-white'
        },
    ]

    const addOns = [
        { title: 'Wdrożenie Marketplace', desc: 'Integracja sprzedaży i przygotowanie ofert na platformach: Allegro, Erli, eMAG, Amazon.' },
        { title: 'Integracja BaseLinker / Apilo', desc: 'Zaawansowana konfiguracja systemów wspomagających multichannel i automatyzacje logistyczne.' },
        { title: 'Tworzenie opisów produktów', desc: 'Unikalny, zoptymalizowany pod kątem SEO (copywriting) i konwersji tekst sprzedażowy.' },
        { title: 'Sesje zdjęciowe produktów', desc: 'Współpraca fotograficzna – tworzenie packshotów i lifestylowych galerii wizualnych asortymentu.' },
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
                        <h1 className="text-5xl md:text-7xl font-black mb-8 italic text-gray-900">Tworzymy Strony i Sklepy</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Bez względu na próg wejścia, otrzymasz produkt zbudowany wedle najwyższych standardów inżynierii i designu.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 items-center mb-32">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col rounded-3xl p-8 border ${plan.color} h-full`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-green-500 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                                        Najczęstszy Wybór
                                    </div>
                                )}
                                <div className="mb-8 mt-2 text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 mx-auto shadow-sm">
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-xl font-black mb-2 text-gray-900">{plan.name}</h3>
                                    <p className="text-gray-500 text-xs mb-6 h-8 flex items-center justify-center">{plan.desc}</p>
                                    <div className="text-2xl font-black tracking-tighter text-gray-900">{plan.price}</div>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex gap-3 text-xs text-gray-600 items-start">
                                            <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check size={10} className="text-blue-600" />
                                            </div>
                                            <span className="leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a href="/kontakt">
                                    <button
                                        className={`w-full py-4 rounded-xl font-bold transition-all text-sm mt-auto ${plan.buttonColor}`}
                                    >
                                        Wybierz
                                    </button>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sekcja Usługi Dodatkowe */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-10 md:p-16 bg-white rounded-[40px] border border-gray-200 shadow-xl"
                    >
                        <h2 className="text-3xl font-black mb-10 text-gray-900 flex items-center gap-4">
                            <Plus className="text-primary bg-primary/10 rounded-lg p-1" size={36} /> 
                            Usługi Dodatkowe
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {addOns.map((addon, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">{addon.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{addon.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    )
}
