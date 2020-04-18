import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import Countdown from "react-countdown";

import { epochCalculation } from "../utils/epochCalculation";
import { durationModified } from "../utils/durationModified";

const GenericContest = (props) => {
  const { contest, contestType } = props;
  const { duration, end, event, href, start } = contest;
  const { startDate, endDate } = epochCalculation(start, end);

  const cssColors = {
    live: "green lighten-2",
    past: "red accent-1",
    future: "yellow lighten-2",
  };

  return (
    <div className={"card " + cssColors[contestType] + " hoverable"}>
      <div className="card-content black-text">
        <span className="card-title" style={{ fontWeight: "bold" }}>
          {event}
        </span>
        <p style={{ fontSize: "15px" }}>
          <span style={{ fontWeight: "bold" }}>Start Date: </span>
          <Moment date={startDate.toString()} local /> <br />
          <span style={{ fontWeight: "bold" }}>End Date: </span>
          <Moment date={endDate.toString()} local /> <br />
          {contestType === "future" ? (
            <span style={{ fontWeight: "bold" }}> Starts: </span>
          ) : contestType === "live" ? (
            <span style={{ fontWeight: "bold" }}> Running since: </span>
          ) : (
            <span style={{ fontWeight: "bold" }}> Ended: </span>
          )}
          <Moment date={startDate} fromNow />
          <br />
          <span style={{ fontWeight: "bold" }}> Duration: </span>
          {durationModified(duration)} <br />
          {contestType === "future" && (
            <>
              <span style={{ fontWeight: "bold" }}> Countdown: </span>
              <Countdown date={startDate} intervalDelay={0} precision={3} />
              <br />
            </>
          )}
          <span style={{ fontWeight: "bold" }}> Status: </span>
          {contestType.toUpperCase()}
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
