export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        // 1. Walidacja klucza
        if (!env.GEMINI_API_KEY) {
            return new Response(JSON.stringify({ error: "Brak klucza API w konfiguracji." }), { status: 500 });
        }

        // 2. Walidacja wiadomości
        const { message, history } = await request.json();
        if (!message) {
            return new Response(JSON.stringify({ error: "Wiadomość jest pusta." }), { status: 400 });
        }

        // 3. Budowanie historii (format Gemini REST)
        const contents = [];

        // System instruction (jako pierwsza wiadomość user - najbezpieczniejsza metoda)
        contents.push({
            role: "user",
            parts: [{ text: "SYSTEM: Jesteś ekspertem agencji Webspanner. Sprzedajesz strony WWW i automatyzacje AI. Odpowiadaj krótko, konkretnie i w stylu Cyberpunk/Tech." }]
        });

        // Dodanie historii rozmowy
        if (history && Array.isArray(history)) {
            history.forEach(msg => {
                contents.push({
                    role: msg.role === 'user' ? 'user' : 'model',
                    parts: [{ text: msg.message || msg.text }]
                });
            });
        }

        // Dodanie aktualnej wiadomości
        contents.push({
            role: "user",
            parts: [{ text: message }]
        });

        // 4. KLUCZOWA ZMIANA: Używamy aliasu 'gemini-flash-latest', który powinien wskazywać na stabilną wersję 1.5
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${env.GEMINI_API_KEY}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: contents,
                generationConfig: {
                    maxOutputTokens: 500,
                    temperature: 0.7
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Gemini API Error:", errorData);
            return new Response(JSON.stringify({ error: "Błąd API Google", details: errorData }), { status: 500 });
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "System zajęty, spróbuj ponownie.";

        return new Response(JSON.stringify({ text }), {
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error("Worker Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
