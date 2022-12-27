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
      <FooterContainer position={scroll == 0 ? 'fixed' : 'absolute'}  color={ isLight}  >
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink href='https://www.discordapp.com/users/Jonteflower#1427' target='_blank' aria-label='Discord' color={scroll == 0 ?  '#FF4D59': '#000000' }>
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/jonteflower/' target='_blank' aria-label='Instagram' color={scroll == 0 ?  '#FF4D59': '#000000' }>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://twitter.com/jonathannairn' target='_blank' aria-label='Twitter' color={scroll == 0 ?  '#FF4D59': '#000000' }>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/jonathan-nairn-tallen-672161140/?originalSubdomain=se' target='_blank' aria-label='LinkedIn' color={scroll == 0 ?  '#FF4D59': '#000000' }>
                <FaLinkedinIn />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        <Divider />
        {
          scroll == 0 ? 
          <WebsiteRights> <a href = "mailto: jonathan@tixynft.com">jonathan@tixynft.com</a></WebsiteRights>
          :
          <></>
        }
      </FooterContainer>
    </>
  );
}

export default Footer;