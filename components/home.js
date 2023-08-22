import React, { useRef, useState } from 'react';
import HeroSection from './heroSection';
import AboutSection from './aboutSection';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import NavMenu from '../Layout/Header/NavBar';

const DynamicMarketingSection = dynamic(() => import('./marketing'), {
    ssr: false,
    loading: () => <div>Loading Experience Section...</div>,
});

const DynamicTechSection = dynamic(() => import('./techSection'), {
    ssr: false,
    loading: () => <div>Loading Tech Section...</div>,
});

const DynamicContactSection = dynamic(() => import('./contactSection'), {
    ssr: false,
    loading: () => <div>Loading Contact Section...</div>,
});

function delay(delay) {
    return new Promise(res => setTimeout(res, delay));
}

function Home() {
    const contactScrollRef = useRef(null)
    const marketingScrollRef = useRef(null)
    const aboutScrollRef = useRef(null)
    const techScrollRef = useRef(null);
    const [scrollPressed, setScrollPressed] = useState(false)

    const [inViewAboutRef, aboutInView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const [inViewMarketingRef, marketingInView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const [inViewTechRef, techInView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const scrollToRef = async (ref, offset = 0) => {
        setScrollPressed(true);
        await delay(100);
    
        if (ref.current) {
            let topPosition = ref.current.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    };

    const scrollToAbout = () => scrollToRef(aboutScrollRef, 50); // Adjust offset as needed
    const scrollToTech = () => scrollToRef(techScrollRef, -40); // Adjust offset as needed
    const scrollToMarketing = () => scrollToRef(marketingScrollRef, -40); // Adjust offset as needed
    const scrollToContact = () => scrollToRef(contactScrollRef, -10); // Adjust offset as needed

    console.log(aboutInView)
    return (
        <>
            <NavMenu
                aboutScroll={scrollToAbout}
                techScroll={scrollToTech}
                marketingScroll={scrollToMarketing}
                contactScroll={scrollToContact}
            />
            <HeroSection scrollToNext={scrollToAbout} /> {/* scrollToNext should scroll to About Section */}
            <AboutSection scrollRef={aboutScrollRef} inViewRef={inViewAboutRef} />
            {(aboutInView || scrollPressed) && (
                <DynamicTechSection scrollRef={techScrollRef} inViewRef={inViewTechRef} />
            )}
            {(techInView|| scrollPressed) && (
                <DynamicMarketingSection scrollRef={marketingScrollRef} inViewRef={inViewMarketingRef} />
            )}
            {(marketingInView || scrollPressed || scrollPressed) && (
                <DynamicContactSection scrollRef={contactScrollRef} inViewRef={contactScrollRef} />
            )}
        </>
    ); 
}

export default Home;
