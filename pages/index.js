import React from 'react';
import Layout from '../Layout/Layout';
import HomePage from '../components/home';

export default function Home() {

  return (
    <>
    <HomePage/>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

