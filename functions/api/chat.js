export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        if (!env.GEMINI_API_KEY) {
            return new Response(JSON.stringify({ error: "Brak klucza API" }), { status: 500 });
        }

        const { message, history } = await request.json();

        // 1. Budowanie czystej historii (bez System Promptu w treści)
        const contents = [];

        if (history && Array.isArray(history)) {
            history.forEach(msg => {
                // Upewniamy się, że tekst istnieje i nie jest pusty
                const textContent = msg.message || msg.text || "";

                if (textContent.trim().length > 0) {
                    contents.push({
                        // Mapujemy role: 'me'/'user' -> 'user', reszta -> 'model'
                        role: (msg.role === 'user' || msg.role === 'me') ? 'user' : 'model',
                        parts: [{ text: textContent }]
                    });
                }
            });
        }

        // Dodajemy bieżącą wiadomość
        if (message && message.trim().length > 0) {
            contents.push({
                role: "user",
                parts: [{ text: message }]
            });
        } else {
            return new Response(JSON.stringify({ error: "Pusta wiadomość" }), { status: 400 });
        }

        // 2. Konfiguracja zapytania z osobnym polem system_instruction
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${env.GEMINI_API_KEY}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // Tu definiujemy tożsamość bota - to nie psuje historii rozmowy
                system_instruction: {
                    parts: [{ text: "Jesteś Tadeuszem, uśmiechniętym i sympatycznym ekspertem od stron WWW na WordPress. Używaj potocznego, bardzo ludzkiego języka. Zapomnij o stylu Cyberpunk. Zrób krótki wywiad z klientem o jego wymarzonej stronie (jakie kolory lubi, co robi jego firma). Zadawaj jedno proste pytanie na raz." }]
                },
                contents: contents,
                generationConfig: {
                    maxOutputTokens: 2048,
                    temperature: 0.7
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Gemini API Error:", errorData);
            return new Response(JSON.stringify({ error: "Błąd Google API", details: errorData }), { status: 500 });
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Błąd generowania odpowiedzi.";

        // --- ZAPIS DO SUPABASE (Opcjonalnie, nie blokuje czatu w razie błędu) ---
        if (env.SUPABASE_URL && env.SUPABASE_ANON_KEY) {
            try {
                await fetch(`${env.SUPABASE_URL}/rest/v1/chats`, {
                    method: 'POST',
                    headers: {
                        'apikey': env.SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${env.SUPABASE_ANON_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=minimal'
                    },
                    body: JSON.stringify({
                        user_message: message,
                        bot_response: text
                    })
                });
            } catch (dbError) {
                console.error("Błąd zapisu do bazy:", dbError);
            }
        }
        // ------------------------------------------------------------------------

        return new Response(JSON.stringify({ text }), {
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error("Server Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
