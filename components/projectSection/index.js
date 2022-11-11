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
  font-size: 4.5rem;
  font-weight: 600;
  margin-top: 7rem;
  margin-bottom: 5rem;
  z-index: 9999;
  ::before{
    content: '';
    border-bottom: 18px solid #ff4d5a;
    width: 17rem;
    display: block;
    margin: 0 auto;
    position: relative;
    left:2rem;
    top: 4.7rem;
    z-index: -1;
  }

  @media screen and (max-width:1100px) {
    margin-top: 3.5rem;
    margin-bottom: 2.5rem;
    } 

    @media screen and (max-width:700px) {
      font-size: 3.5rem;
      margin-top: 0rem;
      margin-bottom: 0;
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
      font-size: 3rem;
      margin: 0;
      ::before{
    content: '';
    border-bottom: 18px solid #ff4d5a;
    width: 12rem;
    display: block;
    margin: 0 auto;
    position: relative;
    left:1.5rem;
    top: 3.2rem;
    z-index: -1;
  }
    }
`;

function ProjectSection() {

  return (
    <OuterDiv>
      <Title>Founder</Title>
      <SkillsContainer></SkillsContainer>
    </OuterDiv>
  )
}

export default ProjectSection;