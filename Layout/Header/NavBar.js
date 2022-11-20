import Link from 'next/link';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute; 
  top: 0;
  left:0;
  right: 0;
  background-color:'#0D101600';
  height:80px;
  max-height:80px;
  z-index: 100;
`;

const HeaderInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  padding-right: 20px;

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
    color: #FFFFFF;
    font-weight: 400;
    height: 21px;
    width: auto;
    font-size: 16px;
    transition: all 0.1s ease-in-out;

    &:hover {
      color: #40D1B7;
      border-bottom:2px solid #40D1B7;
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
            {path == '/about' ?
              <>
                <Title>
                  About me
                </Title>
                <MiddleButton><Link href='/'> Home</Link></MiddleButton>
              </>

              :
              <MiddleButton><Link href='/about'> About</Link></MiddleButton>}
          </ButtonsInner>
        </HeaderInner>
      </HeaderContainer>
    </>
  );
}
