import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    BarChart3,
    MessageSquare,
    Briefcase,
    Tag,
    Settings,
    LogOut,
    ChevronRight
} from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function AdminLayout({ children, userEmail }) {
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };

    const navItems = [
        { name: 'Dashboard', icon: BarChart3, path: '/adminpage?tab=dashboard' },
        { name: 'Rozmowy AI', icon: MessageSquare, path: '/adminpage?tab=chats' },
        { name: 'Portfolio', icon: Briefcase, path: '/adminpage?tab=portfolio' },
        { name: 'Cennik', icon: Tag, path: '/adminpage?tab=pricing' },
    ];

    const currentTab = router.query.tab || 'dashboard';

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">W</div>
                        <span className="font-bold text-gray-900 border-gray-900 text-lg">AdminPanel</span>
                    </div>
                    <p className="text-xs text-gray-400 truncate">{userEmail}</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`flex items-center justify-between p-3 rounded-xl transition-all ${currentTab === item.path.split('=')[1]
                                    ? 'bg-blue-50 text-blue-600 font-semibold'
                                    : 'text-gray-500 hover:bg-gray-100'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon size={18} />
                                <span className="text-sm">{item.name}</span>
                            </div>
                            {currentTab === item.path.split('=')[1] && <ChevronRight size={14} />}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                    >
                        <LogOut size={18} />
                        <span className="text-sm font-medium">Wyloguj</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="bg-white border-b border-gray-200 py-4 px-8 sticky top-0 z-10">
                    <h1 className="text-xl font-bold text-gray-900 capitalize">
                        {navItems.find(item => item.path.includes(currentTab))?.name || 'Dashboard'}
                    </h1>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
