import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import personImage from '../../../public/images/general/person.svg'

const ColumnContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
    gap:15px;
    width: fit-content;
    @media screen and (max-width:1200px) {
        align-items: flex-start;
  }

  @media screen and (max-width:1100px) {
        align-items: center;
      justify-content: center;
      width:100%;
      gap:20px;
      
    } 

`

const StyledArticle = styled.article`
    width: 100%;
    max-width: 600px;
    @media screen and (max-width:1100px) {
      width:95%;
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
        margin-block-end: 0em;
  } 
`


const ImageContainer = styled.div`
    position: relative;
    width:300px;
    height:200px;

  @media screen and (max-width:600px) {
    width:200px;
    height:150px;
    } 

`

function TextSection() {
    return (
        <ColumnContainer>
            <ImageContainer>
                <Image
                    src={personImage}
                    fill
                    style={{ objectFit: "contain" }}
                    alt="silhouette of a person"
                />
            </ImageContainer>

            <StyledArticle>
                <BoxTitle>Full Stack Developer</BoxTitle>
                <BoxText>
                    {
                        `
                        I am passionate about solving complex problems by leveraging modern software stacks.
                        I've built multiple full-stack web and mobile applications from the ground up by myself. 
                        I also have experience in recruiting and leading developer teams. 
                        `
                    }
                </BoxText>
            </StyledArticle >

        </ColumnContainer>

    )
}

export default TextSection