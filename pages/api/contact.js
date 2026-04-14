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
        // Konfiguracja SMTP
        // W razie problemów testowych wstaw swój pełny testowy email w user i poprawne hasło
        const transporter = nodemailer.createTransport({
            host: 's143.cyber-folks.pl',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER || 'kontakt@webspanner.pl',
                pass: process.env.SMTP_PASS || 'athvgK',
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER || 'kontakt@webspanner.pl',
            to: process.env.SMTP_USER || 'kontakt@webspanner.pl', // Wysyłasz do siebie
            replyTo: email,
            subject: `Nowa wiadomość ze strony: ${subject || 'Brak tematu'}`,
            text: `Wiadomość od: ${name} (${email})\n\nTreść:\n${message}`,
            html: `<div style="font-family: sans-serif; padding: 20px;">
                    <h2>Nowa wiadomość ze strony</h2>
                    <p><strong>Imię i nazwisko:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Temat:</strong> ${subject}</p>
                    <hr/>
                    <p><strong>Treść:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                   </div>`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Wiadomość wysłana pomyślnie!' });
    } catch (error) {
        console.error('SMTP Error:', error);
        res.status(500).json({ message: 'Wystąpił błąd podczas wysyłania wiadomości.', error: error.message });
    }
}
