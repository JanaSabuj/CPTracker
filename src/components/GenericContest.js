import React from "react";
import Moment from "react-moment";
import "moment-timezone";

import { durationModified } from "../utils/durationModified";

const GenericContest = props => {
  const { contest } = props;
  const { duration, end, event, href, id, start } = contest;
  const startDate = new Date(start + "Z");
  const startEpoch = +new Date(start + +Z);
  return (
    <div className="card brown lighten-5 hoverable">
      <div className="card-content black-text">
        <span className="card-title" style={{ fontWeight: "bold" }}>
          {event}
        </span>
        {/* {console.log(startDate)} */}
        <p style={{ fontFamily: "Oxygen" }}>
          <span style={{ fontWeight: "bold" }}>Start Date: </span>
          <Moment date={startDate.toString()} local /> <br />
          <span style={{ fontWeight: "bold" }}>Start/End: </span>
          <Moment date={startDate} fromNow />
          <br />
          <span style={{ fontWeight: "bold" }}> Duration: </span>
          {durationModified(duration)}
          <span style={{ fontWeight: "bold" }}> Status: </span>
          {startEpoch}
        </p>{" "}
      </div>
      <div className="card-action">
        <a
          className="waves-effect waves-light btn pink hoverable"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="material-icons right">send</i>Visit
        </a>
      </div>
    </div>
  );
};

export default GenericContest;
