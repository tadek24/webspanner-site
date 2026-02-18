export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        if (!env.GEMINI_API_KEY) {
            return new Response(JSON.stringify({ error: "Brak klucza API w konfiguracji." }), { status: 500 });
        }

        const { message, history } = await request.json();
        if (!message) {
            return new Response(JSON.stringify({ error: "Wiadomość jest pusta." }), { status: 400 });
        }

        const contents = [];
        // Dodanie System Instruction na początku historii (najbezpieczniejsza metoda dla REST API)
        contents.push({
            role: "user",
            parts: [{ text: "SYSTEM INSTRUCTION: Jesteś ekspertem agencji Webspanner. Twoim celem jest sprzedaż stron WWW. Odpowiadaj krótko, konkretnie i w stylu Cyberpunk/Tech." }]
        });

        // Mapowanie historii
        if (history && Array.isArray(history)) {
            history.forEach(msg => {
                contents.push({
                    role: msg.role === 'user' ? 'user' : 'model',
                    parts: [{ text: msg.message || msg.text }]
                });
            });
        }

        // Dodanie bieżącej wiadomości
        contents.push({
            role: "user",
            parts: [{ text: message }]
        });

        // ZMIANA: Używamy 'gemini-1.5-flash-latest'
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${env.GEMINI_API_KEY}`;

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
        // Zabezpieczenie przed pustą odpowiedzią
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Przepraszam, nie mogę teraz odpowiedzieć.";

        return new Response(JSON.stringify({ text }), {
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error("Worker Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
