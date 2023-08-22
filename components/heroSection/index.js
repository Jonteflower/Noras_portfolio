import { motion } from 'framer-motion';
import Image from 'next/image'; // Import the Image component
import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import styled from 'styled-components';
import { neonGreen } from '../reuseable';


const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  width: 100%;
  aspect-ratio:3/2;

  //padding-top: 64px;
  @media screen and (max-width:1000px) {
    justify-content:center;
    //aspect-ratio:2/3;
    height: 100vh;
    width: 90vw;
    aspect-ratio: auto;
  }
`;

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  height:100%;
  gap: 34px;

  @media screen and (max-width:800px) {
    justify-content:flex-start;
    height:53%;
   
  }
`;

const BlockDiv = styled.div`
  width: 100%;
  height:25vh;

  @media screen and (max-width:800px) {
    justify-content:flex-start;
    height:0px;
  }

`;

const StyledButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${neonGreen};
    background-color: ${`${neonGreen}25`};
    border-radius: 5px;
    color: ${neonGreen};
    font-size: 1.1rem;
    font-weight: 400;
    width: 235px;
    height:39px;
    gap:10px;

    cursor: pointer;
    &:hover{
        scale: 1.03;
    }

    @media screen and (max-width:600px) {
      width: 180px;
      font-size: 1.2rem;
    }
   
`

const ImageContainer = styled.div`
  z-index: 0;

  @media screen and (max-width: 1000px) {
    display: none;
    
  }
`;

const HeroText = styled.p`
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: ${props => props.textAlign ?? 'center'};
  width: 100%;
  margin: 0px;
  margin-top: -15px;
  z-index: 1;
  max-width: ${props => props.width ?? '900px'};

  @media screen and (max-width:1100px) {
    font-size: 1rem;
    text-align: center;
  } 

`;

const HeroTitle = styled.h2`
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 76.8px */
  margin:0px;
  color:#f1f1f1;
  z-index: 1;
  @media screen and (max-width:600px) {
    font-size: 2.5rem;
    line-height: 2.7rem;
    text-align: center;
    line-height: 130%;
  }
`

function HeroSection({ scrollToNext, scrollRef }) {
  return (
    <Section ref={scrollRef}>
      <ImageContainer>
        <Image
          src="/images/background.jpg" // Replace this with your image path
          alt="Background Image"
          layout="fill" // Ensures the image covers the entire container
          objectFit="contain" // Ensures image covers the entire viewport without being cropped
          priority={true} // Loads the image with high priority
        />
      </ImageContainer>
      <OuterDiv>
        <BlockDiv></BlockDiv>
        <HeroTitle> Hello, my name is Nora</HeroTitle>
        <HeroText >
          And im a systems engineer. With a passion for tech,
          <br />design and buisiness development.
        </HeroText>
        <StyledButton onClick={scrollToNext}>Learn More
          <AiOutlineArrowDown style={{ fontSize: '15px' }} />
        </StyledButton>
      </OuterDiv>
    </Section>
  )
}

export default HeroSection;