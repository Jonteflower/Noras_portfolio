import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import SkillsComponent from './gridTile'
import { BackendObjects, PlatformObjects, pyramidOne, pyramidTwo } from './tileObjects'

const MotionBox = styled(motion.div)`
    width: 140px;
    @media (max-width: 600px)  {
        width: 23vw;
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
    gap:15px;
    
    @media (max-width: 480px)  {
        gap:5px;
    }
   
`
const ColumnContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    gap:15px;
    @media (max-width: 480px)  {
        gap:10px;
    }
   
   
`

function PyramidSkills({ animationItems, motionRef, controls, clickHandler }) {

    return (
        <ColumnContainer onClick={clickHandler}>
            <RowContainer>
                <MotionBox
                    variants={animationItems[9]}
                    initial="hidden"
                    ref={motionRef}
                    animate={controls}
                    viewport={{ once: false }}
                    key={pyramidOne.image}
                >
                    <SkillsComponent item={pyramidOne} key={pyramidOne.image}></SkillsComponent>
                </MotionBox>
            </RowContainer>
            <RowContainer>
                {pyramidTwo.map((item, index) =>
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
            </RowContainer>

            <RowContainer>
                {BackendObjects.map((item, index) =>

                    <MotionBox
                        variants={animationItems[index + 3]}
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
            </RowContainer>
            <RowContainer>
                {PlatformObjects.map((item, index) =>
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

            </RowContainer>


        </ColumnContainer >



    )
}

export default PyramidSkills