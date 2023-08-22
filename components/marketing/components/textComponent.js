import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { neonGreen } from '../../reuseable';

const RowContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => props.flexDirection};
    align-items: center;
    justify-content: space-evenly;
    min-height: 431px;
    height: auto;
    width: 100%;

    @media screen and (max-width:1000px) {
        display: block;
        z-index: 1;  // Ensures the row container is on top
        background-color: #FFFFFF50;
        padding: 20px;
        min-height: 0;
        border-radius: 5px;
        background-color: #23535D;
        width: 100%;
    }
`

const ThinText = styled.p`
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

  @media screen and (max-width:1000px) {
    text-align: left;
    color: #A8B2D1;
    font-size: 0.92rem;
    letter-spacing: 0.4px;
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

`

const ColumnContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignDirection ?? 'flex-start'};
    justify-content: flex-start;
    flex: 1;
    height: 100%;
    gap:20px;

  @media screen and (max-width:1000px) {
        align-items: center;
        justify-content: center;
        width:100%;
        gap:10px;
        min-height: 0px;
    } 

`

const InnerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: space-evenly;
    
    width: 100%;
    padding: 25px;
    border-radius: 5px;
    background-color: #112240;
    margin-left: ${props => (props.isEven ? '-50px' : '0px')};
    margin-right: ${props => (!props.isEven ? '-50px' : '0px')};
    min-width: 400px;

  @media screen and (max-width:1000px) {
        margin: 0;
        background-color: #00000000;
        padding: 0;
        justify-content: flex-start;
        width: 100%;
        min-width: 90%;
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
    line-height: 150%;
    margin: 0;
    color: #ccd6f6;

    @media screen and (max-width:1000px) {
    font-size: 1.2rem;
    text-align: left; // Align text to the left
    color: #f1f1f1
    } 
`

const SmallBoxTitle = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: ${props => props.textAlign ?? 'right'};
    width: 100%;
    margin: 0;
    color: ${neonGreen};
    margin-bottom: -10px;

    @media screen and (max-width:1000px) {
        font-size: 0.85rem;
        text-align: left; // Align text to the left
        margin-bottom: -5px;
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

    @media screen and (max-width:1000px) {
        font-size: 0.85rem;
        padding-bottom: 12px;
    } 
`


const ImageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50vw;
    gap:10px;
    aspect-ratio: 1.8;
    margin-left: ${props => (props.isEven ? '0px' : '-50px')};
    margin-right: ${props => (!props.isEven ? '0px' : '-50px')};
    background-color: #6EFEE1;
    border-radius: 5px;

    @media (max-width: 1000px)  {
        z-index: 0;  // Ensures the image container is below the text on mobile
        display: none;
    }
   
`
const ImageContainerInner = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
    background-color: #6EFEE1;
    border-radius: 5px;

    @media (max-width: 1000px)  {
        display: none;

    }
   
`
const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
};


function TextSection({ marketingObject, index }) {
    const isEven = index % 2 === 0;

    return (
        <RowContainer flexDirection={isEven ? 'row' : 'row-reverse'}>
            <motion.div initial="hidden" animate="visible" variants={textVariants}>
                <ImageContainer isEven={isEven}>
                    <ImageContainerInner>
                        <Image
                            src={marketingObject.image}
                            style={{ objectFit: "contain" }}
                            fill
                            alt={'Picture of one of my marketing Projects'}
                            priority={true}
                        />
                    </ImageContainerInner>
                </ImageContainer>
            </motion.div>
            <ColumnContainer alignDirection={isEven ? 'flex-end' : 'flex-start'}>
                <SmallBoxTitle textAlign={isEven ? 'right' : "left"}>
                    Featured Work
                </SmallBoxTitle>
                <BoxTitle textAlign={isEven ? 'right' : "left"}>
                    {marketingObject.title}
                </BoxTitle>
                <InnerContainer isEven={isEven} >
                        <ThinText textAlign={isEven ? 'right' : "left"} width={'100%'}>
                            {marketingObject.text}
                        </ThinText>
                </InnerContainer>
                <SkillsRow flexDirection={isEven ? 'row-reverse' : 'row'}>
                    {
                        marketingObject.skills.map((item, index) => {
                            return (
                                <SkillsText key={index} textAlign={isEven ? 'right' : "left"} > {item}</SkillsText>
                            )
                        })
                    }
                </SkillsRow>
            </ColumnContainer>
        </RowContainer>
    );
}


export default TextSection