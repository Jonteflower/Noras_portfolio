import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { neonGreen, neonPurple } from '../../reuseable'
//Alternative design


const SkillsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: double 3px transparent;
    border-image-slice: 1;
    border-width: 3px;
    background-image: linear-gradient(#11041D, #11041D),radial-gradient(circle at top left, ${neonGreen}, ${neonPurple});
    border-radius: 10px;
    background-origin: border-box;
    background-clip: content-box, border-box;
    transition: transform 0.2s, opacity 1.2s;
    overflow: hidden;
    aspect-ratio: 8 / 6;
    box-sizing: border-box;
    width: 120px;
    @media (max-width: 500px)  {
        width:28vw;
    }

`

const BoxTitle = styled.span`
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    transition: all 0.2s;
    letter-spacing: 1px;
    text-transform: uppercase;
    color:white;
    @media (max-width: 550px)  {
        font-size: 12px;
        text-align: center;
        line-height: 16px;
    }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 8px;
  height:55%;
  
  @media (max-width: 400px)  {
    margin-bottom: 3px;
    }
`

function SkillsComponent({ item }) {

    return (
        <SkillsBox>
            <ImageContainer>
                <Image
                    src={item.image}
                    fill
                    style={{ objectFit: "contain" }}
                    alt={item.alt}
                />
            </ImageContainer>

            <BoxTitle>{item.title}</BoxTitle>
        </SkillsBox>

    )
}

export default SkillsComponent