import React, { useRef } from 'react'
import HeroSection from './heroSection'
import SkillsSection from './skillsSection'
import dynamic from 'next/dynamic'
import { Suspense } from "react";


const DynamicExperienceSection = dynamic(() => import('./experienceSection'), {
    ssr: false,
    Suspense: true,

})

const DynamicProjectsSection = dynamic(() => import('./founderSection'), {
    ssr: false,
    Suspense: true,

})

const DynamicContactSection = dynamic(() => import('./contactSection'), {
    ssr: false,
    Suspense: true,

})


function Home() {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <HeroSection scrollToNext={handleClick} />
            <SkillsSection scrollRef={ref} />
            <DynamicProjectsSection />
            <DynamicExperienceSection />
            <DynamicContactSection />
        </>
    )
}

export default Home