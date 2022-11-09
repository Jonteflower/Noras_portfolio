import React from 'react'
import styled from 'styled-components'
import ImageCarousel from './imageCarousel'
import { useState } from 'react'
import { useEffect } from 'react'

const OuterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    gap: 40px;
    width: 100%;
   
`

function SkillsContainer() {

    return (
        <OuterContainer>
            <ImageCarousel ></ImageCarousel>
        </OuterContainer>

    )
}

export default SkillsContainer