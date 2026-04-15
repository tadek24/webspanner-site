import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="pl">
            <Head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/favicon.svg" />
            </Head>
            <body className="bg-gray-50 text-gray-900 selection:bg-primary selection:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
