import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Check, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
    const projects = [
        {
            title: "Sandey - Beauty & Spa Booking",
            desc: "Projekt to przykład tego, jak nowoczesny design WordPress może budować nastrój luksusu i spokoju. Platforma została oparta na koncepcji \"Lifestyle UX\". Wykorzystaliśmy wysokiej jakości zdjęcia w układzie full-screen, które w połączeniu z subtelnymi animacjami reveal, tworzą spójną opowieść o komforcie życia na zewnątrz.",
            img: "/sandey.png",
            category: "Health & Beauty",
            zalety: ["Lifestyle UX", "Full-screen Design", "Mobile-First"],
            url: "https://sandey.pl"
        },
        {
            title: "Sklep Rapdach - E-commerce",
            desc: "Sklep to technologiczne wyzwanie, któremu sprostaliśmy dzięki głębokiej optymalizacji WooCommerce. System obsługuje tysiące wariantów produktów, zachowując błyskawiczną szybkość ładowania. Wdrożyliśmy zaawansowane mechanizmy filtrowania i zintegrowaliśmy całość z systemami płatności i logistyki.",
            img: "/sklep-rapdach.png",
            category: "Industrial E-commerce",
            zalety: ["Optymalizacja WooCommerce", "1000+ Wariantów", "Integracje Logistyczne"],
            url: "https://sklep.rapdach.com"
        },
        {
            title: "Rapdach - Strona Korporacyjna",
            desc: "Projekt to manifestacja luksusu w branży przemysłowej. Strona lidera balustrad zaprojektowana w minimalistycznym stylu, podkreślającym surową elegancję stali i szkła. Inżynieryjne podejście do kodu zaowocowało rekordowymi wynikami w Core Web Vitals, co przekłada się na pozycjonowanie B2B.",
            img: "/rapdach.png",
            category: "Corporate B2B",
            zalety: ["Core Web Vitals", "Minimalizm", "SEO B2B"],
            url: "https://rapdach.com"
        },
        {
            title: "WildHome - Sklep Zoologiczny",
            desc: "Potężna maszyna sprzedażowa operująca na ogromnym asortymencie. Skoncentrowaliśmy się na optymalizacji konwersji poprzez mechanizmy up-sellingu i cross-sellingu wbudowanych w karty produktów. System połączono z platformami opinii i systemem lojalnościowym.",
            img: "/wildhome.png",
            category: "High-Volume Retail",
            zalety: ["Conversion Rate Optimization", "Cross-selling", "System Lojalnościowy"],
            url: "https://wildhome.pl"
        },
        {
            title: "Vellisse - Premium E-commerce",
            desc: "Sklep e-commerce klasy premium z bielizną erotyczną. Projekt skoncentrowany na estetyce, optymalizacji ścieżki zakupowej oraz pełnej responsywności. Dopracowana typografia i galerie produktowe tworzą ekskluzywne doświadczenie zakupowe na każdym urządzeniu.",
            img: "/vellisse.png",
            category: "Premium E-commerce",
            zalety: ["Estetyka Premium", "Optymalizacja Konwersji", "Pełna Responsywność"],
            url: "https://vellisse.pl"
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
                        <h1 className="text-5xl md:text-8xl font-black mb-8 italic">Prawdziwe Realizacje</h1>
                        <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                            Projekty, które zmieniły biznesy moich klientów. Kod, design i strategia w jednym.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-24">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="group lg:flex items-center gap-16"
                            >
                                <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
                                    <div className="aspect-video relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                                        <Image
                                            src={project.img}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>

                                <div className="lg:w-1/2">
                                    <span className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-4 block">{project.category}</span>
                                    <h3 className="text-4xl font-black mb-6 leading-tight">{project.title}</h3>
                                    <p className="text-white/60 leading-relaxed font-light mb-8 text-lg">{project.desc}</p>

                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {project.zalety.map((zaleta) => (
                                            <span key={zaleta} className="text-xs font-bold px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70">
                                                {zaleta}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105"
                                    >
                                        <ExternalLink size={16} />
                                        Zobacz projekt
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Founder CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-40 text-center relative max-w-4xl mx-auto"
                    >
                        <div className="w-32 h-32 mx-auto relative mb-8">
                            <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-400 relative z-10 bg-black">
                                {/* Placeholder for Founder Photo */}
                                <div className="w-full h-full bg-gradient-to-br from-purple-900 to-black" />
                            </div>
                        </div>

                        <p className="text-cyan-400 font-black tracking-widest text-xs uppercase mb-6">FOUNDER & CEO</p>

                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Twój projekt może być <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">kolejnym sukcesem.</span>
                        </h2>

                        <p className="text-xl text-white/50 mb-10 font-light max-w-2xl mx-auto">
                            Porozmawiajmy o konkretach. Zadzwoń bezpośrednio i ustalmy strategię dla Twojego biznesu.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <a href="tel:+48727469410" className="text-3xl md:text-4xl font-black text-white hover:text-blue-400 transition-colors">
                                +48 727 469 410
                            </a>
                            <a href="/kontakt" className="px-12 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold transition-all hover:shadow-[0_0_40px_rgba(147,51,234,0.5)]">
                                DARMOWA KONSULTACJA
                            </a>
                        </div>
                    </motion.div>

                </div>
            </section>
        </Layout>
    )
}
