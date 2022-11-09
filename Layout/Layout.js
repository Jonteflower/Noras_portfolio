import Footer from "./Footer/Footer1";
import NavMenu from "./Header/NavBar";
import styled from "styled-components";
import { motion, useScroll } from "framer-motion"
import React, { useEffect } from "react";


const ProgressContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: #ff4d5a;
  transform-origin: 0%;
  z-index: 10000;
`;

export default function Layout({ children }) {
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest)
    })
  }, [])


  /*
        <ProgressContainer
        style={{ scaleX: scrollYProgress }}
      />
  */


  return (
    <div className="content">

      <NavMenu />
      {children}
      <Footer />
    </div>
  );
}

