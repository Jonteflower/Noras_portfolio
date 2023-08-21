import React from 'react';
import Image from 'next/image'; // Import the Image component
import { AiOutlineArrowDown } from 'react-icons/ai';
import styled from 'styled-components';
import TextAnimation from './components/textAnimation';
import { HeroText } from '../reuseable';

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  width: 100%;
  aspect-ratio:3/2;
  //padding-top: 64px;
  @media screen and (max-width:800px) {
    justify-content:center;
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
    background-color: #fff9ae98;
    border: 2px solid #fff9ae98;
    border-radius: 5px;
    color: #68b8a9;
    font-size: 1.4rem;
    font-weight: 500;
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

function HeroSection({ scrollToNext, scrollRef }) {
  return (
    <Section ref={scrollRef}>
      {/* Add the Image component here for the background */}
      <Image
        src="/images/background.jpg" // Replace this with your image path
        alt="Background Image"
        layout="fill" // Ensures the image covers the entire container
        objectFit="contain" // Ensures image covers the entire viewport without being cropped
        priority={true} // Loads the image with high priority
      />
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