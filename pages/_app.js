import '../styles/globals.css';
import Seo from '../components/Seo';
import Analytics from '../components/Analytics';
export default function MyApp({ Component, pageProps }) { return <div className="font-sans"><Seo/><Component {...pageProps}/><Analytics/></div>; }
