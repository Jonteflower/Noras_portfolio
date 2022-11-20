import { useAnimationControls } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { animationItemsList } from './animationObjects'
import PyramidSkills from './pyramidGrid'
import TextSection from './textComponent'
import SkillsHexagon from './hexagonGrid'


const OuterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
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


function SkillsContainer() {
    const [ref, inView] = useInView({ threshold: 0})
    const [showHexagon, setShowHexagon] = useState(true)
    const controlsPyramid = useAnimationControls()
    const controlsHexagon = useAnimationControls()
    const animationItems = shuffleArray(animationItemsList)

    useEffect(() => {
        if (inView) {
            controlsHexagon.start("visible");
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
        <OuterContainer>
            <TextSection></TextSection>
            <AnimationContainer>
                {
                    showHexagon ?
                        <SkillsHexagon clickHandler={handleClick} animationItems={animationItems} motionRef={ref} controls={controlsHexagon}></SkillsHexagon>
                        :
                        <PyramidSkills clickHandler={handleClick} animationItems={animationItems} motionRef={ref} controls={controlsPyramid}></PyramidSkills>
                }
            </AnimationContainer>

        </OuterContainer>

    )
}

export default SkillsContainer