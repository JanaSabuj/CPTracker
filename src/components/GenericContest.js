import React from "react";
import Moment from "react-moment";
import "moment-timezone";

const GenericContest = props => {
  const { contest } = props;
  const { duration, end, event, href, id, start } = contest;
  const startDate = new Date(start);
  const durationModified = () => {
    let total = Math.round((duration / 3600 + Number.EPSILON) * 100) / 100;
    if (total > 24)
      total = ` ${Math.round((total / 24 + Number.EPSILON) * 100) / 100} Days`;
    else total = total + " Hour" + (total > 1 ? "s" : "");
    return total;
  };
  return (
    <div className="card grey lighten-4 hoverable">
      <div className="card-content black-text">
        <span className="card-title">{event}</span>
        {/* {console.log(startDate)} */}
        <p style={{ fontFamily: "Oxygen" }}>
          <span style={{ fontWeight: "bold" }}>Start Date: </span>
          <Moment date={startDate} local /> <br />
          <span style={{ fontWeight: "bold" }}>When: </span>
          <Moment date={startDate} fromNow />
          <br />
          <span style={{ fontWeight: "bold" }}> Duration: </span>
          {durationModified()}
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
