import React from "react";
import { NavLink } from "react-router-dom";

const SideNavLink = ({ name }) => {
  name = name.toLowerCase();
  const goToLink = "/" + name;
  return (
    <li>
      <NavLink to={goToLink} className="waves-effect">
        <span> {name} </span>
        <i className="small material-icons">send</i>
      </NavLink>
    </li>
  );
};

export default SideNavLink;
