import { useRouter } from 'next/router';
import React from 'react';
import { FaDiscord, FaInstagram, FaLinkedinIn, FaMediumM, FaTwitter } from 'react-icons/fa';
import {
  Divider, FooterContainer, SocialIconLink, SocialIcons, SocialMedia,
  SocialMediaWrap, WebsiteRights
} from './Footer.elements';

function Footer({ scroll }) {
  const router = useRouter()
  const path = router.pathname
  path == '/about' ? scroll = 1 : scroll = scroll
  const isLight = (scroll != 0  && path != '/about') ?  '#FF4D59' : 'transparent'

  return (
    <>
      <FooterContainer position={scroll == 0 ? 'fixed' : 'absolute'}  color={ isLight} >
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink href='https://discord.gg/Q3pMgPy9Dh' target='_blank' aria-label='Facebook' color={scroll == 0 ?  '#FF4D59': '#000000' }>
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink href='https://tixyteam.medium.com/' target='_blank' aria-label='Medium' color={scroll == 0 ?  '#FF4D59': '#000000' }>
                <FaMediumM />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/tixynft/' target='_blank' aria-label='Instagram' color={scroll == 0 ?  '#FF4D59': '#000000' }>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://twitter.com/tixynft' target='_blank' aria-label='Twitter' color={scroll == 0 ?  '#FF4D59': '#000000' }>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/company/tixynft/' target='_blank' aria-label='LinkedIn' color={scroll == 0 ?  '#FF4D59': '#000000' }>
                <FaLinkedinIn />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        <Divider />
        <WebsiteRights>Or reach out at</WebsiteRights>
      </FooterContainer>
    </>
  );
}

export default Footer;