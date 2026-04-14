import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Wypełnij wymagane pola.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 's143.cyber-folks.pl',
            port: 465,
            secure: true,
            auth: {
                user: 'kontakt@webspanner.pl',
                pass: process.env.SMTP_PASSWORD, // Hasło ustawione w Vercel Environment Variables
            },
        });

        const mailOptions = {
            from: 'kontakt@webspanner.pl', // SMTP blokuje zewnętrzne wysyłki od obcych nadawców, więc wysyłamy ze swojej domeny
            to: 'kontakt@webspanner.pl',
            replyTo: email, // Dzięki temu klikając "odpowiedz" w Outlooku napiszesz do klienta, a nie do siebie
            subject: `[Formularz webspanner.pl]: ${subject || 'Nowe zapytanie'}`,
            text: `Od: ${name} (${email})\n\nTreść:\n${message}`,
            html: `<div style="font-family: sans-serif; padding: 20px;">
                    <h2 style="color: #7C3AED;">Nowa wiadomość z formularza kontaktowego</h2>
                    <p><strong>Imię i nazwisko:</strong> ${name}</p>
                    <p><strong>Email klienta:</strong> ${email}</p>
                    <p><strong>Temat:</strong> ${subject}</p>
                    <hr/>
                    <p><strong>Treść:</strong></p>
                    <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-left: 4px solid #7C3AED;">${message}</p>
                   </div>`
        };

        // Z racji uruchamiania w środowisku Serverless Vercel, await blokuje funkcję przed jej zwinięciem a Promise potwierdza wykonanie.
        await transporter.sendMail(mailOptions);
        
        return res.status(200).json({ message: 'Wiadomość wysłana pomyślnie!' });
    } catch (error) {
        console.error('Błąd wysyłania SMTP:', error);
        return res.status(500).json({ message: 'Błąd połączenia z serwerem SMTP', error: error.message });
    }
}
