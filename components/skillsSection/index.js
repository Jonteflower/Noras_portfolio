import { useAnimationControls } from 'framer-motion';
import { React, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { SectionTitle } from '../reuseable';
import { animationItemsList } from './components/animationObjects';
import SkillsHexagon from './components/hexagonGrid';
import TextSection from './components/textComponent';

const OuterDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 100%;
  min-height:760px;
  height: fit-content;
  margin-bottom: 150px;
  gap: 50px;
  @media screen and (max-width:1200px) {
       //box-sizing: border-box;
  }
`;

const InnerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: auto;
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
    <OuterDiv ref={scrollRef}>
      <SectionTitle ref={secondRef}>My Skills</SectionTitle>
      <InnerContainer>
        <TextSection></TextSection>
        <AnimationContainer>
          <SkillsHexagon animationItems={animationItems} motionRef={ref} controls={controlsHexagon}></SkillsHexagon>

        </AnimationContainer>

      </InnerContainer>
    </OuterDiv>
  )
}

export default SkillsSection;