import Head from "next/head";
import React, { useEffect } from 'react';
import '../styles/globals.scss';
import DiamondLoader from "../components/utils/diamondLoader";


export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  function stopLoading() {
    const loader = document.getElementById('globalLoader');
    if (loader) {
      // Add a delay to ensure the DiamondLoader completes one animation cycle
      setTimeout(() => {
        loader.style.display = 'none';
      }, 1650);  // DiamondLoader animation duration is 2 seconds
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      stopLoading();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Nora Björk</title>
        <meta name="description" content="Swedish full stack developer and startup founder" />
        <link rel="icon" type="image/ico" sizes="32x32" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" type="image/png" href="logo192.png" />
        <meta name='Nora Björk' content='Nora Björks website'></meta>
        <meta name="theme-color" content="#11041D" ></meta>
      </Head>
      <div id='globalLoader'>
        <DiamondLoader />
      </div>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
