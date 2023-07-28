import React from 'react'
import styled from 'styled-components'

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
  padding-top: 2rem;
  
  @media screen and (max-width:1000px) {
    padding-bottom: 20px;
  }
`;

const Title = styled.h2`
  position: relative;
  font-size: 3.5rem;
  font-weight: 600;
  z-index: 9999;
  color: #f1f1f1;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 2rem;
  padding-top: 2rem;

  &::before{
    content: '';
    border-bottom: 18px solid #ff4d5a;
    width: 95%;
    display: block;
    margin: 0 auto;
    position: relative;
    left:1.5rem;
    top: 4rem;
    z-index: -1;
  }

    @media screen and (max-width:600px) {
      margin-top: 20px;
      font-size: 2.5rem;
      margin-bottom: -2rem;
      &::before{
    content: '';
    border-bottom: 14px solid #ff4d5a;
    display: block;
    margin: 0 auto;
    position: relative;
    left:1.3rem;
    top: 2.85rem;
    z-index: -1;
  }
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
  max-width: 500px;
  height: 48px;
  text-transform: uppercase;
  color:white;
  margin-bottom: 1.5rem;
  background: linear-gradient(to left, #ffffff00 50%, white 50%) right;
    background-size: 200%;
    transition: .5s ease-out;

  &:hover {
    cursor: pointer;
    background-position: left;
    color: black;

  }
`;

function ContactSection() {

  return (
    <OuterDiv>
      <div>
        <Title>
          Questions?
        </Title>
      </div>
      <StyledInput type="button" href={'mailto: jonathan@tixynft.com'}>
        Contact me
      </StyledInput>
    </OuterDiv>
  )

}

export default ContactSection