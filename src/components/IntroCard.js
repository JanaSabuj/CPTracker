import React, { Fragment } from "react";

const IntroCard = props => {
  const sites = props.sites;
  return (
    <div class="row">
      <div class="col s12 m3" />
      <div class="col s12 m6 ">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s4">
              <img src="../img/codeforces.png" alt="" class="circle responsive-img"/>  
            </div>
            <div class="col s10">
              <span class="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col s12 m3" />
    </div>
  );
};

export default IntroCard;
