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
            {/* Zmieniamy bg-dark na konkretny odcień #050512 (bardzo głęboki granat/czerń) */}
            <body className="bg-[#0D0221] text-white selection:bg-[#7c3aed]/30 selection:text-white antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

