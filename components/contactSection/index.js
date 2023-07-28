import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 100%;
  height: 300px;
  gap: 10px;
  background-color: #1a1a1a;
  clip-path: polygon(0 35%,100% 0,100% 100%,0 100%);
  padding-top: 3rem;
  
  @media screen and (max-width:1000px) {
    padding-bottom: 20px;
  }
`;

const StyledInput = styled.a`
  text-align: center;
  padding: 12px;
  background-color: transparent;
  border: 2px solid white;
  font-size: 1rem;
  font-weight: 400;
  width: 80%;
  max-width: 300px;
  height: 48px;
  text-transform: uppercase;
  color:white;
  margin-top: 24px;
  
  background: linear-gradient(to left, #ffffff00 50%, white 50%) right;
    background-size: 200%;
    transition: .5s ease-out;

  &:hover {
    cursor: pointer;
    background-position: left;
    color: black;

  }
`;

export const Title = styled.h2`
    position: relative;
    font-size: 3rem;
    font-weight: 500;
    margin-top: 7rem;
    margin-bottom: 5rem;
    z-index: 9999;
    letter-spacing: 0.6px;
    font-family: 'Playfair Display', serif;
    margin: 0;
    padding: 0;
    color:#f1f1f1;

    @media screen and (max-width:1100px) {
    margin-top: 3.5rem;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
    } 

    @media screen and (max-width:700px) {
        font-size: 3.5rem;
        margin-bottom: 0;
    }

    @media screen and (max-width:600px) {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
`;

export const BLockDiv = styled.div`
   height:30px;
`;



function ContactSection() {

  return (
    <OuterDiv>
      <div>
        <BLockDiv />
        <Title>
          Send me a message
        </Title>
      </div>
      <StyledInput type="button" href={'mailto: nora.bjork.jobb@gmail.com'}>
        Contact
      </StyledInput>
    </OuterDiv>
  )
}

export default ContactSection