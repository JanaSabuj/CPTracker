import React from "react";

const NoContest = ({ name }) => {
  return (
    <div class="card brown lighten-1">
      <div class="card-content white-text">
        <i class="small material-icons yellow-text">brightness_2</i>
        <div className="divider brown lighten-1"> </div>
        <span class="card-title">
          NO contests available for {name} right now !
        </span>
      </div>
    </div>
  );
};

export default NoContest;
