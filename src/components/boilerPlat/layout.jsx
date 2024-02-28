import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import EndSidebar from "../EndSidebar";
import { useState } from "react";
const Layout = (props) => {
  const [openNav, setOpenNav] = useState(false);
  const OpenNavHandler = () => {
    setOpenNav(!openNav);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (openNav) {
      body.classList = "toggle-sidebar";
    } else {
      body.classList = "";
    }
  }, [openNav]);
  return (
    <>
      <Header openNav={openNav} navHandler={OpenNavHandler} />
      <Sidebar openNav={openNav} navHandler={OpenNavHandler} />
      <EndSidebar openNav={openNav} navHandler={OpenNavHandler} />
      <div className="">{props.children}</div>
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
