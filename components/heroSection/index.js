import Image from 'next/image'; // Import the Image component
import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import styled from 'styled-components';
import { HeroText, neonGreen } from '../reuseable';
import TextAnimation from './components/textAnimation';

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
        <TextAnimation line1={`Hello,`} line2={` my name is Nora`}></TextAnimation>
        <HeroText>
          And im a systems engineer. With a passion for, tech,
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