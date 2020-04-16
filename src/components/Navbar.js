import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import SidenavLink from "./SideNavLink";

const Navbar = props => {
  const { names } = props;

  const styleNavbar = {
    fontFamily: "Bungee"
  };

  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue-grey darken-4">
            <a
              href="/#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </a>
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
      </div>

      <ul id="slide-out" className="sidenav sidenav-close">
        <li>
          <div className="user-view">
            <div className="background">
              <img src="../../img/hack.jpg" alt="coder" />
            </div>

            <img className="circle" src="../../img/dali.png" alt="coder" />

            <a href="/#">
              <span className="white-text name">Coder</span>
            </a>
            <a href="/#">
              <span className="white-text email">Talk is Cheap.</span>
            </a>
          </div>
        </li>

        {names.length &&
          names.map(el => <SidenavLink key={el.id} name={el.name} />)}

        <li>
          <div className="divider" />
        </li>
        <li>
          <NavLink to="/about" >
            <i className="small material-icons red-text pulse">favorite</i>
            Built by
            <span className="red-text"> Sabuj Jana</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return {
    names: state.dashboardReducer.names
  };
};

export default connect(mapStateToProps)(Navbar);
