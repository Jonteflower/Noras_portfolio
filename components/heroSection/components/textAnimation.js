import { motion } from "framer-motion";
import React from 'react';
import styled from 'styled-components';
//Text Animation

const LargeText = styled(motion.span)`
   //color: #FFFFFF;
   font-family: 'Playfair Display', serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 76.8px */
    margin:0px;
   @media screen and (max-width:600px) {
    font-size: 2.5rem;
    line-height: 2.7rem;
    text-align: center;
  }
`;

const TextBox = styled(motion.h3)`
      //color: #FFFFFF;
      font-family: 'Playfair Display', serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 76.8px */
    margin:0px;
   @media screen and (max-width:600px) {
    font-size: 2.5rem;
    line-height: 2.7rem;
    text-align: center;
    line-height: 130%;
  }

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


            {line2.split("").map((char, index) => {
                return (
                    <LargeText
                        key={char + "" + index}
                        variants={letter}
                    >
                        {char}
                    </LargeText>
                )
            })}




        </TextBox>
    )
}

export default TextAnimation