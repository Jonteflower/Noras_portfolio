import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer1";
import NavMenu from "./Header/NavBar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [isLight, setIsLight] = useState(false);
  const router = useRouter()
  const path = router.pathname

  const handleScroll = () => {
    const position = window.scrollY;
    const isScroll = position != 0

    if (path != '/about') {
      setIsLight(isScroll)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="content">

      <NavMenu />
      {children}
      <Footer scroll={isLight} />
    </div>
  );
}

