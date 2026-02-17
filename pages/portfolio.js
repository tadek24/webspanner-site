import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Check, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
    const projects = [
        {
            title: "Sandey - Beauty & Spa Booking",
            desc: "Kompleksowy system rezerwacji wizyt dla salonów urody.",
            img: "/sandey.png",
            category: "Health & Beauty",
            zalety: ["Kalendarz 24/7", "Płatności BLIK", "Powiadomienia SMS"]
        },
        {
            title: "Centrum Pokryć Dachowych - E-commerce",
            desc: "Sklep B2B/B2C z zaawansowaną logistyką i konfiguratorami dachów.",
            img: "/sklep-rapdach.png",
            category: "E-commerce",
            zalety: ["Integracja z ERP", "Kalkulator powierzchni", "Szybkie zamówienia"]
        },
        {
            title: "Rapdach - Strona Korporacyjna",
            desc: "Nowoczesna wizytówka lidera branży dekarskiej.",
            img: "/rapdach.png",
            category: "Corporate",
            zalety: ["Design Premium", "Optymalizacja SEO", "Szybkie ładowanie"]
        },
        {
            title: "WildHome - Nieruchomości & Design",
            desc: "Portfolio architektoniczne i oferta nieruchomości.",
            img: "/wildhome.png",
            category: "Real Estate",
            zalety: ["Galeria 4K", "Wirtualne spacery", "System leadowy"]
        }
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
                        <h1 className="text-5xl md:text-8xl font-black mb-8 italic">Nasze Realizacje</h1>
                        <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                            Zamiast tysiąca słów, przedstawiamy ekosystemy, które generują realne zyski.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative glass rounded-[48px] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0221] via-transparent to-transparent opacity-80" />
                                </div>

                                <div className="p-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <span className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-3 block">{project.category}</span>
                                            <h3 className="text-3xl font-black mb-4">{project.title}</h3>
                                            <p className="text-white/40 leading-relaxed font-light mb-8">{project.desc}</p>
                                        </div>
                                        <ExternalLink size={24} className="text-white/20 group-hover:text-blue-500 transition-colors shrink-0" />
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        {project.zalety.map((zaleta) => (
                                            <div key={zaleta} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                                                <Check size={14} className="text-blue-500" />
                                                <span className="text-xs text-white/60 font-bold">{zaleta}</span>
                                            </div>
                                        ))}
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
