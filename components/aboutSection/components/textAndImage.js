import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import ExpandedText from './expandedText';
import { fullLogisticsText, fullTixyNftText, UpperText } from './textObjects';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:flex-start;
  box-sizing: border-box;
  width: 100%;
  height:fit-content;
  gap:5rem;
  margin-top: 3rem;
  @media screen and (max-width:1100px) {
   flex-direction: column;
   align-items: center;
   height: fit-content;
   gap:2rem;
  }
  @media screen and (max-width:500px) {
   flex-direction: column;
   height: fit-content;
   gap:1rem;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  width: fit-content;
  height: fit-content;
  gap:${props => props.gap};
  @media screen and (max-width:800px) {
    justify-content:center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width:200px;
  height:200px;
  border-radius: 1000px;
  overflow: hidden;
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
  margin-bottom: 0.5rem;
  letter-spacing: .025em;
  margin-top: 0px;
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
  margin:0;
  margin-bottom: 0.3rem;

  @media screen and (max-width:400px) {
    font-size: 1rem;
    
  }
`;

const Article = styled.article`
    max-width: 700px;
    height: fit-content;
  @media screen and (max-width:720px) {
    justify-content:flex-start;
    width:90%;
   
  }
`;


function TextAndImage() {
  

  return (
    <Container>
      <ColumnContainer gap={'15px'}>
        <ImageContainer>
          <Image
            src={'https://firebasestorage.googleapis.com/v0/b/tixy-a9bac.appspot.com/o/jonathan.webp?alt=media&token=4eb6a7f9-18c6-4ed5-833a-6c5527a0c350'}
            fill
            alt={'Picture of me Jonathan'}
            priority={true}

          />
        </ImageContainer>
        <div>
          <Title>Jonathan Nairn Tallen</Title>
          <SubTitle>Founder {'&'} CEO </SubTitle>
          <SubTitle>Tixy AB </SubTitle>
        </div>
      </ColumnContainer>
      <ColumnContainer gap={'2rem'}>
        <Article>
          <ExpandedText fullText={UpperText} title={'Background'}></ExpandedText>
        </Article>
        <Article>
          <ExpandedText fullText={fullTixyNftText} title={'Tixy-NFT'}></ExpandedText>
        </Article>
        <Article>
          <ExpandedText fullText={fullLogisticsText} title={'Tixy-Logistics'}></ExpandedText>
        </Article>
      </ColumnContainer>
    </Container >
  )

}

export default TextAndImage