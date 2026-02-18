export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        // 1. Sprawdzenie klucza
        if (!env.GEMINI_API_KEY) {
            return new Response(JSON.stringify({ error: "Brak klucza API w konfiguracji." }), { status: 500 });
        }

        // 2. Pobranie wiadomości
        const { message, history } = await request.json();
        if (!message) {
            return new Response(JSON.stringify({ error: "Wiadomość jest pusta." }), { status: 400 });
        }

        // 3. Budowanie historii rozmowy (format Gemini REST API)
        // Mapujemy prostą historię na format wymagany przez API Google
        const contents = [];
        if (history && Array.isArray(history)) {
            history.forEach(msg => {
                contents.push({
                    role: msg.role === 'user' ? 'user' : 'model',
                    parts: [{ text: msg.message || msg.text }]
                });
            });
        }
        // Dodajemy aktualną wiadomość
        contents.push({
            role: "user",
            parts: [{ text: message }]
        });

        // 4. Konfiguracja System Instruction (Instrukcja dla bota)
        const systemInstruction = {
            role: "user",
            parts: [{ text: "Jesteś ekspertem i wirtualnym doradcą agencji Webspanner. Twoim celem jest sprzedaż usług tworzenia stron WWW i sklepów internetowych. Styl: Profesjonalny, ale luźny i nowoczesny (Cyberpunk/Tech). Bądź zwięzły i pomocny." }]
        };
        // W REST API system instruction często dodaje się jako pierwszą wiadomość lub przez osobne pole w nowszych wersjach, 
        // dla pewności tutaj doklejamy ją na początek listy contents, jeśli API tego wymaga, 
        // ale w wersji v1beta najlepiej użyć parametru system_instruction w body (jeśli model obsługuje) 
        // lub po prostu wstrzyknąć w pierwszy prompt. Zrobimy hybrydę dla pewności:

        // Nadpisujemy contents, dodając instrukcję na początku jako user (najbezpieczniejsza metoda w REST)
        contents.unshift({
            role: "user",
            parts: [{ text: "SYSTEM INSTRUCTION: Jesteś ekspertem agencji Webspanner. Sprzedajesz strony WWW. Odpowiadaj krótko i konkretnie." }]
        });

        // 5. Bezpośrednie zapytanie do API Google (bez biblioteki)
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`;

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

        // 6. Obsługa błędów API Google
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Gemini API Error:", errorData);
            return new Response(JSON.stringify({ error: "Błąd API Google", details: errorData }), { status: 500 });
        }

        // 7. Parsowanie odpowiedzi
        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text;

        return new Response(JSON.stringify({ text }), {
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error("Worker Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
