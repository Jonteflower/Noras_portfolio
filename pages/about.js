import React from 'react';
import Layout from '../Layout/Layout';
import AboutSection from '../components/aboutSection';

export default function About() {

    return (
        <AboutSection/>
    );
}

About.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

