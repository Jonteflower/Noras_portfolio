import React from 'react';
import styled from 'styled-components';
import { neonGreen } from '../reuseable';
import { NumberedHeader } from '../reuseable';
import { greyText } from '../reuseable';
import { GreenSpan } from '../reuseable';
const OuterDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  width: 100%;
  height: 400px;
  gap: 10px;
  max-width: 600px;
  //background-color: #1a1a1a;
  padding-top: 3rem;
  max-width: 1200px;
  
  @media screen and (max-width:1000px) {
    padding-bottom: 20px;
  }
`;

const StyledInput = styled.a`
  text-align: center;
  padding: 12px;
  background-color: transparent;
  border: 1.5px solid ${neonGreen};
  font-size: 0.9rem;
  font-weight: 400;
  width: 80%;
  max-width: 200px;
  height: 48px;
  text-transform: uppercase;
  color:${neonGreen};
  margin-top: 24px;
  border-radius: 3px;
  background: linear-gradient(to left, #ffffff00 50%, ${`${neonGreen}90`} 50%) right;
  background-size: 200%;
  transition: .5s ease-out;

  &:hover {
    cursor: pointer;
    background-position: left;
    color: black;
    color: #f1f1f1;
  }
`;

const ThinText = styled.p`
  font-size: 1.15rem;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 150% */
  text-align: ${props => props.textAlign ?? 'center'};
  margin: 0px;
  letter-spacing: 0.5px;
  color: ${greyText};
  width: 100%;
 


  @media screen and (max-width:1100px) {
    font-size: 1rem;
    text-align: left;
    letter-spacing: 0.4px;
  } 

`;


const Title = styled.p`
  font-size: clamp(40px, 5vw, 60px);
  color:#ccd6f6;
  margin: 0px 0px 10px;
  font-weight: 600;
  line-height: 1.1;

  @media screen and (max-width:1100px) {
    font-size: 1rem;
    text-align: left;
    letter-spacing: 0.4px;
  } 

`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 100%;
  max-width: 500px;
  height: fit-content;
  gap: 10px;
  
  @media screen and (max-width:1000px) {
    padding-bottom: 20px;
  }
`;



export default function ContactSection() {

  return (
    <OuterDiv>
      <ThinText>
      <GreenSpan>
      04.  What&apos;s Next?
      </GreenSpan>
      </ThinText>
      <Title>
        Get In Touch
      </Title>
      <TextContainer>
        <ThinText>
          If you have any questions or feel that I could be a valuable addition to your team, please don&apos;t hesitate to shoot me an email or reach out through my socials.
        </ThinText>
        <StyledInput type="button" href={'mailto: nora.bjork.jobb@gmail.com'}>
          Say Hello
        </StyledInput>
      </TextContainer>
    </OuterDiv>
  )
}