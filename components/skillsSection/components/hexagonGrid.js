import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import SkillsComponent from './gridTile'
import { BackendObjects, frontEndObjects, PlatformObjects } from './tileObjects'

const MotionBox = styled(motion.div)`
    width: 140px;
    @media (max-width: 600px)  {
        width: 120px;
        font-size: 0.7rem;
    }
    @media (max-width: 50px)  {
        width: 27vw;
        font-size: 0.7rem;
    }
`

const RowContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    gap:0px;
    width: auto;
   
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
        gap:8px;
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