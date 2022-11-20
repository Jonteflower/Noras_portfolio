import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import SkillsComponent from './hexagonTile'
import { BackendObjects, frontEndObjects, PlatformObjects } from './tileObjects'

const MotionBox = styled(motion.div)`

    width: fit-content;
    height: fit-content;
    margin: auto;

`

const RowContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    gap:10px;
    width: auto;
    @media (max-width: 480px)  {
        gap:0px;
    }
   
`
const ColumnContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: auto;
    gap:10px;
    
    @media (max-width: 480px)  {
        gap:7px;
    }
   
`

function SkillsHexagon({ animationItems, motionRef, controls, clickHandler }) {

    return (
        <RowContainer onClick={clickHandler}>
            <ColumnContainer>
                {frontEndObjects.map((item, index) =>
                    <MotionBox
                        variants={animationItems[index]}
                        initial="hidden"
                        ref={motionRef}
                        animate={controls}
                        viewport={{ once: false }}
                        key={item.image}
                    >
                        <SkillsComponent item={item} key={item.image}></SkillsComponent>
                    </MotionBox>
                )
                }
            </ColumnContainer>
            <ColumnContainer>
                {PlatformObjects.map((item, index) =>
                    <MotionBox
                        variants={animationItems[index + 2]}
                        initial="hidden"
                        ref={motionRef}
                        animate={controls}
                        viewport={{ once: false }}
                        key={item.image}
                    >
                        <SkillsComponent item={item} key={item.image}></SkillsComponent>
                    </MotionBox>
                )
                }
            </ColumnContainer>
            <ColumnContainer>
                {BackendObjects.map((item, index) =>
                    <MotionBox
                        variants={animationItems[index + 6]}
                        initial="hidden"
                        ref={motionRef}
                        animate={controls}
                        viewport={{ once: false }}
                        key={item.image}
                    >
                        <SkillsComponent item={item} key={item.image}></SkillsComponent>
                    </MotionBox>
                )
                }
            </ColumnContainer>
        </RowContainer >
    )
}

export default SkillsHexagon