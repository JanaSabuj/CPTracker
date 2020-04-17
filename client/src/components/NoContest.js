import React from "react";

const NoContest = ({ contestName, contestType }) => {
  return (
    <div className="card blue-grey darken-4">
      <div className="card-content white-text">
        <i className="small material-icons yellow-text">brightness_2</i>
        <div className="divider brown lighten-1"> </div>
        <span className="card-title">
          NO {contestType} contests available for {contestName} right now !
        </span>
      </div>
    </div>
  );
};

export default NoContest;
