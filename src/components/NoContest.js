import React from "react";

const NoContest = ({ contestName, contestType }) => {
  return (
    <div class="card blue-grey darken-4">
      <div class="card-content white-text">
        <i class="small material-icons yellow-text">brightness_2</i>
        <div className="divider brown lighten-1"> </div>
        <span class="card-title">
          NO {contestType} contests available for {contestName} right now !
        </span>
      </div>
    </div>
  );
};

export default NoContest;
