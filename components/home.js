import React, { useRef } from 'react';
import HeroSection from './heroSection';
import SkillsSection from './skillsSection';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import ContactSection from './contactSection';


const DynamicMarketingSection = dynamic(() => import('./marketing'), {
    ssr: false,
    loading: () => <div>Loading Experience Section...</div>,
});

const DynamicProjectsSection = dynamic(() => import('./techSection'), {
    ssr: false,
    loading: () => <div>Loading Projects Section...</div>,
});

const DynamicContactSection = dynamic(() => import('./contactSection'), {
    ssr: false,
    loading: () => <div>Loading Contact Section...</div>,
});

function Home() {
    const ref = useRef(null);

    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const [skillsRef, skillsInView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const [marketingRef, marketingInView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const [projectsRef, projectsInView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <HeroSection scrollToNext={handleClick} scrollRef={heroRef} />
            <SkillsSection scrollRef={ref} secondRef={skillsRef} />
            {skillsInView && (
                <DynamicProjectsSection scrollRef={projectsRef} />
            )}
            { projectsInView&& (
                <DynamicMarketingSection scrollRef={marketingRef} />
            )}
            {marketingInView && <DynamicContactSection />}
        </>
    );
}

export default Home;
