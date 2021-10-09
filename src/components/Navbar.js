import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { InfoIcon, MoonIcon, SunIcon, HomeIcon } from "./icons";

const Navbar = () => {
  const theme = useSelector((state) => state.covid.theme);
  const [hover, setHover] = useState(false);
  return (
    <div className="navbar" onMouseLeave={() => setHover(false)}>
      <div className="logo">
        <Link to="/">
          Covid19
          <span>Tracker</span>
        </Link>
      </div>

      <div className="menu" onMouseEnter={() => setHover(true)}>
        <NavLink to="/" activeClassName="active">
          <HomeIcon />
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          <InfoIcon />
        </NavLink>
        <button onClick={e => e.preventDefault()}>{theme === "light" ? <MoonIcon /> : <SunIcon />}</button>
      </div>
      <div className={`menu-expand ${hover ? "active" : ""}`}>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <button onClick={e => e.preventDefault()} activeClassName="active">Theme: {theme}</button>
      </div>
    </div>
  );
};

export default Navbar;
