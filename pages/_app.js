import '../styles/globals.css'
import Seo from '../components/Seo'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
    return (
        <div className="font-sans">
            <Seo />

            {/* Google Tag Manager - Dodać po otwarciu body znacznik noscript w _document.js */}
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-WKGWHNML');
                    `,
                }}
            />

            {/* Google Analytics 4 */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-FMQEZ4KV3H`}
            />
            <Script
                id="ga4-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-FMQEZ4KV3H', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />

            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
