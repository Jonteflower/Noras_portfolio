import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import ExperienceSection from './experienceSection'
import HeroSection from './heroSection'
import ProjectSection from './projectSection'
import SkillsSection from './skillsSection'


function Home() {
    const ref = useRef(null);
    

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <HeroSection scrollToNext={handleClick} />
            <SkillsSection scrollRef={ref} />
            <ProjectSection />
            <ExperienceSection />

        </>
    )
}

export default Home