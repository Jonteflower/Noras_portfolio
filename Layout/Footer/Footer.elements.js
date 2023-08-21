import styled from 'styled-components';


export const FooterContainer = styled.div`
  position: ${props => props.position};
  background: ${props => props.background};
  bottom:0;
  left:0;
  right:0;
  overflow: visible;
  box-sizing: border-box;
  padding:0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-height:220px;
  z-index: 999;
  height: fit-content;
  min-height: 60px;
  gap: 15px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    justify-content: space-between;
    padding: 1rem 0 1rem 0;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  height: 40px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    margin: 0px auto 0 auto;
  }
`;

export const TermsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: auto;
  height: 30px;
  gap:20px;
  @media screen and (max-width: 1000px) {
    margin: 0px auto 0 auto;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;

  @media screen and (max-width: 800px) {
    width: 80%;
    justify-content: space-around;
  }

`;

export const LogoDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 40px;
`;

export const Divider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 80%;
  border-bottom: 1px solid #C5C5C5;
  height: 1px;
`;

export const SocialIconLink = styled.a`
  color: inherit;
  font-size: 25px;
  padding-left: 4px;
  padding-right: 4px;
  color: ${props => props.color};

  &:hover{
    color: #68B8A9;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
    padding-left: 3px;
    padding-right: 3px;
  }
`;