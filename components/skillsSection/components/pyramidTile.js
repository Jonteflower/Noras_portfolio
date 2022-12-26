import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'


const SkillsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: double 3px transparent;
    border-image-slice: 1;
    border-width: 3px;
    background-image: linear-gradient(#1a1a1a, #1a1a1a),radial-gradient(circle at top left, #51a2e9, #ff4d5a);
    border-radius: 10px;
    background-origin: border-box;
    background-clip: content-box, border-box;
    transition: transform 0.2s, opacity 1.2s;
    overflow: hidden;
    font-size: 0.9rem;
    aspect-ratio: 8 / 6;
    box-sizing: border-box;
    width: 140px;
    @media (max-width: 650px)  {
        width: 22vw;
    }
`
const BoxTitle = styled.span`
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    transition: all 0.2s;
    letter-spacing: 1px;
    text-transform: uppercase;

    @media (max-width: 550px)  {
        font-size: 12px;
        text-align: center;
        line-height: 14px;
    }

`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 8px;
  height:55%;
  @media (max-width: 400px)  {
    margin-top: 3px;
    }
`



function PyramidTile({ item }) {

    return (
        <SkillsBox>
            <ImageContainer>
                <Image
                    src={item.image}
                    fill
                    style={{objectFit:"contain"}}
                    alt={item.alt}
                    
                />
            </ImageContainer>

            <BoxTitle>{item.title}</BoxTitle>
        </SkillsBox>

    )
}

export default PyramidTile