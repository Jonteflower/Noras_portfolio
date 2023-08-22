import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { ThinText } from '../../reuseable';
import { greyText } from '../../reuseable';
import { GreenSpan } from '../../reuseable';


const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 100%;
    gap:15px;
    width: 100%;

  @media screen and (max-width:1200px) {
        align-items: flex-start;
   }

  @media screen and (max-width:1100px) {
        align-items: center;
        justify-content: center;
        width:100%;
        gap:20px;
        min-height: 0px;
    } 

`

const StyledArticle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 45vw;
    gap: 30px;
    //color: ${greyText};

    @media screen and (max-width:1100px) {
      width:95%;
      max-width: 90vw;
      gap: 20px;
    } 
`

const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
};

function TextSection() {
    return (
        <ColumnContainer>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
            >
                <StyledArticle>
                    <ThinText textAlign={'left'} width={'100%'}>
                        Hello! My name is Nora, and I enjoy creating things that reside at the intersection of people and technology. <br /><br />

                        I&apos;ve graduated with degrees in both finance and systems engineering and have previously worked within the startup space. There, I helped launch the <GreenSpan>world&apos;s first fraud and scalping-proof ticketing service</GreenSpan> based on <GreenSpan>Blockchain technology</GreenSpan>.
                        <br /><br />
                        Additionally, I have experience working as a freelance designer and content creator, writing <GreenSpan>SEO</GreenSpan>-optimized articles and building an online presence through <GreenSpan>community building</GreenSpan>. I was also responsible for <GreenSpan>accounting</GreenSpan> in my startup venture with Tixy.
                    </ThinText>
                </StyledArticle>
            </motion.div>
        </ColumnContainer>
    );
}

export default TextSection