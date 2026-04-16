import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { motion, useInView, animate } from 'framer-motion';
import { 
  Rocket, 
  Cpu, 
  Store, 
  Search, 
  ChevronDown, 
  ArrowRight,
  Code2,
  Clock,
  Wrench,
  UtensilsCrossed,
  CheckCircle2
} from 'lucide-react';

// Komponent animowanego licznika CountUp
function Counter({ from = 0, to, duration = 2, suffix = "" }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const node = nodeRef.current;
    if (!node) return;
    
    // Animacja wartości od 'from' do 'to'
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.round(value) + suffix;
      },
    });

    return () => controls.stop();
  }, [from, to, duration, suffix, inView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const seoFaqs = [
    {
      question: "Kompleksowe tworzenie stron internetowych Nowy Sącz i okolice",
      answer: "Rozumiem lokalny rynek - tworzenie stron internetowych Nowy Sącz to dla mnie budowanie wizerunku firm z regionu. Tworzę od podstaw zoptymalizowane witryny firmowe, które dbają o to, by wyróżnić Cię na tle konkurencji."
    },
    {
      question: "Nowoczesne sklepy WooCommerce Grybów",
      answer: "Jeśli planujesz wejść w e-commerce stacjonarnie, nowoczesne sklepy WooCommerce Grybów to sprawdzony kierunek. Wdrażam potężne platformy sprzedażowe, zintegrowane z logistyką i płatnościami online, dopracowane pod kątem optymalizacji konwersji."
    },
    {
      question: "Szybkie strony wizytówki Kraków",
      answer: "W dobie mobilnego internetu liczą się ułamki sekund. Oferuję ultraszybkie strony wizytówki Kraków, które błyskawicznie się ładują, zatrzymując uwagę klienta i zdobywając maksymalne noty (100/100) w testach PageSpeed Insights."
    },
    {
      question: "Pozycjonowanie i architektura przyjazna wyszukiwarkom",
      answer: "Zarówno prosta wizytówka, jak i headless e-commerce wymagają solidnej bazy SEO. Moje projekty mają zaszyte najnowsze standardy, które ułatwiają skuteczne pozycjonowanie w Google ngay od dnia premiery."
    }
  ];

  return (
    <Layout>
      {/* 1. NOWA SEKCJA HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-50 pt-20 pb-16">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-200/40 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/40 blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              Gotowy na Twój Sukces
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.05] text-gray-900">
              Twój Sklep Śpi. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
                Twoja Strona Sprzedaje.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Tworzę zoptymalizowane sklepy i strony internetowe, które zamieniają ruch w zyski. Połączenie 7 lat doświadczenia w IT i 6 lat w handlu online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/kontakt">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-2xl font-bold text-lg text-white transition-colors flex items-center justify-center w-full sm:w-auto shadow-xl shadow-purple-500/30 gap-2"
                >
                  Darmowa Konsultacja <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 rounded-2xl font-bold text-lg text-gray-800 transition-colors w-full sm:w-auto shadow-sm"
                >
                  Zobacz Moje Realizacje
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LICZBY, KTÓRE ROBIĄ RÓŻNICĘ */}
      <section className="py-20 relative bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-gray-100">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-5xl md:text-6xl font-black text-[#7C3AED] mb-2 tracking-tighter">
                <Counter from={0} to={7} duration={2} suffix="+" />
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">Lat doświadczenia w IT</div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-5xl md:text-6xl font-black text-[#7C3AED] mb-2 tracking-tighter">
                <Counter from={0} to={6} duration={2} suffix="+" />
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">Lat w branży E-commerce</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-5xl md:text-6xl font-black text-[#7C3AED] mb-2 tracking-tighter">
                <Counter from={0} to={100} duration={2.5} />
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">Punktów PageSpeed Insights</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-5xl md:text-6xl font-black text-[#7C3AED] mb-2 tracking-tighter">
                <Counter from={100} to={0} duration={2.5} />
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">Ukrytych kosztów agencji</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. DLACZEGO JA? */}
      <section className="py-32 relative bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-gray-900">Dlaczego Ja?</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">Przewaga freelancera nad agencją. Skuteczność, transparentność i technologia dowożąca realne zyski.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Box 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center mb-8">
                <Store className="text-[#7C3AED]" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">Praktyk, nie tylko programista</h3>
              <p className="text-gray-500 leading-relaxed">
                Znam bolączki e-commerce od podszewki. Wiem, jak odzyskać porzucony koszyk, zwiększyć współczynnik konwersji i bezproblemowo zintegrować sklep z BaseLinkerem czy szybkimi płatnościami.
              </p>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8">
                <Code2 className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">Technologia Next.js</h3>
              <p className="text-gray-500 leading-relaxed">
                Pożegnaj wolnego WordPressa tam, gdzie potrzebna jest ekstremalna prędkość. Buduję strony na technologiach używanych przez gigantów (React/Next.js), co gwarantuje natychmiastowe ładowanie i wynik 100/100 w Google.
              </p>
            </motion.div>

            {/* Box 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8">
                <Clock className="text-emerald-500" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">Bezpośredni kontakt</h3>
              <p className="text-gray-500 leading-relaxed">
                Pracujesz ze mną, nie z account managerem przekazującym informacje dalej. Oszczędzasz cenny czas i budżet, który w innej sytuacji w całości pochłonęłaby agencja kreatywna.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SEKCJA SEO */}
      <section className="py-32 relative bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gray-50 rounded-full">
                <Search className="text-[#7C3AED]" size={36} />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-gray-900">
              Kompleksowe Tworzenie Stron Internetowych – Małopolska i cała Polska
            </h2>
            <p className="text-lg text-gray-500 font-light">
              Dowiedz się więcej o procesie tworzenia skutecznych narzędzi sprzedaży. Odkryj sekrety dobrej optymalizacji.
            </p>
          </motion.div>

          <div className="space-y-4">
            {seoFaqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-gray-900 pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`text-[#7C3AED] transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GOTOWE ROZWIĄZANIA */}
      <section className="py-32 relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-gray-900" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">Gotowe Rozwiązania</h2>
              <p className="text-xl text-gray-400 font-light">
                Przyspiesz proces wdrożenia. Wybierz zoptymalizowane pod konwersję szablony premium i rozpocznij sprzedaż w mgnieniu oka.
              </p>
            </div>
            
            <Link href="/dema">
              <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-semibold text-white transition-all backdrop-blur-md whitespace-nowrap"
              >
                Zobacz wszystkie dema
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Demo 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-[32px] overflow-hidden bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-colors"
            >
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="w-24 h-24 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 z-10 transform group-hover:scale-110 transition-transform duration-500">
                  <Wrench className="text-orange-500" size={48} />
                </div>
                <div className="text-center z-10 gap-2 flex flex-col">
                  <span className="text-orange-400 font-bold uppercase tracking-widest text-sm">Nowość</span>
                  <h3 className="text-3xl font-black text-white">Warsztat Mechaniczny</h3>
                </div>
              </div>
              <div className="p-8 flex items-center justify-between bg-gray-800/80 backdrop-blur-md relative z-20">
                <div>
                  <p className="text-gray-400 mb-1 text-sm font-semibold uppercase tracking-wider">Cena wdrożenia</p>
                  <p className="text-3xl font-black text-white">od 2200 zł</p>
                </div>
                <Link href="/dema">
                  <button className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-500 flex items-center justify-center text-white transition-colors">
                    <ArrowRight size={24} />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Demo 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="group relative rounded-[32px] overflow-hidden bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-colors"
            >
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="w-24 h-24 rounded-full bg-yellow-500/20 flex items-center justify-center mb-6 z-10 transform group-hover:scale-110 transition-transform duration-500">
                  <UtensilsCrossed className="text-yellow-500" size={48} />
                </div>
                <div className="text-center z-10 gap-2 flex flex-col">
                  <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Bestseller</span>
                  <h3 className="text-3xl font-black text-white">Restauracja / Burger</h3>
                </div>
              </div>
              <div className="p-8 flex items-center justify-between bg-gray-800/80 backdrop-blur-md relative z-20">
                <div>
                  <p className="text-gray-400 mb-1 text-sm font-semibold uppercase tracking-wider">Cena wdrożenia</p>
                  <p className="text-3xl font-black text-white">od 1900 zł</p>
                </div>
                <Link href="/dema">
                  <button className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-500 flex items-center justify-center text-white transition-colors">
                    <ArrowRight size={24} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/10 blur-[50px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white/10 blur-[50px] pointer-events-none" />
            
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white relative z-10">
              Gotowy na zwiększenie sprzedaży?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-12 relative z-10 font-light">
              Napisz do mnie i umówmy się na bezpłatną wycenę Twojego projektu. Czas to pieniądz – w e-commerce w szczególności.
            </p>
            <div className="flex justify-center relative z-10">
              <Link href="/kontakt">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-white text-[#7C3AED] rounded-2xl font-bold text-xl transition-all shadow-xl hover:shadow-2xl flex items-center gap-3"
                >
                  <Store size={24} /> Rozpocznij Projekt
                </motion.button>
              </Link>
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-purple-200 relative z-10">
              <div className="flex items-center gap-2"><CheckCircle2 size={18}/> Darmowa wycena</div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-purple-300"></div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18}/> Brak ukrytych kosztów</div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-purple-300"></div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18}/> Gwarancja jakości kodu</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
