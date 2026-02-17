import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="pl">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="bg-dark text-white selection:bg-primary selection:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
