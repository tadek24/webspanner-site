import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';
import AdminLayout from '../components/AdminLayout';
import {
    Trash2,
    ExternalLink,
    AlertCircle,
    Loader2,
    Lock,
    BarChart3,
    Briefcase,
    Tag
} from 'lucide-react';

// KONFIGURACJA DOSTĘPU - jedyny uprawniony adres
const ALLOWED_EMAILS = ['tadekszkola24@gmail.com'];

export default function AdminPage() {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [chats, setChats] = useState([]);
    const [actionLoading, setActionLoading] = useState(null);
    const router = useRouter();
    const currentTab = router.query.tab || 'dashboard';

    useEffect(() => {
        checkUser();
        // Zawsze pobieraj rozmowy dla Dashboardu lub zakładki Chats
        fetchChats();
    }, [currentTab]);

    async function checkUser() {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session || !session.user || !ALLOWED_EMAILS.includes(session.user.email.toLowerCase().trim())) {
            setLoading(false);
            if (session) {
                setSession(session);
            }
            return;
        }

        setSession(session);
        setLoading(false);
    }

    async function fetchChats() {
        const { data, error } = await supabase
            .from('chats')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error) setChats(data);
    }

    async function deleteChat(id) {
        if (!confirm('Czy na pewno chcesz usunąć tę rozmowę?')) return;

        setActionLoading(id);
        const { error } = await supabase.from('chats').delete().match({ id });

        if (!error) {
            setChats(chats.filter(chat => chat.id !== id));
        }
        setActionLoading(null);
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loader2 className="animate-spin text-blue-600" size={32} />
            </div>
        );
    }

    if (!session || !ALLOWED_EMAILS.includes(session.user.email)) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                        <Lock size={32} />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Brak dostępu</h1>
                    <p className="text-gray-500 mb-8">
                        Ten obszar jest zarezerwowany dla administratora. Zaloguj się na konto <strong>{ALLOWED_EMAILS[0]}</strong>, aby kontynuować.
                    </p>
                    <button
                        onClick={() => router.push('/')}
                        className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors"
                    >
                        Wróć do strony głównej
                    </button>
                </div>
            </div>
        );
    }

    return (
        <AdminLayout userEmail={session.user.email}>
            {currentTab === 'dashboard' && (
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="text-sm font-medium text-gray-500 mb-1">Wszystkie rozmowy</p>
                            <h3 className="text-3xl font-bold text-gray-900">{chats.length}</h3>
                        </div>
                    </div>

                    <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-2">Witaj, Tadeusz!</h2>
                            <p className="text-blue-100 max-w-md">
                                Twoje centrum dowodzenia Webspanner jest gotowe. Poniżej znajdziesz ostatnie interakcje z Twoim AI Agentem.
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 p-8 opacity-20">
                            <BarChart3 size={120} />
                        </div>
                    </div>

                    {/* Sekcja Rozmowy AI bezpośrednio w Dashboardzie */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                            <h3 className="font-bold text-gray-900">Ostatnie Rozmowy AI</h3>
                            <button onClick={() => router.push('/adminpage?tab=chats')} className="text-sm text-blue-600 font-bold hover:underline">Zobacz wszystkie</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Data</th>
                                        <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Użytkownik</th>
                                        <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Wiadomość</th>
                                        <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Odpowiedź</th>
                                        <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest w-20 text-center">Akcje</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {chats.slice(0, 10).map((chat) => (
                                        <tr key={chat.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                                                {new Date(chat.created_at).toLocaleString('pl-PL')}
                                            </td>
                                            <td className="p-4 text-sm text-gray-900 font-medium">Klient</td>
                                            <td className="p-4 text-sm text-gray-600 max-w-xs truncate">
                                                {chat.user_message}
                                            </td>
                                            <td className="p-4 text-sm text-gray-600 max-w-sm truncate">
                                                {chat.bot_response}
                                            </td>
                                            <td className="p-4 text-center">
                                                <button
                                                    onClick={() => deleteChat(chat.id)}
                                                    className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {currentTab === 'chats' && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Data</th>
                                    <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Klient</th>
                                    <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest">AI Tadeusz</th>
                                    <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest w-20">Akcje</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {chats.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="p-12 text-center text-gray-400 italic">Brak zapisanych rozmów.</td>
                                    </tr>
                                ) : (
                                    chats.map((chat) => (
                                        <tr key={chat.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                                                {new Date(chat.created_at).toLocaleString('pl-PL')}
                                            </td>
                                            <td className="p-4 text-sm text-gray-900 max-w-xs truncate">
                                                {chat.user_message}
                                            </td>
                                            <td className="p-4 text-sm text-gray-600 max-w-sm">
                                                <p className="line-clamp-2">{chat.bot_response}</p>
                                            </td>
                                            <td className="p-4">
                                                <button
                                                    onClick={() => deleteChat(chat.id)}
                                                    disabled={actionLoading === chat.id}
                                                    className="p-2 text-gray-400 hover:text-red-600 transition-colors disabled:opacity-50"
                                                >
                                                    {actionLoading === chat.id ? <Loader2 className="animate-spin" size={18} /> : <Trash2 size={18} />}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {currentTab === 'portfolio' && (
                <div className="space-y-6">
                    <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Zarządzanie Projektami</h3>
                            <p className="text-sm text-gray-500">Dodawaj, edytuj i usuwaj realizacje z sekcji Portfolio.</p>
                        </div>
                        <button className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
                            <span>Dodaj Projekt</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Przykładowe karty projektów (później pobierane z DB) */}
                        {['Sandey', 'Rapdach', 'Vellisse'].map((proj) => (
                            <div key={proj} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4 group">
                                <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-gray-900 mb-1">{proj}</h4>
                                    <p className="text-xs text-gray-500 line-clamp-2 mb-3">Opis projektu, który wyświetla się na stronie głównej w sekcji realizacje...</p>
                                    <div className="flex gap-2">
                                        <button className="text-xs font-bold text-blue-600 hover:text-blue-700">Edytuj</button>
                                        <button className="text-xs font-bold text-red-600 hover:text-red-700">Usuń</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6 flex gap-4">
                        <AlertCircle className="text-yellow-600 flex-shrink-0" size={24} />
                        <div>
                            <h4 className="font-bold text-yellow-800 text-sm mb-1">Uwaga: Tryb Podglądu</h4>
                            <p className="text-yellow-700/80 text-xs leading-relaxed">
                                Obecnie portfolio jest ładowane z plików statycznych. Po utworzeniu tabeli `content` w Supabase, zmiany będą zapisywane w bazie i widoczne natychmiast dla wszystkich użytkowników.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {currentTab === 'pricing' && (
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Pakiety i Ceny</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {['Starter', 'Professional', 'Enterprise'].map((tier) => (
                                <div key={tier} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                                    <h4 className="font-bold text-gray-900 mb-2">{tier}</h4>
                                    <div className="text-2xl font-black text-blue-600 mb-4">od 1900 PLN</div>
                                    <button className="w-full py-2 bg-white border border-gray-200 text-gray-900 rounded-xl text-xs font-bold hover:bg-gray-50 transition-all">
                                        Zmień Cenę
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                        <Tag className="text-gray-300 mb-4" size={48} />
                        <p className="text-gray-500 text-sm">Synchronizacja z cennikiem głównym włączona.</p>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
