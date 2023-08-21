import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';


export const ThinText = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 130%; /* 150% */
  text-align: ${props => props.textAlign ?? 'center'};
  width: 100%;
  margin: 0px;
  z-index: 100;
  letter-spacing: 0.3px;
  max-width: ${props => props.width ?? '900px'};

  @media screen and (max-width:1100px) {
    font-size: 1rem;
    text-align: center;
  } 

`;


const RowContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => props.flexDirection};

    align-items: center;
    justify-content: space-evenly;
    min-height: 431px;
    height: auto;
    gap:15px;

  @media screen and (max-width:1200px) {
        align-items: flex-start;
   }

  @media screen and (max-width:1100px) {
        align-items: center;
        justify-content: center;
        width:100%;
        gap:20px;
        min-height: 0px;
      
    } 

`
const SkillsRow = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};

    align-items: center;
    justify-content: flex-start;
    height: auto;
    width: 100%;
    gap:15px;
    margin-top: 5px;

  @media screen and (max-width:1200px) {
        align-items: flex-start;
   }

  @media screen and (max-width:1100px) {
        align-items: center;
        justify-content: center;
        width:100%;
        gap:20px;
        min-height: 0px;
      
    } 

`

const ColumnContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    gap:20px;

  @media screen and (max-width:1200px) {
        align-items: flex-start;
   }

  @media screen and (max-width:1100px) {
        align-items: center;
        justify-content: center;
        width:100%;
        gap:20px;
        min-height: 0px;
      
    } 

`


const InnerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 30vw;
    padding: 25px;
    border-radius: 5px;
    background-color: #112240;
    margin-left: ${props => (props.isEven ? '-55px' : '0px')};
    margin-right: ${props => (!props.isEven ? '-55px' : '0px')};

  @media screen and (max-width:1200px) {
        align-items: flex-start;
   }

  @media screen and (max-width:1100px) {
        align-items: center;
        justify-content: center;
        width:100%;
        gap:20px;
        min-height: 0px;
      
    } 

`

const StyledArticle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 45vw;
    gap: 30px;
    @media screen and (max-width:1100px) {
      width:95%;
      max-width: 90vw;
      text-align: center;
      gap: 20px;
    } 
`

const BoxTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 120%;
    transition: all 0.2s;
    letter-spacing: 1px;
    text-transform: uppercase;

    text-align: ${props => props.textAlign ?? 'right'};

    width: 100%;
    //font-family: 'Playfair Display', serif;
    line-height: 150%;
    margin: 0;
    color: #ccd6f6;

    @media screen and (max-width:1100px) {
    text-align: center;
    font-size: 1.5rem;
    padding-bottom: 12px;
    margin: 0;
    //white-space: nowrap;
    } 
`

const SmallBoxTitle = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: ${props => props.textAlign ?? 'right'};
    width: 100%;
    //font-family: 'Playfair Display', serif;
    margin: 0;
    color: #64FFDA;
    margin-bottom: -10px;


    @media screen and (max-width:1100px) {
    text-align: center;
    font-size: 1.5rem;
    padding-bottom: 12px;
    margin: 0;
    //white-space: nowrap;
    } 
`
const SkillsText = styled.p`
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: center;
    width: auto;
    //font-family: 'Playfair Display', serif;
    margin: 0;
    color: #A8B2D1;

    @media screen and (max-width:1100px) {
    text-align: center;
    font-size: 1.5rem;
    padding-bottom: 12px;
    margin: 0;
    //white-space: nowrap;
    } 
`



const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
};

const ImageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40vw;
    gap:10px;
    aspect-ratio: 1.65;
    margin-left: ${props => (props.isEven ? '0px' : '-55px')};
    margin-right: ${props => (!props.isEven ? '0px' : '-55px')};
    
    background-color: #6EFEE1;
    border-radius: 5px;
    @media (max-width: 480px)  {
        gap:0px;
    }
   
`

function TextSection({ marketingObject, index }) {
    const isEven = index % 2 === 0;

    return (
        <RowContainer flexDirection={isEven ? 'row' : 'row-reverse'}>
            <motion.div initial="hidden" animate="visible" variants={textVariants}>
                <ImageContainer isEven={isEven}></ImageContainer>
            </motion.div>
            <ColumnContainer>
                <SmallBoxTitle textAlign={isEven ? 'right' : "left"}>
                    Featured Work
                </SmallBoxTitle>
                <BoxTitle textAlign={isEven ? 'right' : "left"}>
                    {marketingObject.title}
                </BoxTitle>
                <InnerContainer isEven={isEven}>
                    <StyledArticle>
                        <ThinText textAlign={isEven ? 'right' : "left"} width={'100%'}>
                            {marketingObject.text}
                        </ThinText>
                    </StyledArticle>
                </InnerContainer>
                <SkillsRow flexDirection={isEven ? 'row-reverse': 'row' }>
                    {
                        marketingObject.skills.map((item) => {
                            return (
                                <SkillsText textAlign={isEven ? 'right' : "left"} > {item}</SkillsText>
                            )
                        })
                    }
                </SkillsRow>

            </ColumnContainer>
        </RowContainer>
    );
}


export default TextSection