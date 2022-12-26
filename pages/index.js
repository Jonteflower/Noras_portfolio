import React from 'react';
import Layout from '../Layout/Layout';
import HomePage from '../components/home';
import { Html } from 'next/document';
export default function Home() {

  return (
    <Html lang="en">
      <HomePage />
    </Html>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

