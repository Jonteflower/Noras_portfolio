import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


const ColumnContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
    gap:15px;
    width: 50%;

    @media screen and (max-width:1200px) {
        align-items: flex-start;
  }

  @media screen and (max-width:1100px) {
        align-items: center;
      justify-content: center;
      width:100%;
      
    } 

`

const StyledArticle = styled.article`
    width: 65%;
    @media screen and (max-width:1100px) {
      width:100%;
      text-align: center;
    } 
`

const BoxTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1;
    transition: all 0.2s;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #ffffff;
    text-align: left;
    width: 100%;

    @media screen and (max-width:1100px) {
    text-align: center;
    font-size: 1.3rem;
    white-space: nowrap;
    } 
`

const BoxText = styled.p`
    font-size: 1rem;
    width: 500px;
    line-height: 1.3rem;
    color:rgb(138, 147, 155);
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    @media screen and (max-width:1100px) {
        width:100%;
  } 
`

function TextSection() {
    return (
        <ColumnContainer>
            <Image
                src={'/images/general/person.svg'}
                width={300}
                height={200}
                objectFit={'contain'}
                alt="silhouette of a person"
                quality={90}
            />
            <StyledArticle>
                <BoxTitle>Full Stack developer</BoxTitle>
                <BoxText>
                    A full stack web developer is a person who can develop both client and server software.
                    In addition to mastering HTML and CSS, he/she also knows how to
                </BoxText>
            </StyledArticle >

        </ColumnContainer>

    )
}

export default TextSection