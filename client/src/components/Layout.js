import React from "react";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="layout__container">
        {/* <Sidebar /> */}
        {/* <div>{children}</div> */}
      </div>
    </>
  );
};

export default Layout;
