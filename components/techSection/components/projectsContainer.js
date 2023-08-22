import React from 'react'
import styled from 'styled-components'
import ImageSlider from './imageSlider'
import TextSection from './textSection'
import { useState } from 'react'
import { useEffect } from 'react'

const OuterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: fit-content;
    gap: 40px;
    width: 100%;
`

function SkillsContainer() {
    const [index, setIndex] = useState(0)
    const [textObject, setTextObject] = useState({})

    const tixyWebObject = {
        title: 'Tixy',
        text: 'Tixy was part of the prestigious STING accelerator program, and I was the head of content strategy, design, and was heavily involved in the product development.',
        link: 'https://www.tixynft.com/'
      };
      
      const tixyAppObject = {
        title: 'Tixy Flutter App',
        text: "I collaborated with Tixy's CTO to design and build the Flutter app. Where i had to leverage Figma for the mockups and work within the Material design system for the built in components."
      };
      
      const logisticsObject = {
        title: 'AlgoFlow',
        text: "I collaborated with the Logtech startup AlgoFlow, where I designed and implemented parts of the front-end and UX for the platform.",
        link: 'https://www.tixylogistics.com'
      };

    
    useEffect(() => {
        if (index == 0) {
            setTextObject(tixyWebObject)
        } else if (index == 1) {
            setTextObject(logisticsObject)
        } else if (index == 2) {
            setTextObject(tixyAppObject)
        }

    }, [index])


    return (
        <OuterContainer>
            <ImageSlider setIndex={setIndex}></ImageSlider>
            <TextSection textObject={textObject} ></TextSection>
        </OuterContainer>
    )
}

export default SkillsContainer