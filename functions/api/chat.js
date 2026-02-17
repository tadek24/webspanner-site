import { GoogleGenerativeAI } from '@google/generative-ai';

export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const { message, history } = await request.json();

        if (!message) {
            return new Response(JSON.stringify({ message: 'Message is required' }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
        const systemInstruction = "Jesteś ekspertem i wirtualnym doradcą agencji Webspanner. Twoim celem jest sprzedaż usług tworzenia stron WWW i sklepów internetowych. Styl: Profesjonalny, ale luźny i nowoczesny (Cyberpunk/Tech). Wiedza: Specjalizujemy się w łączeniu WordPress/WooCommerce z automatyzacją AI. Zadanie: Zbadaj potrzeby klienta, a następnie zaproponuj rozwiązanie. Nie pisz długich bloków tekstu – bądź konwersacyjny.";

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            systemInstruction: systemInstruction
        });

        const chat = model.startChat({
            history: history || [],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        return new Response(JSON.stringify({ text: text }), {
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error('Cloudflare Function Error:', error);
        return new Response(JSON.stringify({ message: 'Internal server error', error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
