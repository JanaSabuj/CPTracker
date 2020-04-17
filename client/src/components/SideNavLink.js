import React from "react";
import { NavLink } from "react-router-dom";

const SideNavLink = ({ name }) => {
  const goToLink = "/" + name;
  return (
    <li>
      <NavLink to={goToLink} className="">
        <span style={{ fontFamily: "Bungee" }}> {name.toUpperCase()} </span>
        <i className="small material-icons red-text">send</i>
      </NavLink>
    </li>
  );
};

export default SideNavLink;
