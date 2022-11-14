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
  return (
    <>
      <FooterContainer position={scroll == 0 ? 'fixed' : 'absolute'}>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink href='https://discord.gg/Q3pMgPy9Dh' target='_blank' aria-label='Facebook'>
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink href='https://tixyteam.medium.com/' target='_blank' aria-label='Medium'>
                <FaMediumM />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/tixynft/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://twitter.com/tixynft' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/company/tixynft/' target='_blank' aria-label='LinkedIn'>
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