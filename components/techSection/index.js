import React from 'react';
import { NumberedHeader } from '../reuseable';
import SkillsContainer from './components/projectsContainer';
import { OuterSection } from '../reuseable';

function ProjectSection({scrollRef}) {

  return (
    <OuterSection ref={scrollRef} >
      <NumberedHeader number={2}>Tech Projects</NumberedHeader>
      <SkillsContainer></SkillsContainer>
    </OuterSection>
  )
}

export default ProjectSection;