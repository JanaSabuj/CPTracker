import React from "react";
import { Link } from "react-router-dom";

const IntroCard = (props) => {
  const sites = props.info;
  const imgPath = [
    `../img/${sites.name[0]}.png`,
    `../img/${sites.name[1]}.png`,
  ];
  const styleName = { fontFamily: "Bungee", fontSize: "20px" };
  return (
    <>
      <div className="row">
        <div className="col s0 m1" />
        <div className="col s12 m5">
          <div className="card-panel brown lighten-5 z-depth-1 hoverable">
            <div className="row valign-wrapper">
              <div className="col s4">
                <img
                  src={imgPath[0]}
                  alt=""
                  className="circle responsive-img"
                />
              </div>
              <div className="col s8">
                <div className="row">
                  <span style={styleName}>{sites.name[0]}</span>{" "}
                </div>
                <Link
                  className="waves-effect waves-light btn grey darken-3"
                  to={"/" + sites.name[0].toLowerCase()}
                >
                  Contests
                  <i className="material-icons right">code</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col s12 m5">
          <div className="card-panel grey lighten-5 z-depth-1 hoverable">
            <div className="row valign-wrapper">
              <div className="col s4">
                <img
                  src={imgPath[1]}
                  alt=""
                  className="circle responsive-img"
                />
              </div>
              <div className="col s8">
                <div className="row">
                  <span style={styleName}>{sites.name[1]}</span>{" "}
                </div>
                <Link
                  className="waves-effect waves-light btn grey darken-3"
                  to={"/" + sites.name[1].toLowerCase()}
                >
                  Contests
                  <i className="material-icons right">code</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col s0 m1" />
      </div>
    </>
  );
};

export default IntroCard;
