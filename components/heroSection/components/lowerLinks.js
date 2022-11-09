import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const InnerDiv = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width:90%;
    max-width: 1200px;
    height: 200px;
    gap:30px;
    @media screen and (max-width:840px) {
        flex-direction: column;
        height: 350px;
        justify-content: space-around;
        overflow: auto;
    }
`
const AnimationBox = styled(motion.div)`
    width: 200px;
    color: #FFFFFF;
   font-size: 1.6rem;
   line-height: 2.25rem;
   font-weight: 400;
   text-align: center;
`

const boxAnimation = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 2, delay: 3 } },
    hidden: { opacity: 0, scale: 0, y: 800 },
};



function LowerLinks() {
    return (
        <InnerDiv
            variants={boxAnimation}
            initial="hidden"
            animate='visible'>
            <AnimationBox>
                My Projects
            </AnimationBox>
            <AnimationBox>
                My Skills
            </AnimationBox>
            <AnimationBox>
                My Thoughts
            </AnimationBox>
        </InnerDiv>
    )
}

export default LowerLinks