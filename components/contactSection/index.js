import React from 'react'
import styled from 'styled-components'


const OuterDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 100%;
  height: 300px;
  gap: 20px;
  background-color: #282828;

  clip-path: polygon(0 35%,100% 0,100% 100%,0 100%);
  padding-top: 2rem;
  @media screen and (max-width:1000px) {
       gap: 5px;
       padding-top: 4rem;
  }
`;

const Title = styled.h2`
  position: relative;
  font-size: 3rem;
  font-weight: 600;
  z-index: 9999;
  color: white;
  margin: 0 0 1.5rem 0;
  text-align: center;


  ::before{
    content: '';
    border-bottom: 18px solid #ff4d5a;
    width: 10.5rem;
    display: block;
    margin: 0 auto;
    position: relative;
    left:1.8rem;
    top: 3.2rem;
    z-index: -1;
  }

    @media screen and (max-width:700px) {
      font-size: 3.5rem;
      
      ::before{
    content: '';
    border-bottom: 18px solid #ff4d5a;
    width: 14rem;
    display: block;
    margin: 0 auto;
    position: relative;
    left:1.2rem;
    top: 3.8rem;
    z-index: -1;
  }
    }

    @media screen and (max-width:600px) {
      font-size: 2.5rem;
      ::before{
    content: '';
    border-bottom: 14px solid #ff4d5a;
    width: 9.5rem;
    display: block;
    margin: 0 auto;
    position: relative;
    left:1.2rem;
    top: 2.85rem;
    z-index: -1;
  }
    }
`;


const SectionText = styled.p`
  position: relative;
  font-size: 1.1rem;
  font-weight: 500;
  color:white;
  @media screen and (max-width:400px) {
    font-size: 1rem;
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
          Contact
        </Title>
        <SectionText>
          {`Any questions? Don't hesitate to contact me`}
        </SectionText>
      </div>
      <StyledInput type="button" href={'mailto: jonathan@tixynft.com'}>
        Contact me
      </StyledInput>
    </OuterDiv>
  )
}

export default ContactSection