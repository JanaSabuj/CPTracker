import React, { useEffect, useState } from "react";
import GenericContest from "./GenericContest";
import NoContest from "./NoContest";

const GenericWrapper = (props) => {
  const [localState, setLocalState] = useState([]);
  const [isDataPresent, setIsDataPresent] = useState(true);
  const { data, contestType, contestName } = props;
  useEffect(() => {
    let useful = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].name === contestName) {
        useful = data[i].data[contestType];
        break;
      }
    }

    setLocalState(useful);
    useful.length > 0 ? setIsDataPresent(true) : setIsDataPresent(false);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {localState.length === 0 && isDataPresent === true ? (
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      ) : !isDataPresent ? (
        <NoContest contestName={contestName} contestType={contestType} />
      ) : (
        localState.map((contest) => (
          <GenericContest
            key={contest.id}
            contest={contest}
            contestType={contestType}
          />
        ))
      )}
    </>
  );
};

export default GenericWrapper;
