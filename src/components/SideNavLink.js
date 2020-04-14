import React from "react";
import { NavLink } from "react-router-dom";

const SideNavLink = ({ name }) => {
  return (
    <li>
      <NavLink to="/about" className="waves-effect">
        <span> {name} </span>
        <i className="small material-icons">send</i>
      </NavLink>
    </li>
  );
};

export default SideNavLink;
