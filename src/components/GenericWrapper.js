import React, { useEffect, useState } from "react";
import GenericContest from "./GenericContest";

const GenericWrapper = props => {
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
      setLocalState(useful);
    }
    // console.log(useful, contestType, "here");
    setLocalState(useful);
    useful.length > 0 ? setIsDataPresent(true) : setIsDataPresent(false);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {localState.length === 0 && isDataPresent === true ? (
        <div class="preloader-wrapper active">
          <div class="spinner-layer spinner-red-only">
            <div class="circle-clipper left">
              <div class="circle" />
            </div>
            <div class="gap-patch">
              <div class="circle" />
            </div>
            <div class="circle-clipper right">
              <div class="circle" />
            </div>
          </div>
        </div>
      ) : !isDataPresent ? (
        <div> No contests </div>
      ) : (
        localState.map(contest => (
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
