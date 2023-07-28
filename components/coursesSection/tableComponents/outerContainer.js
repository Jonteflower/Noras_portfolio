import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledContainer = styled(motion.section)`
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;
  flex: 1;
  width:97%;
  max-width: 1460px;
  gap: 15px;
  height: fit-content;
  min-height: 700px;

  @media screen and (min-width: 1500px) {
    max-width: 1560px;
  }

  @media screen and (max-width: 1400px) {
    gap:20px;
    max-width: 97%;
    padding-top: 10px;
  }

`;

const MotionVariant4 = {
    hidden: {
        scale: 0.8,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0,
            durarion: 0.4,
        },
    },
};

const OuterPageContainer = ({ children }) => {
    return (
        <StyledContainer initial="hidden" animate="visible" variants={MotionVariant4}>
            {children}
        </StyledContainer>
    );
};

export default OuterPageContainer;
