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
    
    const tixyWebObject = {title: 'Tixy-NFT', text: 'Text related to Tixy'}
    const tixyAppObject = {title: 'Tixy-NFT Flutter App', text:  `The Tixy app was built with Flutter right after the release of Tixy’s web app. Since most of the infrastructure behind Tixy was hosted on Google Cloud, implementing the same features on the app could be done swiftly. Due to Reacts Natives' close proximity to React.js seemed like the obvious choice for expanindg the Tixy ecosystem to mobile. However in the end scrapping the NAtive app and opting to dive into Flutter was a choice well made. `}
    const logisticsObject = {title: 'Lager Algo', text: 'Text related to lagerAlgo'}


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