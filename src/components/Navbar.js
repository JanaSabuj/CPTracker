import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-4">
        <a
          href="/#"
          className="brand-logo center active"
          style={{ fontFamily: "Bungee" }}
        >
          CP Tracker
        </a>
        <ul id="nav-mobile" className="left hide">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
