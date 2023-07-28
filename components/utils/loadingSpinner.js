import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const OutsideDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
`;


const SpinnerContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
`;

const SpinnerItem = styled.div`
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  &:nth-child(1) {
    animation-delay: -0.036s;
    &:after {
      top: 63px;
      left: 63px;
    }
  }
  // Add similar code for the other 7 child divs
`;

export default function Spinner() {
  return (
    <OutsideDiv>
      <GlobalStyle />
      <SpinnerContainer>
        <SpinnerItem />
        <SpinnerItem />
        <SpinnerItem />
        <SpinnerItem />
        <SpinnerItem />
        <SpinnerItem />
        <SpinnerItem />
        <SpinnerItem />
      </SpinnerContainer>
    </OutsideDiv>
  );
}
