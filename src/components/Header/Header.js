import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = props => (
  <h1 className="header NavigationItem">
    <NavLink to="/">SHUAI WANG</NavLink>
  </h1>
);
export default Header;
