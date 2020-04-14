import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styleNavbar = {
    fontFamily: "Bungee"
  };

  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-4">
        <NavLink
          to="/"
          className="brand-logo center active"
          style={styleNavbar}
        >
          CPTracker
        </NavLink>
        <ul id="nav-mobile" className="right">
          <li>
            <NavLink to="/about" style={styleNavbar}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
