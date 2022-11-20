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
    
    const tixyWebObject = {title: 'Tixy-NFT', text: 'Tixy was and still is one of the most user-friendly and fastest ways of deploying, buying and selling NFTs. By leveraging our own encrypted custodian wallets together with Stripe we managed to revolutionize the way NFT transactions were conducted.'}
    const tixyAppObject = {title: 'Tixy-NFT Flutter App', text:  `The Tixy app was built with Flutter right after the release of Tixy’s web app. Since most of the infrastructure behind Tixy was hosted on Google Cloud, implementing the same features on the app could be done swiftly. Due to Reacts Natives' close proximity to React.js seemed like the obvious choice for expanindg the Tixy ecosystem to mobile. However in the end scrapping the Native app and opting to dive into Flutter was a choice well made. `}
    const logisticsObject = {title: 'Tixy-Logistics', text: 'Tixy-Logistics is a built with mathmatical models and AI in order to optimize work flow and decision making in warehouses and logistical facilites. A Beta version is currently being tested in a > 30 thousand sqm facility outisde of Stockholm with promising results '}


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