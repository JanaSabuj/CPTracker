import React from "react";

const GenericContest = props => {
  return (
    <div className="card grey lighten-4">
      <div className="card-content black-text">
        <span className="card-title">{props.contest.event}</span>
        <p>{props.contest.href}</p>
      </div>
      <div className="card-action">
        <a
          className="waves-effect waves-light btn pink"
          href={props.contest.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="material-icons right">send</i>Visit
        </a>
      </div>
    </div>
  );
};

export default GenericContest;
