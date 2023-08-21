import Link from 'next/link';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height:50px;
  max-height:64px;
  z-index: 100;
  @media (min-width: 1000px)  {
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
   font-family: 'Playfair Display', serif;
    font-weight: 600;
  
    width: 80px;
    font-size: 16px;
    transition: all 0.2s linear;
    background-color: transparent;
    border:none;

    &:hover {
      color: #FFFFFF;
      cursor: pointer;
      background-color: #1a1a1a;
      border-radius: 5px;
      height: 34px;
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
  //width: fit-content;

`;




export default function NavMenu() {
  const router = useRouter()
  const path = router.pathname

  return (
    <>
      <HeaderContainer>
        <HeaderInner>
          <NameLogo>Nora Björk</NameLogo>

          <ButtonsInner>
            {path == '/about' ?
              <>
                <Title>
                  About me
                </Title>
                <MiddleButton><Link href='/'> Home</Link></MiddleButton>
              </>
              :
              <MiddleButton><Link href='/about'> Resume</Link></MiddleButton>}
          </ButtonsInner>
        </HeaderInner>
      </HeaderContainer>
    </>
  );
}
