import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Menu, X, Cpu, Code, Zap } from 'lucide-react'
import { useState } from 'react'

export default function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Navbar Menu
    const navLinks = [
        { name: 'O nas', href: '/o-nas' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Cennik', href: '/cennik' },
        { name: 'Baza Wiedzy', href: '/baza-wiedzy' },
        { name: 'Blog', href: '/blog' },
        { name: 'Kontakt', href: '/kontakt' },
        { name: 'AI Agent', href: '/ai-agent' },
    ]

    // Footer Local Links
    const localLinks = [
        { name: 'Kraków', href: '/krakow' },
        { name: 'Nowy Sącz', href: '/nowy-sacz' },
        { name: 'Grybów', href: '/grybow' },
        { name: 'Rzeszów', href: '/rzeszow' },
        { name: 'Kielce', href: '/kielce' },
        { name: 'Warszawa', href: '/warszawa' },
    ]

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
            <Head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            
            <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="group flex items-center font-black text-2xl tracking-tighter text-gray-900">
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-lg bg-[#7C3AED] flex items-center justify-center text-white font-bold text-sm shadow-md">W</div>
                             Webspanner
                        </div>
                    </Link>

                    <div className="hidden lg:flex gap-6 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-gray-600 hover:text-[#7C3AED] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <button
                        className="lg:hidden text-gray-900 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:hidden fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-white overflow-y-auto pt-20 pb-20 shadow-2xl"
                    >
                        <button className="absolute top-6 right-6 text-gray-900 p-2" onClick={() => setIsMenuOpen(false)}>
                            <X size={32} />
                        </button>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-black text-gray-800 hover:text-[#7C3AED] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </header>

            <main className="flex-grow pt-20">
                {children}
            </main>

            <footer className="py-16 bg-white border-t border-gray-200 mt-20">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="block mb-6">
                            <div className="flex items-center gap-2 text-2xl font-black">
                                <div className="w-8 h-8 rounded-lg bg-[#7C3AED] flex items-center justify-center text-white font-bold text-sm shadow-sm">W</div>
                                Webspanner
                            </div>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                            Eksperckie wdrożenia systemów e-commerce, łączące architekturę headless z stabilnością środowisk sprzedażowych w oparciu o React, Next.js i WordPress.
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">Nawigacja</h4>
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-gray-500 text-sm font-medium hover:text-[#7C3AED] transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">Technologia Lokalnie</h4>
                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                            {localLinks.map((loc) => (
                                <li key={loc.name}>
                                    <Link href={loc.href} className="hover:text-[#7C3AED] font-medium transition-colors">
                                        • {loc.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="flex gap-4 mt-6">
                            <Zap className="text-gray-400" size={20} />
                            <Code className="text-gray-400" size={20} />
                            <Cpu className="text-gray-400" size={20} />
                        </div>
                    </div>
                </div>
                
                <div className="container mx-auto px-6 border-t border-gray-100 mt-12 pt-8 text-center text-gray-400 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="font-medium">© {new Date().getFullYear()} Webspanner.pl. Strony internetowe i E-commerce.</span>
                    <div className="flex gap-4 font-medium">
                        <Link href="/polityka-prywatnosci" className="hover:text-gray-600 transition-colors">Polityka Prywatności</Link>
                        <a href="mailto:kontakt@webspanner.pl" className="hover:text-gray-600 transition-colors">kontakt@webspanner.pl</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
