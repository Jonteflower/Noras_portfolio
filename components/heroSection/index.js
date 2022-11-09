import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from 'react';
import styled from 'styled-components';
import TextAnimation from './components/textAnimation';


const StyledButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(26,26,26,0.6);
    border: 2px solid #ff4d5a;
    border-radius: 2px;
    color: #ff4d5a;
    font-size: 1.4rem;
    font-weight: 500;
    width: 235px;
    height:39px;
    gap:10px;

    cursor: pointer;
    :hover{
        scale: 1.02;
    }

    @media screen and (max-width:600px) {
      width: 180px;
      font-size: 1.2rem;
    }
   
`


const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-end;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  height:48%;
  gap: 20px;

  @media screen and (max-width:800px) {
    justify-content:center;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  width: 100%;
  height:100vh;
  border-bottom: 0.5px solid #ffffff95;
  @media screen and (max-width:800px) {
    justify-content:center;
  }
`;

function HeroSection({scrollToNext}) {

  return (
    <Section>
      <OuterDiv>
        <TextAnimation line1={`Hi, I'm Jonathan`} line2={`and I'm a`}></TextAnimation>
        <StyledButton onClick={scrollToNext}><a>Learn more</a>
          <ArrowDownwardIcon></ArrowDownwardIcon>
        </StyledButton>
      </OuterDiv>
    </Section>
  )

}

export default HeroSection