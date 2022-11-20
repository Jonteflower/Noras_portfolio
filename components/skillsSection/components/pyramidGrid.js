import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import SkillsComponent from './hexagonTile'
import { BackendObjects, PlatformObjects, pyramidOne, pyramidTwo } from './tileObjects'
import PyramidTile from './pyramidTile'

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
    gap:15px;
    
    @media (max-width: 480px)  {
        gap:7px;
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
                    <PyramidTile item={pyramidOne} key={pyramidOne.image}></PyramidTile>
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
                        <PyramidTile item={item} key={item.image}></PyramidTile>
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
                        <PyramidTile item={item} key={item.image}></PyramidTile>
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
                        <PyramidTile item={item} key={item.image}></PyramidTile>
                    </MotionBox>
                )
                }

            </RowContainer>


        </ColumnContainer >



    )
}

export default PyramidSkills