import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { HeroText } from '../../reuseable';


const ColumnContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 431px;
    height: auto;
    gap:15px;
    width: 100%;

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
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 120%;
    transition: all 0.2s;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #474131;
    text-align: left;
    width: 100%;
    font-family: 'Playfair Display', serif;
    line-height: 150%;
    margin: 0;

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

function TextSection() {
    return (
        <ColumnContainer>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
            >
                <StyledArticle>
                    <BoxTitle>I have experience working with</BoxTitle>
                    <HeroText textAlign={'left'} width={'100%'}>
                        All modern design frameworks, programming languages
                        <br />
                        and designing and building websites from the ground up.
                    </HeroText>
                </StyledArticle>
            </motion.div>
        </ColumnContainer>
    );
}

export default TextSection