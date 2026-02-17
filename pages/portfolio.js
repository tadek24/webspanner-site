import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { ExternalLink, Search } from 'lucide-react'

export default function Portfolio() {
    const projects = [
        { title: 'Rapdach', category: 'E-commerce', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
        { title: 'Fundacja AI', category: 'Web App', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80' },
        { title: 'Sandey Brand', category: 'Branding', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80' },
        { title: 'Wildhome', category: 'E-commerce', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80' },
        { title: 'Tech Hub', category: 'SaaS', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' },
        { title: 'Green Energy', category: 'CMS', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80' },
    ]

    return (
        <Layout>
            <section className="py-24 bg-[#050512]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6">Nasze Realizacje</h1>
                        <p className="text-xl text-white/50 max-w-2xl mx-auto">
                            Zamiast tysiąca słów, przedstawiamy projekty, które zrewolucjonizowały biznes naszych klientów.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative glass rounded-[32px] overflow-hidden border border-white/5 hover:border-primary/50 transition-all cursor-pointer"
                            >
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050512] via-transparent to-transparent" />
                                </div>
                                <div className="p-8 relative">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-primary text-xs font-bold uppercase tracking-widest">{project.category}</span>
                                        <ExternalLink size={20} className="text-white/20 group-hover:text-primary transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold group-hover:text-white transition-colors">{project.title}</h3>
                                </div>
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center">
                                        <Search size={18} className="text-primary" />
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
