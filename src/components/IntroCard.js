import React from "react";

const IntroCard = props => {
  const sites = props.info;
  const imgPath = [
    `../img/${sites.name[0]}.png`,
    `../img/${sites.name[1]}.png`
  ];
  const styleName = { fontFamily: "Bungee", fontSize: "18px" };
  return (
    <div className="row">
      <div className="col s12 m2" />
      <div className="col s12 m4">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s4">
              <img src={imgPath[0]} alt="" className="circle responsive-img" />
            </div>
            <div className="col s8">
              <span style={styleName}>{sites.name[0]}</span>
              <div className="divider"> </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col s12 m4">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s4">
              <img src={imgPath[1]} alt="" className="circle responsive-img" />
            </div>
            <div className="col s8">
              <span style={styleName}>{sites.name[1]}</span>
              <div className="divider"> </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m2" />
    </div>
  );
};

export default IntroCard;
