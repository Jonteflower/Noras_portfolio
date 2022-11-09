import { motion } from "framer-motion";
import React from 'react';
import styled from 'styled-components';
import Delayed from "../../utils/delayed";
import TextChanger from './textChanger';
//Text Animation

const LargeText = styled(motion.span)`
   color: #FFFFFF;
   font-size: 3rem;
   text-align: left;
   font-weight: 500;
   @media screen and (max-width:600px) {
    font-size: 2.5rem;
    line-height: 2.7rem;
  }
`;

const SmallText = styled(motion.span)`
   color: #FFFFFF;
   font-size: inherit;
   width:auto;
   letter-spacing: normal;
   font-size: 2.5rem;
   line-height: 2.25rem;
   text-align: left;
   font-weight: 500;
   @media screen and (max-width:600px) {
    font-size: 2rem;
    line-height: 2.2rem;
  }
`;

const TextWrap = styled.div`
    width: 200px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content:flex-start;
    font-size: inherit;
    gap: 3px;
    padding-top: 15px;

    @media screen and (max-width:600px) {
    width: 150px;
  }

`;


const TextBox = styled(motion.h3)`
        
`;


function TextAnimation({ line1, line2, }) {
    const sentance = {
        hidden: { opacity: 1 },
        visable: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08
            }
        }
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visable: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <TextBox
            variants={sentance}
            initial="hidden"
            animate="visable"
        >
            {line1.split("").map((char, index) => {
                return (
                    <LargeText key={char + "" + index} variants={letter}>
                        {char}
                    </LargeText>
                )
            })}
            <br />
            <TextWrap>
                {line2.split("").map((char, index) => {
                    return (
                        <SmallText
                            key={char + "" + index}
                            variants={letter}
                        >
                            {char}
                        </SmallText>
                    )
                })}

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}

                >
                    <Delayed>
                        <SmallText><TextChanger play={true}> </TextChanger></SmallText>
                        
                    </Delayed>
                </motion.div>

            </TextWrap>

        </TextBox>
    )
}

export default TextAnimation