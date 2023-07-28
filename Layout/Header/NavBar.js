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
  justify-content: flex-end;
  align-items: center;
  width: 90vw;
  max-width: 1400px;
  @media (min-width: 1400px)  {
    padding-right: 20px;
  }
`;

const ButtonsInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width:100%;
  height:100%;
  gap:24px;
`;


const MiddleButton = styled.span`
    font-family: 'Poppins', sans-serif;
    color: #f1f1f1;
    font-weight: 400;
    height: 21px;
    width: auto;
    font-size: 16px;
    transition: all 0.1s ease-in-out;
    border-bottom:2px solid #ff4d5a;

    &:hover {
      color: #FFFFFF;
      cursor: pointer;
    }
`;


const Title = styled.span`
  text-align: left;
  flex: 1;
  position: relative;
  font-size: 2rem;
  font-weight: 500;
  margin: 0px;
  @media (min-width: 480px)  {
        height: 0px;
        font-size: 0;
        width: 0px;
    }

`;

export default function NavMenu() {
  const router = useRouter()
  const path = router.pathname

  return (
    <>
      <HeaderContainer>
        <HeaderInner>
          <ButtonsInner>
            {path === '/' ?
              <>
                <MiddleButton><Link href='/about'> About</Link></MiddleButton>
                <MiddleButton><Link href='/resume'> Resume</Link></MiddleButton>
              </>
              :
              path === '/about' ?
              <>
                <MiddleButton><Link href='/'> Home</Link></MiddleButton>
                <MiddleButton><Link href='/resume'> Resume</Link></MiddleButton>
              </>
              :
              <>
                <MiddleButton><Link href='/'> Home</Link></MiddleButton>
                <MiddleButton><Link href='/about'> About</Link></MiddleButton>
              </>
            }
          </ButtonsInner>
        </HeaderInner>
      </HeaderContainer>
    </>
  );
}
