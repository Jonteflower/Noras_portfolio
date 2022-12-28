import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer1";
import NavMenu from "./Header/NavBar";


export default function Layout({ children }) {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
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
      <Footer scroll={scroll} />
    </div>
  );
}

