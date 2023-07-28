import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import styled from 'styled-components';
import TextAnimation from './components/textAnimation';

const StyledButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff9ae95;
    border-radius: 5px;
    color: #68b8a9;
    font-size: 1.01rem;
    font-weight: 500;
    width: 135px;
    height:35px;
    gap:10px;
    //color: ${props => props.size};
    background: #fff9ae95;
    cursor: pointer;
    :hover{
        scale: 1.02;
    }

    @media screen and (max-width:600px) {
      width: 180px;
      font-size: 1.2rem;
    }
   
`
const ButtonnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  height:auto;
  gap: 15px;

`;


const OuterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:flex-end;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  height:48%;

  @media screen and (max-width:800px) {
    justify-content:flex-start;
    height:53%;
   
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  box-sizing: border-box;
  width: 50%;
  height:100%;
`;

const LeftInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  height:100%;
  max-width: 550px;
`;

const HeroText = styled.p`
  /* body/24px */
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */
  padding-top: 32px;
  padding-bottom: 32px;
  margin: 0px;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-end;
  align-items:center;
  box-sizing: border-box;
  width: 50%;
  height:100%;
  
  @media screen and (max-width:800px) {
    justify-content:flex-start;
    height:53%;
  }
`;

const RightDivImage = styled.div`
  width: 777px;
  height: 877px;
  margin-right: -150px;
  @media screen and (max-width:800px) {
    justify-content:flex-start;
    height:53%;
  }
`;


const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  width: 100%;
  height:100vh;

  @media screen and (max-width:800px) {
    justify-content:center;
  }
`;

function HeroSection({ scrollToNext, scrollRef }) {
  return (
    <Section ref={scrollRef}>
      <OuterDiv>
        <LeftDiv>
          <LeftInner>
            <TextAnimation line1={`Hello,`} line2={` my name is Nora`}></TextAnimation>
            <HeroText>
              Short text with details about you, what you do or your professional career. You can add more information on the about page.

            </HeroText>
            <ButtonnWrap>
              <StyledButton onClick={scrollToNext}>Projects
              </StyledButton>
              <StyledButton onClick={scrollToNext}>About me
              </StyledButton>
            </ButtonnWrap>
          </LeftInner>
        </LeftDiv>
        <RightDiv>
          <RightDivImage>
            <svg xmlns="http://www.w3.org/2000/svg" width="720" height="629" viewBox="0 0 720 629" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z" fill="#FDC435" />
            </svg>
          </RightDivImage>

        </RightDiv>
      </OuterDiv>
    </Section>
  )
}

export default HeroSection;

//              <AiOutlineArrowDown style={{ fontSize: '15px' }} />

