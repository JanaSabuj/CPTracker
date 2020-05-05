import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_SITE_NAME,
  SET_LOCAL_CONTEST,
} from "./genericTypes";

import { addDays } from "../../utils/addDays";
import { epochCalculation } from "../../utils/epochCalculation";

export const fetchUsers = (name) => {
  const nextURLfetch = (resource__id) => {
    const left_limit = addDays(Date(), -90);
    const left_arr = [
      left_limit.getFullYear(),
      left_limit.getMonth() + 1,
      (left_limit.getDay() % 26) + 1,
    ];

    const left_date = left_arr.join("-");
    const URI2 = `/contest?resource__id=${resource__id}&start__gte=${
      left_date + "T00:00:00"
    }&order_by=-start`;
    return URI2;
  };

  const segregateContests = (allContests, siteName, dispatch) => {
    let tempObj = {
      live: [],
      past: [],
      future: [],
    };
    for (let i = 0; i < allContests.length; i++) {
      const { end, start } = allContests[i];
      const { startEpoch, endEpoch, presentEpoch } = epochCalculation(
        start,
        end
      );

      if (presentEpoch < startEpoch) tempObj["future"].push(allContests[i]);
      else if (presentEpoch <= endEpoch) tempObj["live"].push(allContests[i]);
      else tempObj["past"].push(allContests[i]);
    }
    tempObj["future"].reverse();
    dispatch(setLocalContest(siteName.toLowerCase(), tempObj));
  };

  const URI1 = `/resource?name__iregex=${name}`;
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(URI1)
      .then((response) => {
        const resource = response.data;
        const resArr = resource.objects;
        let lenRes = resArr.length;
        const resource__id = resArr[lenRes - 1].id;
        // cf special       
 
        // next axios
        const URI2 = nextURLfetch(resource__id);
        return axios.get(URI2);
      })
      .then((response) => {
        const allContests = response.data.objects;
        dispatch(setSiteName(name));
        segregateContests(allContests, name, dispatch);
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(
          fetchUsersFailure(
            "The server responded with a WA !!! Please try again"
          )
        );
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (info) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: info,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const setSiteName = (name) => {
  return {
    type: SET_SITE_NAME,
    payload: name,
  };
};

export const setLocalContest = (sitename, sitedata) => {
  return {
    type: SET_LOCAL_CONTEST,
    payload: [sitename, sitedata],
  };
};
