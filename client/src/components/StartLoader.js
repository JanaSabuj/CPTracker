import React from "react";

const StartLoader = () => {
  return (
    <div className="container">
      <div className="row" style={{ height: "150px" }}></div>
      <div className="row">
        <div className="col s4 m4"> </div>
        <div className="col s4 m5" style={{ marginLeft: "10px" }}>
          <div className="" style={{ backgroundColor: "#141420" }}>
            <div className="container">
              <div className="lds-heart">
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s4 m3"> </div>
      </div>
    </div>
  );
};

export default StartLoader;
