import { React } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../reuseable';
import TextSection from './components/textComponent';

const OuterDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 100%;
  min-height:760px;
  height: fit-content;
  margin-bottom: 150px;
  gap: 50px;
  @media screen and (max-width:1200px) {
       //box-sizing: border-box;
  }
`;

const InnerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    max-width: 1400px;
   
    @media screen and (max-width:1100px) {
      flex-direction: column;
      justify-content: center;
      gap: 0px;
  } 
   
`


export default function MarketingSection({ scrollRef, secondRef }) {

  const marketingObjects = [
    {
      title: "Content Writing",
      text: "I wrote SEO optimizing content for TIXY where the goal was to attract more traction through our SEO strategy. This involved heavy research into the events, ticketing and blockchain industry.  ",
      image: "",
      skills: [ "Research", "Keywords", "Design","SEO"]
    },
    {
      title: "Guerilla marketing",
      text: "With Tixy i helped develop a campaign where we through QR code posters managed to attract many users around the Loola Palooza event in Stockholm. With posters scattered outised the entrances. ",
      image: "",
      skills: [ "Canva", "Photoshop", "Marketing"]
    },
    {
      title: "Sustainable Branding",
      text: "Leveraging student groups, we organized the Stoppa Miljösvinnet campaign, utilizing digital merchandise in place of physical goods.",
      image: "",
      skills: [ "Canva", "Blockchain", "Sustainability"]
    }
  ]


  return (
    <OuterDiv ref={scrollRef}>
      <SectionTitle ref={secondRef}>Marketing</SectionTitle>
      {marketingObjects.map((item, index) => {
        return (
          <InnerContainer >
            <TextSection marketingObject={item} index={index}></TextSection>
          </InnerContainer>)
      })}

    </OuterDiv>
  )
}

