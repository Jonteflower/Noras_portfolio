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
  background-color: #ff4d5a;
  clip-path: polygon(0 35%,100% 0,100% 100%,0 100%);
  padding-top: 2rem;
  @media screen and (max-width:1000px) {
   
       padding-left: 15px;
       padding-right: 15px;
       gap: 5px;
      

  }
`;

const Title = styled.h2`
  position: relative;
  font-size: 3rem;
  font-weight: 600;
  z-index: 9999;
  margin: 0px;
  text-align: center;
  @media screen and (max-width:400px) {
    font-size: 2rem;
  } 

`;


const SectionText = styled.p`
  position: relative;
  font-size: 1rem;
  font-weight: 500;

`;



const Button = styled.button`
  background-color: transparent;
  border: 2px solid white;
  font-size: 1rem;
  font-weight: 400;
  width: 80%;
  max-width: 500px;
  height: 48px;
  text-transform: uppercase;
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
                    Any questions? Don't hesitate to contact me
                </SectionText>
            </div>

            <Button>
                Contact me
            </Button>

        </OuterDiv>
    )
}

export default ContactSection