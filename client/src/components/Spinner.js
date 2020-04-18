import React from "react";

const Spinner = () => {
  return (
    <div className="row container">
      <div className="col s0 m3"> </div>
      <div className="col s12 m6">
        <div className="card brown darken-1">
          <div className="card-content white-text">
            <div className="lds-hourglass" />
            <div className="divider brown darken-1"> </div>
            <span className="card-title">
              Crunching all contests for you ...{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="col s0 m3"> </div>
    </div>
  );
};

export default Spinner;
