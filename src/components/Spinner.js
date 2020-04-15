import React from "react";

const Spinner = () => {
  return (
    <div class="row container">
      <div className="col s0 m3"> </div>
      <div class="col s12 m6">
        <div class="card brown darken-1">
          <div class="card-content white-text">
            <img src="../../img/bean.gif" alt="windmill" />
            <div className="divider brown darken-1"> </div>
            <span class="card-title">Crunching all contests for you ... </span>
          </div>
        </div>
      </div>
      <div className="col s0 m3"> </div>
    </div>
  );
};

export default Spinner;
