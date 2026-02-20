import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Cpu, Code, Zap } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { name: 'O nas', href: '/o-nas' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Cennik', href: '/cennik' },
        { name: 'Baza Wiedzy', href: '/baza-wiedzy' },
        { name: 'AI Agent', href: '/ai-agent' },
    ]

    return (
        <div className="min-h-screen flex flex-col bg-[#0D0221]">
            <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0D0221] border-b border-white/10">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="group">
                        <Image
                            src="/logo.png"
                            alt="WebSpanner Logo"
                            width={140}
                            height={40}
                            className="w-32 h-auto"
                        />
                    </Link>

                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/ai-agent"
                            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all"
                        >
                            Rozpocznij projekt
                        </Link>
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-[#0D0221]"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-white/70 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/ai-agent"
                            className="px-8 py-3 rounded-full bg-primary text-white"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Rozpocznij projekt
                        </Link>
                    </motion.div>
                )}
            </header>

            <main className="flex-grow pt-20">
                {children}
            </main>

            <footer className="py-12 glass mt-20">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <Link href="/" className="block mb-4">
                            <Image
                                src="/logo.png"
                                alt="WebSpanner Logo"
                                width={120}
                                height={35}
                                className="w-28 h-auto"
                            />
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Niezależny Ekspert Web Developmentu. Łączę szybkość sztucznej inteligencji z niezawodnością platform WordPress i WooCommerce.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg">Nawigacja</h4>
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-white/50 hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg">Kontakt</h4>
                        <p className="text-white/50">Modernizing your web experience.</p>
                        <div className="flex gap-4 mt-2">
                            <Zap className="text-primary" size={20} />
                            <Code className="text-secondary" size={20} />
                            <Cpu className="text-accent" size={20} />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-6 border-t border-white/10 mt-12 pt-8 text-center text-white/30 text-xs">
                    © {new Date().getFullYear()} Webspanner. Wszystkie prawa zastrzeżone.
                </div>
            </footer>
        </div>
    )
}
