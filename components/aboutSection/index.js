import React from 'react';
import styled from 'styled-components';
import TextAndImage from './components/textAndImage';

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  max-width:1200px;
  min-height:100%;
  height: fit-content;
  padding-bottom: 100px;
`;

const Title = styled.h1`
  position: relative;
  font-size: 3.5rem;
  font-weight: 500;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  z-index: 9999;
  width: 100%;

  @media screen and (max-width:800px) {
    font-size: 3rem;
    margin-bottom: 2rem;
    }
    @media screen and (max-width:400px) {
        font-size: 2.5rem;
        margin-bottom: 1.3rem;

    display: none;
    }
`;

const UpperDiv = styled.div`
  width: 100%;
  height:auto;
  border-bottom: 0.5px solid #ffffff50;
  margin-top: 5rem;
  @media screen and (max-width:1100px) {
    flex-direction: column;
   width: 90%;
  }

  @media screen and (min-width:400px) {
    flex-direction: column;
  }

`;


function AboutSection({ }) {

    return (
        <>
            <OuterDiv>
                <UpperDiv>
                    <Title>
                        About me
                    </Title>
                </UpperDiv>
                <TextAndImage></TextAndImage>
            </OuterDiv>
        </>
    )

}

export default AboutSection