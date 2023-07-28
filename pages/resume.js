import React from 'react';
import Layout from '../Layout/Layout';
import CoursesSection from '../components/coursesSection';

export default function Courses() {

    return (
        <CoursesSection/>
    );
}

Courses.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
