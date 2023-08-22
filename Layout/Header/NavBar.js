import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { neonGreen } from '../../components/reuseable';

const NavbarWrapper = styled.div`
  height: 64px;  // or whatever height your navbar is
  width: 100%;
  position: relative;  // ensure that it stacks correctly
`;

const HeaderContainer = styled.div`
  position: fixed; // Changed from sticky to fixed
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height: 64px;
  z-index: 10;
  transition: transform 0.3s ease-in-out; // Added transition here
  @media (min-width: 1000px) {
    min-width: 0px;
  }
`;

const HeaderInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding-right: 20px;
`;

const ButtonsInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex:1;
  height:100%;
  gap:24px;
`;


const MiddleButton = styled.button`
    font-weight: 500;
    font-size: 16px;
    transition: all 0.1s linear;

    color: ${neonGreen};
    border: 1px solid  ${neonGreen};
    padding: 0.5rem 0.7rem;
    border-radius: 5px;
    transition: 0.1s ease-in;
    background: transparent
    ;
    &:hover {
      cursor: pointer;
      background-color: #f1f1f1;
      border-radius: 5px;
      background-color: ${`${neonGreen}50`};

    }
`;


const Title = styled.span`
  text-align: left;
  position: relative;
  font-size: 2rem;
  font-weight: 500;
  margin: 0px;
  font-family: 'Playfair Display', serif;
  @media (min-width: 480px)  {
        height: 0px;
        font-size: 0;
        width: 0px;
    }
`;

const NameLogo = styled.h2`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0px;
  font-family: 'Playfair Display', serif;
  padding-left: 20px;

`;


const NumberedHeader = styled.p`
  display: flex;
  align-items: center;
  position: relative;
  font-size: clamp(13px, 3vw, 16px);
  white-space: nowrap;
  overflow: hidden;
  color: #ccd6f6;
  font-weight: 400;
    
  &:hover {
    color: ${neonGreen};
    cursor: pointer;
  }

  &::before {
    position: relative;
    bottom: 0.5px;
    counter-increment: section 1;
    content: "${(props) => `0${props.number}.`}";
    margin-right: 5px;
    color: ${neonGreen};
    font-size: clamp(10.5px, 2.15vw, 12.5px);
    font-weight: 400;
  }

  white-space: normal;  // Allow the text to wrap to the next line if necessary
`;

export default function NavMenu({ aboutScroll, techScroll, marketingScroll, contactScroll }) {
  const router = useRouter();
  const path = router.pathname;

  const [lastScrollTop, setLastScrollTop] = useState(0);  // store the last scroll position
  const [navVisible, setNavVisible] = useState(true);     // determine if navbar is visible

  useEffect(() => {
    function handleScroll() {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Scrolling down
        setNavVisible(false);
      } else {
        // Scrolling up
        setNavVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <NavbarWrapper>
      <HeaderContainer style={{ transform: navVisible ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.3s ease-in-out' }}>
        <HeaderInner>
          <NameLogo>Nora Björk</NameLogo>
          <ButtonsInner>
            <NumberedHeader number={1} onClick={aboutScroll}>About</NumberedHeader>
            <NumberedHeader number={2} onClick={techScroll}>Tech</NumberedHeader>
            <NumberedHeader number={3} onClick={marketingScroll}>Marketing</NumberedHeader>
            <NumberedHeader number={4} onClick={contactScroll}>Contact</NumberedHeader>
            <MiddleButton>
              <a href='/images/general/resume.png' target="_blank" rel="noopener noreferrer">Resume</a>
            </MiddleButton>
          </ButtonsInner>
        </HeaderInner>
      </HeaderContainer>
    </NavbarWrapper>
  );
}