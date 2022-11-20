import React, { useEffect, useRef } from 'react'
import ExperienceSection from './experienceSection'
import HeroSection from './heroSection'
import ProjectSection from './founderSection'
import SkillsSection from './skillsSection'
import ContactSection from './contactSection'
import styled from 'styled-components'


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
            <ContactSection />

        </>
    )
}

export default Home