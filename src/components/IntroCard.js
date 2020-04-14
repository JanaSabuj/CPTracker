import React, { Fragment } from "react";

const IntroCard = props => {
  const sites = props.sites;
  return (
    <Fragment>
      {sites.id % 2 !== 0 && <div className="col s0 m1"> </div>}
      <div class="col s12 m5">
        <div class="card">
          <div class="card-image">
            <div class="col s5">
              <img
                src="../img/codeforcxes.png"
                className="responsive-img circle"
                alt="cf"
              />
            </div>

            <a
              class="btn-floating halfway-fab waves-effect waves-light red"
              href="/#"
            >
              <i class="material-icons">add</i>
            </a>
          </div>
          <div class="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
        </div>
      </div>
      {sites.id % 2 === 0 && <div className="col s0 m1"> </div>}
    </Fragment>
  );
};

export default IntroCard;
