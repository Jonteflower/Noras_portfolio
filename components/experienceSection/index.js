import React from 'react';
import styled from 'styled-components';
import SkillsContainer from './components/projectsContainer';

const OuterDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 100%;
  min-height:50vh;
  height: fit-content;
  gap: 20px;

`;

const Title = styled.h2`
  position: relative;
  font-size: 5rem;
  font-weight: 600;
  margin-top: 7rem;
  margin-bottom: 5rem;
  z-index: 9999;
  letter-spacing: 0.1rem;
  ::before{
    content: '';
    border-bottom: 18px solid #ff4d5a;
    width: 29rem;
    display: block;
    margin: 0 auto;
    position: relative;
    left:2.8rem;
    top: 5.3rem;
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

    @media screen and (max-width:400px) {
      font-size: 2.5rem;
      ::before{
    content: '';
    border-bottom: 18px solid #ff4d5a;
    width: 12rem;
    display: block;
    margin: 0 auto;
    position: relative;
    left:1.5rem;
    top: 3rem;
    z-index: -1;
  }
    }
`;

function ExperienceSection() {

  return (
    <OuterDiv>
      <Title >Experiences</Title>
      <SkillsContainer></SkillsContainer>
    </OuterDiv>
  )
}

export default ExperienceSection;