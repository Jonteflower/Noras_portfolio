import { useAnimationControls } from 'framer-motion';
import { React, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { animationItemsList } from './components/animationObjects';
import SkillsHexagon from './components/hexagonGrid';
import TextSection from './components/textComponent';
import { OuterSection } from '../reuseable';
import { NumberedHeader } from '../reuseable';

const InnerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    //height:880px;
    height: max-content;
    width: 100%;
    max-width: 1400px;
   
    @media screen and (max-width:1100px) {
      flex-direction: column;
      justify-content: center;
      gap: 0px;
  } 
   
`
const AnimationContainer = styled.div`
  width: 65%;
 
  @media screen and (max-width:1100px) {
      width: 100%;
      padding-top: 30px;
  } 
   
`

function SkillsSection({ scrollRef, secondRef }) {
  const [ref, inView] = useInView({ threshold: 0 })
  const controlsHexagon = useAnimationControls()
  const animationItems = shuffleArray(animationItemsList)

  useEffect(() => {
    if (typeof window !== "undefined") {
      let width = window.innerWidth;
      if (inView || width < 600) {
        controlsHexagon.start("visible");
      }
    }

  }, [inView]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  return (
    <OuterSection ref={scrollRef}>
      <NumberedHeader ref={secondRef} number={1}>About me</NumberedHeader>
      <InnerContainer>
        <TextSection></TextSection>
        <AnimationContainer>
          <SkillsHexagon animationItems={animationItems} motionRef={ref} controls={controlsHexagon}></SkillsHexagon>
        </AnimationContainer>
      </InnerContainer>
    </OuterSection>
  )
}

export default SkillsSection;