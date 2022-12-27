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
    
    const tixyWebObject = {title: 'Tixy-NFT', text: 'Tixy-NFT is one of the fastest and most user-friendly ways of deploying, buying and selling NFTs. By leveraging our own encrypted custodian wallets together with Stripe we managed to revolutionize the way NFT transactions are made.'}
    const tixyAppObject = {title: 'Tixy-NFT Flutter App', text:  `The Tixy Flutter app was built with Flutter right after the release of Tixy’s web app. Like the React web app, it uses Google Cloud to power its infrastructure which made it a perfect complement to the web-based app. `}
    const logisticsObject = {title: 'Tixy-Logistics', text: `Tixy-Logistics leverages mathematical engineering together with machine learning to optimize task delegation for warehouse facilities. Currently being beta tested at a large logistical facility outside of Stockholm with promising results. `}


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