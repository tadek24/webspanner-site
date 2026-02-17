import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { message, history } = req.body;

    if (!message) {
        return res.status(400).json({ message: 'Message is required' });
    }

    try {
        let model;
        const systemInstruction = "Jesteś ekspertem i wirtualnym doradcą agencji Webspanner. Twoim celem jest sprzedaż usług tworzenia stron WWW i sklepów internetowych. Styl: Profesjonalny, ale luźny i nowoczesny (Cyberpunk/Tech). Wiedza: Specjalizujemy się w łączeniu WordPress/WooCommerce z automatyzacją AI. Zadanie: Zbadaj potrzeby klienta, a następnie zaproponuj rozwiązanie. Nie pisz długich bloków tekstu – bądź konwersacyjny.";

        try {
            // Try Gemini 2.0 Flash first
            model = genAI.getGenerativeModel({
                model: 'gemini-2.0-flash',
                systemInstruction: systemInstruction
            });
            // Test if model is accessible (basic check)
            await model.getProperties().catch(() => { throw new Error('2.0 not available') });
        } catch (e) {
            // Fallback to Gemini 1.5 Flash
            model = genAI.getGenerativeModel({
                model: 'gemini-1.5-flash',
                systemInstruction: systemInstruction
            });
        }

        const chat = model.startChat({
            history: history || [],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        res.status(200).json({ text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
