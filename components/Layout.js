import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Cpu, Code, Zap } from 'lucide-react'
import { useState } from 'react'

export default function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { name: 'O nas', href: '/o-nas' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Dema', href: '/dema' },
        { name: 'Cennik', href: '/cennik' },
        { name: 'Blog', href: '/blog' },
        { name: 'Baza Wiedzy', href: '/baza-wiedzy' },
        { name: 'AI Agent', href: '/ai-agent' },
    ]

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="group flex items-center font-black text-2xl tracking-tighter text-gray-900">
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">W</div>
                             Webspanner
                        </div>
                    </Link>

                    <div className="hidden lg:flex gap-6 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/kontakt"
                            className="px-6 py-2 rounded-xl bg-gray-900 hover:bg-black text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
                        >
                            Kontakt
                        </Link>
                    </div>

                    <button
                        className="lg:hidden text-gray-900"
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
                        className="lg:hidden fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-gray-50 overflow-y-auto pt-20 pb-20"
                    >
                        <button className="absolute top-6 right-6 text-gray-900" onClick={() => setIsMenuOpen(false)}>
                            <X size={32} />
                        </button>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xl font-medium text-gray-600 hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/kontakt"
                            className="px-10 py-4 rounded-xl bg-gray-900 text-white font-bold mt-4 shadow-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Kontakt
                        </Link>
                    </motion.div>
                )}
            </header>

            <main className="flex-grow pt-20">
                {children}
            </main>

            <footer className="py-12 bg-white border-t border-gray-200 mt-20">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="block mb-4">
                            <div className="flex items-center gap-2 text-2xl font-black">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">W</div>
                                Webspanner
                            </div>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Niezależny Ekspert Web Developmentu. Łączę szybkość sztucznej inteligencji z niezawodnością platform WordPress, Next.js i WooCommerce.
                        </p>
                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                             <h4 className="font-bold text-sm mb-2 text-gray-900">Lokalne Biura i Zasięg:</h4>
                             <p className="text-xs text-gray-500 leading-relaxed">
                                Webspanner dostarcza technologie e-commerce na terenie całej Polski. Nasze biura projektowe wspierają lokalnie przedsiębiorców w Małopolsce (Kraków, Nowy Sącz), na Podkarpaciu (Rzeszów) oraz w Świętokrzyskim (Kielce). Niezależnie od lokalizacji, Twoja firma zyska widoczność w całym kraju.
                             </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg text-gray-900">Nawigacja</h4>
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-gray-500 text-sm hover:text-primary transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg text-gray-900">Platforma</h4>
                        <p className="text-gray-500 text-sm">kontakt@webspanner.pl</p>
                        <Link href="/kontakt" className="text-primary font-bold text-sm hover:underline">Formularz Kontaktowy</Link>
                        <div className="flex gap-4 mt-4">
                            <Zap className="text-primary" size={20} />
                            <Code className="text-secondary" size={20} />
                            <Cpu className="text-accent" size={20} />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-6 border-t border-gray-100 mt-12 pt-8 text-center text-gray-400 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
                    <span>© {new Date().getFullYear()} Webspanner. Wszystkie prawa zastrzeżone.</span>
                    <div className="flex gap-4">
                        <Link href="/polityka-prywatnosci" className="hover:text-primary transition-colors">Polityka Prywatności</Link>
                        <Link href="/regulamin" className="hover:text-primary transition-colors">Regulamin Usług</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
