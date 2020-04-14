import React, { Fragment } from "react";

const About = () => {
  const styleAbout = {
    fontSize: "20px"
  };

  const styleName = {
    fontFamily: "Megrim",
    fontSize: "30px"
  };
  return (
    <Fragment>
      <div className="row" style={{ height: "75px" }} />
      <div className="row" style={styleAbout}>
        <div className="col s0 m3"> </div>
        <div className="col s12 m6">
          <div className="card grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                {" "}
                <i className="material-icons red-text">favorite</i>
              </span>
              <p>App Version 1.0.0</p>
              <p>
                Built by <span style={styleName}>Sabuj Jana</span>{" "}
                <i className="tiny material-icons">copyright</i> 2020
              </p>
            </div>
            <div className="card-action">
              <form
                action="https://github.com/JanaSabuj/random-advice"
                target="_blank"
              >
                <button
                  className="btn waves-effect waves-light brown darken-1"
                  style={{ marginRight: "10px" }}
                >
                  Github
                  <i className="small material-icons left">code</i>
                </button>

                <button className="btn waves-effect waves-light brown darken-1">
                  Website
                  <i className="small material-icons right">fingerprint</i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col s0 m3"> </div>
      </div>
    </Fragment>
  );
};

export default About;
