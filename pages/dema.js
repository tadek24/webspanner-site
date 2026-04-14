import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { ExternalLink, Car, Utensils } from 'lucide-react'

export default function Dema() {
    const demos = [
        {
            title: "Demo Mechanik",
            desc: "Prowadzisz warsztat samochodowy, serwis opon lub stację kontroli pojazdów? Ta cyfrowa wizytówka zbuduje zaufanie jeszcze przed wizytą klienta. Wyposażona w nowoczesny system rezerwacji terminów (opcjonalny) oraz przejrzysty interfejs usług i cennika. Działa idealnie na smartfonie, gwarantując łatwy dojazd z Google Maps.",
            category: "Usługi Motoryzacyjne",
            icon: <Car size={28} className="text-white" />,
            price: "Od 2200 zł",
            url: "https://demomechanik.vercel.app/"
        },
        {
            title: "Demo Burger",
            desc: "Apetycznie wyglądająca strona restauracji łącząca funkcje wciągającej palety barw z szybkim składaniem zamówień. Moduł Menu, rezerwacja stolików i koszyk z systemem opcji pod dania fast-food. Responsywność pozwala Twoim klientom skonstruować własnego burgera bezpośrednio z kanapy przed telewizorem.",
            category: "Gastronomia / Restauracja",
            icon: <Utensils size={28} className="text-white" />,
            price: "Od 1900 zł",
            url: "https://demoburger.vercel.app/"
        }
    ]

    return (
        <Layout>
            <section className="py-24 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-8 italic text-gray-900">Gotowe Szablony</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Potrzebujesz sprawdzonego, przetestowanego na rynku rozwiązania? Zobacz wersje demonstracyjne portali, które możemy błyskawicznie wdrożyć dla Twojego biznesu.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {demos.map((demo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-[40px] border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col group"
                            >
                                <div className="h-48 bg-gray-900 relative w-full flex items-center justify-center overflow-hidden">
                                     <div className="absolute inset-0 bg-[#7C3AED]/20 group-hover:bg-[#7C3AED]/40 transition-colors duration-500" />
                                    <div className="z-10 w-20 h-20 bg-[#7C3AED] rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                                        {demo.icon}
                                    </div>
                                    <span className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm text-gray-900 uppercase tracking-widest border border-gray-100">
                                        {demo.category}
                                    </span>
                                </div>
                                <div className="p-10 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-3xl font-black text-gray-900">{demo.title}</h3>
                                    </div>
                                    <p className="text-gray-600 font-light leading-relaxed text-sm mb-8 flex-grow">
                                        {demo.desc}
                                    </p>
                                    
                                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                                        <div>
                                            <span className="block text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Cena Orientacyjna</span>
                                            <span className="text-2xl font-black text-gray-900">{demo.price}</span>
                                        </div>
                                        <a
                                            href={demo.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white flex items-center gap-2 font-bold transition-colors shadow-md hover:shadow-xl"
                                        >
                                            Otwórz Demo <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}
