import React from 'react'
import styled from 'styled-components'
import SkillItems from './skillsItems'
import TextSection from './textSection'

const OuterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: auto;
    width: 100%;
    @media screen and (max-width:1100px) {
      flex-direction: column;
      justify-content: center;
      gap: 30px;
  } 
   
`

function SkillsContainer() {
    return (
        <OuterContainer>
            <TextSection></TextSection>
            <SkillItems></SkillItems>
        </OuterContainer>

    )
}

export default SkillsContainer