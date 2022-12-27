import React, { useRef } from 'react'
import HeroSection from './heroSection'
import SkillsSection from './skillsSection'
import dynamic from 'next/dynamic'

const DynamicExperienceSection = dynamic(() => import('./experienceSection'), {
    ssr: false,
})

const DynamicProjectsSection = dynamic(() => import('./founderSection'), {
    ssr: false,
})

const DynamicContactSection = dynamic(() => import('./contactSection'), {
    ssr: false,
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