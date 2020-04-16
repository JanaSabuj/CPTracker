import React, { Fragment, useState } from "react";

const About = () => {
  const [buttonLink, setButtonLink] = useState("");
  const styleAbout = {
    fontSize: "20px"
  };

  const styleName = {
    fontFamily: "Megrim",
    fontSize: "30px",
    fontWeight: "bold"
  };

  const githubClick = () => {
    setButtonLink("https://github.com/JanaSabuj");
  };

  const websiteClick = () => {
    setButtonLink("https://janasabuj.github.io");
  };

  return (
    <Fragment>
      <div className="row" style={{ height: "75px" }} />
      <div className="row" style={styleAbout}>
        <div className="col s0 m3"> </div>
        <div className="col s12 m6">
          <div className="card grey lighten-3 hoverable">
            <div className="card-content black-text">
              <span className="card-title">
                {" "}
                <i className="material-icons red-text">favorite</i>
              </span>
              <p>App Version 1.0.0</p>
              <p>
                Built by{" "}
                <span style={styleName} className="red-text">
                  Sabuj Jana
                </span>{" "}
                <i className="tiny material-icons">copyright</i> 2020
              </p>
            </div>
            <div className="card-action">
              <form action={buttonLink} target="_blank">
                <button
                  className="btn waves-effect waves-light brown darken-1"
                  style={{ marginRight: "10px" }}
                  onClick={githubClick}
                >
                  Github
                  <i className="small material-icons left">code</i>
                </button>

                <button
                  className="btn waves-effect waves-light brown darken-1"
                  onClick={websiteClick}
                >
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
