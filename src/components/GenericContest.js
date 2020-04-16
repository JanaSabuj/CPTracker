import React from "react";
import Moment from "react-moment";
import "moment-timezone";

import { epochCalculation } from "../utils/epochCalculation";
import { durationModified } from "../utils/durationModified";

const GenericContest = props => {
  const { contest } = props;
  const { duration, end, event, href, id, start } = contest;
  const {
    startDate,
    endDate,
    presentDate,
    startEpoch,
    endEpoch,
    presentEpoch
  } = epochCalculation(start, end);

  return (
    <div className="card brown lighten-5 hoverable">
      <div className="card-content black-text">
        <span className="card-title" style={{ fontWeight: "bold" }}>
          {event}
        </span>
        {console.log(epochCalculation(start, end))}
        <p style={{ fontFamily: "Oxygen" }}>
          <span style={{ fontWeight: "bold" }}>Start Date: </span>
          <Moment date={startDate.toString()} local /> <br />
          <span style={{ fontWeight: "bold" }}>End Date: </span>
          <Moment date={endDate.toString()} local /> <br />
          <span style={{ fontWeight: "bold" }}>Start/End: </span>
          <Moment date={startDate} fromNow />
          <br />
          <span style={{ fontWeight: "bold" }}> Duration: </span>
          {durationModified(duration)}
          <span style={{ fontWeight: "bold" }}> Status: </span>
          {presentEpoch - startEpoch}
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
