import Head from 'next/head';
import '../styles/globals.scss'
import { LanguageContextProvider } from "../stores/languageContext";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  
  return (
    <LanguageContextProvider>
      <Head>
        <title>Jonathan Nairn Tallen</title>
        <meta name="description" content="We help event creators and fans of all sizes leverage NFT ticketing! Take advantage of blockchain security, perpetual resale royalties, and the NFT experience." />
        <link rel="icon" type="image/ico" sizes="32x32" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" type="image/png" href="logo192.png" />
        <meta name='Jonathan Nairn Tallen' content='Jonathans portfolio website'></meta>
      </Head>
   
        {getLayout(<Component {...pageProps} />)}
      
    </LanguageContextProvider>
  )
}
