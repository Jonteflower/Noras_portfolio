import React, { useRef } from 'react'
import HeroSection from './heroSection'
import SkillsSection from './skillsSection'
import ExperienceSection from './experienceSection';
import ProjectSection from './founderSection';
import ContactSection from './contactSection';


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