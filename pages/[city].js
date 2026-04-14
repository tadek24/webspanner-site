import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Zap, Target, Search } from 'lucide-react'
import Link from 'next/link'
import Head from 'next/head'

const CITY_DATA = {
    'krakow': {
        base: 'Kraków',
        locative: 'w Krakowie',
        genitive: 'z Krakowa',
        desc: 'Stolica Małopolski to rynek pełen innowacji i ogromnej konkurencji. W Krakowie nie wystarczy już mieć zwykłą stronę internetową na WordPressie. Aby wybić się na tak nasyconym rynku, Twój e-commerce musi ładować się w mniej niż sekundę i obsługiwać ruch oparty na geolokalizacji. Jako lokalny partner, rozumiemy specyfikę krakowskiego klienta B2B/B2C.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163953.58284524948!2d19.7891823908226!3d50.046943180425316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2sKrak%C3%B3w!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl'
    },
    'grybow': {
        base: 'Grybów',
        locative: 'w Grybowie',
        genitive: 'z Grybowa',
        desc: 'Mniejsze, ambitne miasto to doskonały start dla ogólnopolskiego e-commerce ukrytego z dala od drogich biurowców. Prowadząc biznes w Grybowie, masz ogromną szansę by zoptymalizować koszty prowadzenia działalności logistycznej przy jednoczesnym generowaniu sprzedaży na całą Polskę - ba, na cały świat. Zbuduj z nami centralę cyfrowego handlu w samym Grybowie.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20601.594770288826!2d20.9256942603816!3d49.62678619623838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c33215c8ce6bb%3A0xe67db5cfb1160ed9!2sGryb%C3%B3w!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl'
    },
    'nowy-sacz': {
        base: 'Nowy Sącz',
        locative: 'w Nowym Sączu',
        genitive: 'z Nowego Sącza',
        desc: 'Zagłębie milionerskich biznesów uczy, że na Sądecczyźnie wygrywa bezkompromisowa jakość. Oferujemy w Nowym Sączu najnowocześniejsze standardy budowania sklepów oraz platform do obiegu dokumentów. Projektujemy sklepy WooCommerce oraz rozwiązania Headless potrafiące współpracować z wiodącymi magazynami w regionie.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41188.752538183224!2d20.65582236173499!3d49.620021616421864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473debe81335b2e5%3A0x6bba5cdd2e1de74a!2sNowy%20S%C3%A3cz!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl'
    },
    'rzeszow': {
        base: 'Rzeszów',
        locative: 'w Rzeszowie',
        genitive: 'z Rzeszowa',
        desc: 'Stolica podkarpacia i stolica innowacji. Prowadząc firmę w Rzeszowie potrzebujesz niezawodnych technologii wspierających inteligentne wzrosty zysków ze sprzedaży. Obsługujemy firmy rzeszowskie integrując sprzedaż z szybkimi dostawcami i bramkami płatności.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82054.49658097193!2d21.921389868779606!3d50.02422535799797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfafdd1821815%3A0xf63eb07f0bb99249!2sRzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl'
    },
    'kielce': {
        base: 'Kielce',
        locative: 'w Kielcach',
        genitive: 'z Kielc',
        desc: 'Silny ośrodek wystawienniczy z ogromnym potencjałem e-commerce. Przedsiębiorcy z Kielc posiadający u nas obsługę technologiczną mogą liczyć na stabilność serwerową przez cały sezon handlowy. Od projektowania stron www po głębokie i zawiłe integracje z Allegro.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79860.03816674681!2d20.550186981881845!3d50.85233267597157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471827ed74a8fbe1%3A0xc3191d4e0eebcfdf!2sKielce!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl'
    }
}

export async function getStaticPaths() {
    const paths = Object.keys(CITY_DATA).map(cityCode => ({
        params: { city: cityCode }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    return {
        props: {
            cityCode: params.city,
            data: CITY_DATA[params.city]
        }
    }
}

export default function LokalnaOferta({ cityCode, data }) {
    return (
        <Layout>
            <Head>
                <title>Strony i sklepy internetowe {data.locative} - Webspanner</title>
                <meta name="description" content={`Profesjonalne tworzenie nowoczesnych stron internetowych i sklepów e-commerce dla firm ${data.genitive}. Odkryj innowacje z Webspanner.`} />
            </Head>

            {/* Hero SEO */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-blue-50 to-gray-50 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                <MapPin size={14} /> Odział / Zdalnie: {data.base}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-gray-900">
                            Profesjonalne Systemy E-commerce <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic pr-2">
                                {data.locative}
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12 font-light leading-relaxed">
                            Webspanner obsługuje i skaluje biznesy {data.genitive}. Jeśli szukasz ekspertów, którzy zamiast gotowych, wolnych motywów WordPress dostarczą produkt na lata - jesteś u celu.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/kontakt">
                                <button className="px-10 py-5 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-3 w-full sm:w-auto transition-all shadow-xl hover:shadow-2xl">
                                    Darmowa Wycena <ArrowRight size={20} />
                                </button>
                            </Link>
                            <Link href="/portfolio">
                                <button className="px-10 py-5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-2xl font-bold flex items-center justify-center w-full sm:w-auto transition-all">
                                    Zobacz Nasze Realizacje
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Local Context Content */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-12 rounded-[40px] border border-gray-100 shadow-sm"
                        >
                            <h2 className="text-3xl font-black mb-6 text-gray-900">Twój Sklep internetowy zarabia, gdy Ty odpoczywasz.</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                {data.desc}
                            </p>
                            <ul className="space-y-4">
                                {['Zoptymalizowane SEO pozyskujące lokalny ruch', 'Integracja Płatności (Przelewy24, PayU)', 'Automatyzacja procesów logistycznych (BaseLinker)', 'Piekielnie szybki czas ładowania (PageSpeed > 95)'].map((tick, i) => (
                                    <li key={i} className="flex gap-4 items-center font-medium text-gray-700">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">✓</div>
                                        {tick}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex gap-6 items-start">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                    <Search size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black mb-3 text-gray-900">Znajdą Cię jako lidera</h3>
                                    <p className="text-gray-600 leading-relaxed font-light">Implementuję standardy technicznego SEO po to, aby klienci szukający wykonawcy czy towaru w wyszukiwarce natrafiali na ustrukturyzowane informacje szybciej, niż u Twojej bezpośredniej konkurencji.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-6 items-start">
                                <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                                    <Zap size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black mb-3 text-gray-900">Bezawaryjna Technologia</h3>
                                    <p className="text-gray-600 leading-relaxed font-light">Skalowalne bazy danych oparte o Next.js lub sprawdzonego WordPressa na stabilnym hostingu to gwarancja, że podczas czarnopiątkowego szturmu, Twoje systemy nie przestaną odpowiednio obsługiwać zamówień.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-6 items-start">
                                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100">
                                    <Target size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black mb-3 text-gray-900">Sprzedaż Skoncentrowana na Celu</h3>
                                    <p className="text-gray-600 leading-relaxed font-light">Design wizytówek oraz sklepów jest "czysty" i skoncentrowany na lejku sprzedaży. Używam najnowszych wzorców UX aby wyeliminować przeszkadzacze i porzucone koszyki.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Localization Block */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">Otwórz się na cyfrowy rynek lokalny</h2>
                        <p className="text-lg text-gray-600">Skontaktuj się ze mną z dowolnego miejsca. Działam na poziomie ogólnopolskim z podpartym silnym wsparciem inżynieryjnym w wybranym obszarze.</p>
                    </div>
                    
                    <div className="rounded-[40px] overflow-hidden border border-gray-200 shadow-xl h-[400px] w-full">
                        <iframe 
                            src={data.mapUrl}
                            width="100%" 
                            height="100%" 
                            style={{border: 0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="bg-gray-100"
                        ></iframe>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
