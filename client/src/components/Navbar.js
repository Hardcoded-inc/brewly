import React from "react";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
import { Link } from "react-router-dom";

const navItems = [
  { link: "", name: "home" },
  { link: "list", name: "coffee listing" },
  { link: "add", name: "add coffee" },
];

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} className="navbar__logo-icon" alt="logo" />
        <Link to="/">
          <div className="navbar__logo-name">BREWLY.CO</div>
        </Link>
      </div>
      <div className="navbar__links">
        {navItems.map((item) => (
          <div>
            <Link to={"/" + item.link}>{item.name}</Link>
          </div>
        ))}
        <div>
          <img src={profile} className="navbar__profile" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
