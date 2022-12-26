import { Head, Html } from 'next/document';
import React, { useEffect } from 'react';
import { LanguageContextProvider } from "../stores/languageContext";
import '../styles/globals.scss';

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
    <Html lang="en">
      <LanguageContextProvider>
        <Head>
          <title>Jonathan Nairn Tallen</title>
          <meta name="description" content="Swedish full stack developer and startup founder" />
          <link rel="icon" type="image/ico" sizes="32x32" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" type="image/png" href="logo192.png" />
          <meta name='Jonathan Nairn Tallen' content='Jonathans portfolio website'></meta>
        </Head>

        <div id="globalLoader">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" alt="page loading gif of a spinning progress wheel" />
        </div>
        {getLayout(<Component {...pageProps} />)}



      </LanguageContextProvider>
    </Html>
  )
}
