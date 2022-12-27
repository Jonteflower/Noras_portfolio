import styled from 'styled-components';


export const FooterContainer = styled.div`
  position: ${props => props.position};
  background: ${props => props.color};
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


export const WebsiteRights = styled.small`
  color: #FFFFFF80;
  margin-bottom: 10px;
  font-size: 13px;
  width: 80%;
  text-align: center;
`;

export const TermsAndServices = styled.a`
  color: #FFFFFF75;
  font-size: 12px;
  width: fit-content;
  text-align: center;  
  :hover{
    cursor:pointer;
    color: #FFFFFF;    
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
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
  color: #FFFFFF;
  font-size: 25px;
  padding-left: 4px;
  padding-right: 4px;

  &:hover{
    color: ${props => props.color};
  }
  &:active{
    color:inherit;
  }
  &:visited{
    color:inherit;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
    padding-left: 3px;
  padding-right: 3px;
  }
`;