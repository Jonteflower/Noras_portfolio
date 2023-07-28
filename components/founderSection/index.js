import React from 'react';
import styled from 'styled-components';
import SkillsContainer from './components/projectsContainer';
import { SectionTitle } from '../reuseable';

const OuterDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 100%;
  min-height:50vh;
  height: fit-content;
  gap: 50px;
`;

const Title = styled.h2`
  position: relative;
  font-size: 5rem;
  font-weight: 500;
  margin-top: 7rem;
  margin-bottom: 5rem;
  z-index: 9999;
  letter-spacing: 0.6px;

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

function ProjectSection({scrollRef}) {

  return (
    <OuterDiv ref={scrollRef}>
      <SectionTitle>Projects</SectionTitle>
      <SkillsContainer></SkillsContainer>
    </OuterDiv>
  )
}

export default ProjectSection;