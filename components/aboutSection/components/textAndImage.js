import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  height:fit-content;
  gap:5rem;
  @media screen and (max-width:1100px) {
   flex-direction: column;
   height: fit-content;
   gap:2rem;
  }
  @media screen and (max-width:500px) {
   flex-direction: column;
   height: fit-content;
   gap:1rem;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  width: fit-content;
  height: fit-content;
  padding-top:3rem;
  @media screen and (max-width:800px) {
    justify-content:center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width:200px;
  height:200px;
  @media screen and (max-width:400px) {
    width:120px;
    height:120px;
    }
  
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  width: 100%;
  margin-top:1.5rem;
  margin-bottom: 1rem;
  letter-spacing: .025em;
  @media screen and (max-width:400px) {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }
`;

const SubTitle = styled.h5`
  width:100%;
  text-align: center;
  color:#a3a3a3;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  margin:0%;
  @media screen and (max-width:400px) {
    font-size: 1rem;
    
  }
`;


const TextBox = styled.p`
  color:#d4d4d4;
  margin-bottom: 1.25em;
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.45rem;
  @media screen and (max-width:800px) {
    font-size: 1rem;
    line-height: 1.4rem;
  }
`;

const Article = styled.article`
    max-width: 700px;
    height: 300px;
  @media screen and (max-width:720px) {
    justify-content:flex-start;
    width:90%;
   
  }
`;


function TextAndImage({ }) {

    return (
        <Container>
            <ImageColumn>
                <ImageContainer>
                    <Image
                        src={'/images/general/person.svg'}
                        layout={'fill'}
                        objectFit={'contain'}
                    />
                </ImageContainer>
                <Title>Jonathan Nairn Tallen</Title>
                <SubTitle>Stockholm Sweden</SubTitle>
            </ImageColumn>
            <Article>
                <TextBox>
                    A software engineer who values learning and growing with people, teams, and technologies.

                </TextBox>

                <TextBox>
                    Presently, I am working as a Senior Software Engineer at Curebase where
                    I am helping to build a decentralized clinical trial platform while
                    scaling infrastructure with a focus on security, HIPAA, and GDPR compliance.
                </TextBox>
            </Article>
        </Container>
    )

}

export default TextAndImage