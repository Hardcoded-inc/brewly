import React from "react";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";

const navItems = [
  { name: "home" },
  { name: "add coffee" },
  { name: "coffee quiz" },
];

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} className="navbar__logo-icon" alt="logo" />
        <div className="navbar__logo-name">BREWLY.CO</div>
      </div>
      <div className="navbar__links">
        {navItems.map((item) => (
          <div>{item.name}</div>
        ))}
        <div>
          <img src={profile} className="navbar__profile" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
