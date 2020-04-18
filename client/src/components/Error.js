import React from "react";

const Error = (props) => {
  return (
    <div className="row container">
      <div className="col s0 m3"> </div>
      <div className="col s12 m6">
        <div className="card brown darken-1">
          <div className="card-content white-text">
            <i className="small material-icons red-text">error</i>
            <div className="divider brown darken-1"> </div>
            <span className="card-title">{props.message}</span>
          </div>
        </div>
      </div>
      <div className="col s0 m3"> </div>
    </div>
  );
};

export default Error;
