import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Webspanner | Przyszłość Web Developmentu: AI-Driven, WordPress-Powered</title>
                <meta name="description" content="Nowoczesna agencja interaktywna łącząca szybkość AI z elastycznością WordPress i WooCommerce." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
