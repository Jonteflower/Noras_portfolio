import React from 'react';
import styled from 'styled-components';
import SkillsContainer from './components/projectsContainer';
import { NumberedHeader } from '../reuseable';

const OuterDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 100%;
  min-height:50vh;
  height: fit-content;
  gap: 20px;
  margin-bottom: 5rem;
  @media screen and (max-width:600px) {
    margin-bottom: 2rem;
  }

`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items:flex-start;
  width: 100%;
  max-width: 1200px;
  height: auto;


`;




function ExperienceSection({ scrollRef }) {

  return (
    <OuterDiv ref={scrollRef}>
      <TitleDiv>
        <NumberedHeader number={2}>Experiences</NumberedHeader>
      </TitleDiv>
      <SkillsContainer></SkillsContainer>
    </OuterDiv>
  )
}

export default ExperienceSection;