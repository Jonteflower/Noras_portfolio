import Head from 'next/head';
import '../styles/globals.scss'
import React, { useEffect } from 'react';
import { LanguageContextProvider } from "../stores/languageContext";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  /**
* inside _app.js function for remove the loader
*/
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.remove();
    }
  }, []);

  return (
    <LanguageContextProvider>
      <Head>
        <title>Jonathan Nairn Tallen</title>
        <meta name="description" content="We help event creators and fans of all sizes leverage NFT ticketing! Take advantage of blockchain security, perpetual resale royalties, and the NFT experience." />
        <link rel="icon" type="image/ico" sizes="32x32" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" type="image/png" href="logo192.png" />
        <meta name='Jonathan Nairn Tallen' content='Jonathans portfolio website'></meta>
      </Head>
      
        <div id="globalLoader">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
        </div>
        {getLayout(<Component {...pageProps} />)}
      


    </LanguageContextProvider>
  )
}
