import { useAnimationControls } from 'framer-motion';
import dynamic from 'next/dynamic';
import { React, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { animationItemsList } from './components/animationObjects';
import SkillsHexagon from './components/hexagonGrid';
import TextSection from './components/textComponent';

const PyramidSkillsDynamic = dynamic(() => import('./components/pyramidGrid'), {
  ssr: false,
})

const OuterDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 100%;
  min-height:760px;
  height: fit-content;
  margin-bottom: 150px;
  @media screen and (max-width:1200px) {
       //box-sizing: border-box;
  }
`;

const InnerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
    max-width: 1200px;
   
    @media screen and (max-width:1100px) {
      flex-direction: column;
      justify-content: center;
      gap: 0px;
  } 
   
`
const AnimationContainer = styled.div`
  width: fit-content;
 
  @media screen and (max-width:1100px) {
      width: 100%;
      padding-top: 30px;
  } 
   
`


const Title = styled.h2`
  position: relative;
  font-size: 4.5rem;
  font-weight: 600;
  margin-top: 3rem;
  margin-bottom: 8rem;
  z-index: 9999;
  color: white;
  ::before{
    content: '';
    border-bottom: 18px solid #ff4d5a;
    width: 20rem;
    display: block;
    margin: 0 auto;
    position: relative;
    left: 2.5rem;
    top: 4.5rem;
    z-index: -1;
  }

  @media screen and (max-width:1100px) {
    margin-top: 3.5rem;
    margin-bottom: 5rem;
  } 

  @media screen and (max-width:700px) {
      font-size: 3.5rem;
      ::before{
    content: '';
    border-bottom: 18px solid #ff4d5a;
    width: 16rem;
    display: block;
    margin: 0 auto;
    position: relative;
    left:1.5rem;
    top: 3.8rem;
    z-index: -1;
  }
    }

    @media screen and (max-width:600px) {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      margin-top: 1rem;

      ::before{
    content: '';
    border-bottom: 14px solid #ff4d5a;
    width: 11rem;
    display: block;
    margin: 0 auto;
    position: relative;
    left:1.3rem;
    top: 2.85rem;
    z-index: -1;
  }
    }

`;

function SkillsSection({ scrollRef }) {
  const [ref, inView] = useInView({ threshold: 0 })
  const [showHexagon, setShowHexagon] = useState(true)
  const controlsPyramid = useAnimationControls()
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

  const handleClick = async event => {
    if (event.detail == 2) {
      if (showHexagon) {
        setShowHexagon(false)
        controlsHexagon.start("hidden");
        await delay(100)
        controlsPyramid.start("visible");
      } else {
        setShowHexagon(true)
        controlsPyramid.start("hidden");
        await delay(100)
        controlsHexagon.start("visible");
      }

    }
  }

  function delay(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, time);
    });
  }

  return (
    <OuterDiv ref={scrollRef}>
      <Title>Developer</Title>
      <InnerContainer>
        <TextSection></TextSection>
        <AnimationContainer>
          {
            showHexagon ?
              <SkillsHexagon clickHandler={handleClick} animationItems={animationItems} motionRef={ref} controls={controlsHexagon}></SkillsHexagon>
              :
              <PyramidSkillsDynamic clickHandler={handleClick} animationItems={animationItems} motionRef={ref} controls={controlsPyramid}></PyramidSkillsDynamic>
          }
        </AnimationContainer>

      </InnerContainer>
    </OuterDiv>
  )
}

export default SkillsSection;