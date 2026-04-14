import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Check, Columns, Store, Building, Globe, Star, Plus, PhoneCall } from 'lucide-react'

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
            color: 'border-gray-200 bg-white shadow-sm',
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
            color: 'border-gray-200 bg-white shadow-sm',
            buttonColor: 'bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-100'
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
            color: 'border-gray-200 bg-white shadow-sm',
            buttonColor: 'bg-green-600 hover:bg-green-700 text-white'
        },
        {
            name: 'E-commerce Pro',
            price: 'Od 5990 zł',
            desc: 'Zaawansowany Biznes B2C',
            icon: <Star className="text-purple-600" />,
            features: [
                'Sklep o krytycznie wysokiej wydajności',
                'Zaawansowane mechanizmy filtrowania',
                'Integracja z systemami fakturowymi (np. Fakturownia)',
                'Ratowanie porzuconych koszyków',
            ],
            color: 'border-[#7C3AED] border-2 shadow-2xl bg-white scale-100 md:scale-105 z-10 relative',
            buttonColor: 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-lg',
            popular: true,
        },
        {
            name: 'Custom Solutions',
            price: 'Indywidualnie',
            desc: 'Dedykowane aplikacje',
            icon: <Globe className="text-gray-900" />,
            features: [
                'Dedykowane aplikacje we frameworku Next.js',
                'Architektura Headless CMS',
                'Nietypowe integracje oprogramowania PIM/ERP',
                'Pełna globalna skalowalność',
            ],
            color: 'border-gray-200 bg-black shadow-xl text-white',
            buttonColor: 'bg-white hover:bg-gray-100 text-black border border-gray-200',
            dark: true
        },
    ]

    const addOns = [
        { title: 'Wdrożenie Allegro / Erli / eMAG', price: 'Od 1499 zł', desc: 'Integracja sprzedaży i przygotowanie bazowych ofert na czołowych platformach w oparciu o regulaminy kanałów.' },
        { title: 'Pełna obsługa Amazon', price: 'Od 2999 zł', desc: 'Zaawansowane wejście na rynki DE/UK/USA, wsparcie przy Account Health i analizie popytu.' },
        { title: 'Integracja BaseLinker / Apilo', price: 'Od 999 zł', desc: 'Skomplikowana konfiguracja systemów wspomagających multichannel i tworzenie zautomatyzowanych akcji.' },
        { title: 'Tworzenie opisów produktów SEO', price: 'Od 49 zł / szt.', desc: 'Unikalny i zoptymalizowany pod kątem strategii pozycjonowania (copywriting) tekst sprzedażowy.' },
    ]

    return (
        <Layout>
            <section className="py-24 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6">
                    
                    {/* Baner Kontaktowy na górze */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16 bg-[#7C3AED] text-white p-6 md:p-8 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
                    >
                        <div className="flex items-center gap-4">
                             <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shrink-0">
                                 <PhoneCall size={28} className="text-white" />
                             </div>
                             <div>
                                 <h2 className="text-xl font-bold mb-1">Skonsultuj projekt bez zobowiązań</h2>
                                 <p className="text-purple-100 font-medium text-sm">Zadzwoń do mnie bezpośrednio na numer komórkowy.</p>
                             </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <a href="tel:+48727469410" className="text-2xl font-black whitespace-nowrap">+48 727 469 410</a>
                            <span className="hidden sm:block text-purple-300">|</span>
                            <a href="mailto:kontakt@webspanner.pl" className="text-xl font-bold whitespace-nowrap hover:text-purple-200 transition-colors">kontakt@webspanner.pl</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-8 italic text-gray-900">Przemyślane Ceny</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Bez względu na próg wejścia, otrzymasz stabilny produkt zbudowany wedle rygorów inżynierii programowania.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 items-center mb-32">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col rounded-3xl p-8 border ${plan.color} h-full`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-[#7C3AED] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg whitespace-nowrap">
                                        Najczęstszy Wybór
                                    </div>
                                )}
                                <div className="mb-8 mt-4 text-center">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto ${plan.dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100 shadow-sm'} `}>
                                        {plan.icon}
                                    </div>
                                    <h3 className={`text-xl font-black mb-2 ${plan.dark ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                                    <p className={`text-xs mb-6 h-8 flex items-center justify-center ${plan.dark ? 'text-gray-400' : 'text-gray-500'}`}>{plan.desc}</p>
                                    <div className={`text-3xl font-black tracking-tighter ${plan.dark ? 'text-white' : 'text-gray-900'}`}>{plan.price}</div>
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className={`flex gap-3 text-xs items-start font-medium ${plan.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-[-2px] ${plan.dark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                                <Check size={12} className={plan.dark ? 'text-white' : 'text-[#7C3AED]'} />
                                            </div>
                                            <span className="leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a href="/kontakt">
                                    <button
                                        className={`w-full py-4 rounded-xl font-bold transition-all text-sm mt-auto shadow-sm ${plan.buttonColor}`}
                                    >
                                        Zamów Wycenę
                                    </button>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sekcja Usługi Dodatkowe z Cennikiem */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-10 md:p-16 bg-white rounded-[40px] border border-gray-200 shadow-xl"
                    >
                        <h2 className="text-3xl font-black mb-12 text-gray-900 flex items-center gap-4">
                            <Plus className="text-white bg-[#7C3AED] rounded-xl p-2 shadow-md" size={40} /> 
                            Usługi Dodatkowe E-commerce
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-10">
                            {addOns.map((addon, index) => (
                                <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-[#7C3AED]/30 transition-all">
                                    <div className="w-2 h-2 rounded-full bg-[#7C3AED] mt-2.5 shrink-0" />
                                    <div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                                             <h4 className="text-lg font-bold text-gray-900 leading-tight">{addon.title}</h4>
                                             <span className="inline-block bg-white border border-gray-200 px-3 py-1 rounded-lg text-sm font-black whitespace-nowrap text-[#7C3AED] shadow-sm">
                                                 {addon.price}
                                             </span>
                                        </div>
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
