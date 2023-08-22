import React from 'react';
import { NumberedHeader } from '../reuseable';
import SkillsContainer from './components/projectsContainer';
import { OuterSection } from '../reuseable';

function ProjectSection({scrollRef, inViewRef}) {

  return (
    <OuterSection ref={inViewRef} >
      <NumberedHeader number={2} ref={scrollRef}>Tech Projects</NumberedHeader>
      <SkillsContainer></SkillsContainer>
    </OuterSection>
  )
}

export default ProjectSection;