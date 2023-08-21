import styled from "styled-components";

export const HeroText = styled.p`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 150% */
  text-align: ${props => props.textAlign ?? 'center'};
  width: 100%;
  margin: 0px;
  margin-top: -15px;
  z-index: 100;
  max-width: ${props => props.width ?? '900px'};

  @media screen and (max-width:1100px) {
    font-size: 1rem;
    text-align: center;
  } 

`;


export const ThinText = styled.p`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 150% */
  text-align: ${props => props.textAlign ?? 'center'};
  width: 100%;
  margin: 0px;
  margin-top: -15px;
  z-index: 100;
  max-width: ${props => props.width ?? '900px'};

  @media screen and (max-width:1100px) {
    font-size: 1rem;
    text-align: center;
  } 

`;


export const SectionTitle = styled.h2`
    position: relative;
    font-size: 5rem;
    font-weight: 400;
    margin-top: 7rem;
    margin-bottom: 5rem;
    z-index: 9999;
    letter-spacing: 0.6px;
    //font-family: 'Playfair Display', serif;
    margin: 0;

    @media screen and (max-width:1100px) {
    margin-top: 3.5rem;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
    } 

    @media screen and (max-width:700px) {
        font-size: 3.5rem;
        margin-bottom: 0;
    }

    @media screen and (max-width:600px) {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        margin: 0;
        padding:0;
    }
`;
