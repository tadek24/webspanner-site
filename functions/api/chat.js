export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        if (!env.GEMINI_API_KEY) {
            return new Response(JSON.stringify({ error: "Brak klucza API" }), { status: 500 });
        }

        // Zamiast generować treść, pobieramy listę dostępnych modeli
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${env.GEMINI_API_KEY}`;

        // Pobranie listy modeli wymaga metody GET
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            const errorData = await response.json();
            return new Response(JSON.stringify({ error: "Błąd pobierania listy", details: errorData }), { status: 500 });
        }

        const data = await response.json();

        // Filtrujemy tylko modele, które potrafią generować treść (generateContent)
        let availableModels = "Brak dostępnych modeli do generowania treści.";

        if (data.models) {
            availableModels = data.models
                .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent"))
                .map(m => m.name) // np. "models/gemini-1.5-flash"
                .join("\n");
        }

        const text = "Oto lista modeli dostępnych dla Twojego klucza:\n\n" + availableModels;

        return new Response(JSON.stringify({ text }), {
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
