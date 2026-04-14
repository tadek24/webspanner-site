export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ error: "Brak klucza API" });
        }

        const { message, history } = req.body;
        const contents = [];

        if (history && Array.isArray(history)) {
            history.forEach(msg => {
                const textContent = msg.message || msg.text || "";
                if (textContent.trim().length > 0) {
                    contents.push({
                        role: (msg.role === 'user' || msg.role === 'me') ? 'user' : 'model',
                        parts: [{ text: textContent }]
                    });
                }
            });
        }

        if (message && message.trim().length > 0) {
            contents.push({
                role: "user",
                parts: [{ text: message }]
            });
        } else {
            return res.status(400).json({ error: "Pusta wiadomość" });
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
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
            return res.status(500).json({ error: "Błąd Google API", details: errorData });
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Błąd generowania odpowiedzi.";

        // WYMÓG: await blokujący zakończenie skryptu, aby zapewnić zapis przed destrukcją w Vercel Serverless Function
        if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
            try {
                await fetch(`${process.env.SUPABASE_URL}/rest/v1/chats`, {
                    method: 'POST',
                    headers: {
                        'apikey': process.env.SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=minimal'
                    },
                    body: JSON.stringify({
                        user_message: message,
                        bot_response: text
                    })
                });
            } catch (dbError) {
                console.error("Błąd zapisu do bazy danych:", dbError);
            }
        }

        return res.status(200).json({ text });

    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({ error: error.message });
    }
}
