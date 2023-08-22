import styled, { keyframes, css } from 'styled-components';

// Define keyframes for animations
// Define keyframes for animations
const fall = keyframes`
  0% {
    opacity: 1;
    top: -20%; // Let's start from a bit above the screen
  }
  100% {
    opacity: 0.6;
    top: 120%; // Let's go a bit below the screen to give it some buffer
  }
`;


// Define keyframes for combined blow and sway animation
const blowAndSwayAnimations = [
  keyframes`
    0% { transform: translateX(0) rotate(0); }
    100% { transform: translateX(2vw) rotate(360deg); }
  `,
  keyframes`
    0% { transform: translateX(0) rotate(0); }
    100% { transform: translateX(-2vw) rotate(-360deg); }
  `,
];

// Define the styled component for petals
const SakuraPetal = styled.div`
  z-index: 10;  // Added this line
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: fixed;
  top: -${props => props.size}px;
  left: ${props => props.left};
  opacity: ${props => props.opacity};
  transform: rotate(${props => props.rotate}deg);
  background: linear-gradient(120deg, rgba(255, 183, 197, 0.9), rgba(255, 197, 208, 0.9));
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;

  animation: 
  ${props => css`${fall} ${props.fallTime}s linear 0s infinite, 
                ${blowAndSwayAnimations[props.blowDirection]} ${props.blowTime}s linear 0s infinite`}
  ;

`;

export default SakuraPetal;
