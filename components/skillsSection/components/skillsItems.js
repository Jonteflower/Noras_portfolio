import React, { useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { animationItemsList } from './animationsItems'
import { useInView } from 'react-intersection-observer'

const SkillsBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 160px;
    border: double 3px transparent;
    border-image-slice: 1;
    border-width: 3px;
    background-image: linear-gradient(#1a1a1a, #1a1a1a),radial-gradient(circle at top left, #51a2e9, #ff4d5a);
    border-radius: 10px;
    background-origin: border-box;
    background-clip: content-box, border-box;
    transition: transform 0.2s, opacity 1.2s;
    overflow: hidden;
    font-size: 0.9rem;
    aspect-ratio: 8 / 6;
    box-sizing: border-box;

    @media (max-width: 600px)  {

        width: 130px;
    }

    @media (max-width: 480px)  {
        box-sizing: border-box;
        width: 27vw;
        aspect-ratio: 8 / 7;
    }

`
const RowContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
    gap:30px;
    @media (max-width: 480px)  {
        gap:20px;
    }
   
`
const ColumnContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
    gap:15px;
   
`

const BoxTitle = styled.span`
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    transition: all 0.2s;
    letter-spacing: 1px;
    text-transform: uppercase;

    @media (max-width: 480px)  {
        font-size: 11px;
        text-align: center;
        line-height: 16px;
    }

`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
    height:90%;
  @media (max-width: 400px)  {
    margin-top: 2px;
    margin-bottom: 2px;
    }
`

function SkillItems() {
    const [ref, inView] = useInView()
    const animationItems = shuffleArray(animationItemsList)
    const control = useAnimation()


    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);




    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    return (

        <RowContainer>
            <ColumnContainer>
                <SkillsBox

                    variants={animationItems[0]}
                    initial="hidden"
                    viewport={{ once: true }}
                    ref={ref}
                    animate={control}

                >
                    <ImageContainer>
                        <Image
                            src={'/images/coding/html.png'}
                            layout='fill'
                            objectFit={'contain'}
                            alt="Image of HTML logo"
                            quality={90}
                        />
                    </ImageContainer>

                    <BoxTitle>HTML</BoxTitle>
                </SkillsBox>
                <SkillsBox
                    variants={animationItems[1]}
                    viewport={{ once: true }}
                    initial="hidden"
                    ref={ref}
                    animate={control}
                >
                    <ImageContainer>
                        <Image
                            src={'/images/coding/css.png'}
                            layout={'fill'}
                            objectFit={'contain'}
                            alt="Image of HTML logo"
                            quality={90}
                        />
                    </ImageContainer>

                    <BoxTitle>CSS</BoxTitle>
                </SkillsBox>
                <SkillsBox
                    variants={animationItems[2]}
                    initial="hidden"
                    ref={ref}
                    animate={control}
                    viewport={{ once: true }}
                >
                    <ImageContainer>
                        <Image
                            src={'/images/coding/javascript.png'}
                            layout={'fill'}
                            objectFit={'contain'}
                            alt="Image of HTML logo"
                            quality={90}
                        />
                    </ImageContainer>
                    <BoxTitle>Javascript</BoxTitle>
                </SkillsBox>
            </ColumnContainer>
            <ColumnContainer>
                <SkillsBox
                    variants={animationItems[3]}
                    initial="hidden"
                    ref={ref}
                    animate={control}
                    viewport={{ once: true }}

                >
                    <ImageContainer>
                        <Image
                            src={'/images/coding/nextjs.svg'}
                            layout={'fill'}
                            objectFit={'contain'}
                            alt="Image of HTML logo"
                            quality={90}
                        />
                    </ImageContainer>
                    <BoxTitle>Next.Js</BoxTitle>
                </SkillsBox>
                <SkillsBox

                    variants={animationItems[4]}
                    initial="hidden"
                    ref={ref}
                    animate={control}
                    viewport={{ once: true }}

                >
                    <ImageContainer>
                        <Image
                            src={'/images/coding/gcloud.webp'}
                            layout={'fill'}
                            objectFit={'contain'}
                            alt="Image of HTML logo"
                            quality={90}
                        />
                    </ImageContainer>
                    <BoxTitle>Google Cloud</BoxTitle>
                </SkillsBox>

                <SkillsBox
                    variants={animationItems[5]}
                    initial="hidden"
                    ref={ref}
                    animate={control}
                    viewport={{ once: true }}

                >
                    <ImageContainer>
                        <Image
                            src={'/images/coding/firebase.png'}
                            layout={'fill'}
                            objectFit={'contain'}
                            alt="Image of HTML logo"
                            quality={90}
                        />
                    </ImageContainer>
                    <BoxTitle>Firebase</BoxTitle>
                </SkillsBox>
                <SkillsBox
                    variants={animationItems[6]}
                    initial="hidden"
                    ref={ref}
                    animate={control}
                    viewport={{ once: true }}

                >
                    <ImageContainer>
                        <Image
                            src={'/images/coding/git.png'}
                            layout={'fill'}
                            objectFit={'contain'}
                            alt="Image of HTML logo"
                            quality={90}
                        />
                    </ImageContainer>
                    <BoxTitle>Git</BoxTitle>
                </SkillsBox>
            </ColumnContainer>
            <ColumnContainer>
                <SkillsBox
                    variants={animationItems[7]}
                    initial="hidden"
                    ref={ref}
                    animate={control}
                    viewport={{ once: true }}


                >
                    <ImageContainer>
                        <Image
                            src={'/images/coding/node.png'}
                            layout={'fill'}
                            objectFit={'contain'}
                            alt="Image of HTML logo"
                            quality={90}
                        />
                    </ImageContainer>
                    <BoxTitle>Node.js</BoxTitle>
                </SkillsBox>
                <SkillsBox
                    variants={animationItems[8]}
                    initial="hidden"
                    ref={ref}
                    animate={control}
                    viewport={{ once: true }}
                >
                    <ImageContainer>
                        <Image
                            src={'/images/coding/python.png'}
                            layout={'fill'}
                            objectFit={'contain'}
                            alt="Image of HTML logo"
                            quality={90}
                        />
                    </ImageContainer>
                    <BoxTitle>Python</BoxTitle>
                </SkillsBox>
                <SkillsBox
                    variants={animationItems[9]}
                    initial="hidden"
                    ref={ref}
                    animate={control}
                    viewport={{ once: true }}

                >
                    <ImageContainer>
                        <Image
                            src={'/images/coding/Typescript_logo.svg'}
                            layout={'fill'}
                            objectFit={'contain'}
                            alt="Image of HTML logo"
                            quality={90}
                        />
                    </ImageContainer>
                    <BoxTitle>Typescript</BoxTitle>
                </SkillsBox>

            </ColumnContainer>

        </RowContainer>



    )
}

export default SkillItems