import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_SITE_NAME,
  SET_LOCAL_CONTEST
} from "./genericTypes";

import { clistApiKey } from "../../auth/secret";
import { clistUrl } from "../../auth/secret";
import { proxyURL } from "../../auth/secret";
import { addDays } from "../../utils/addDays";
import { epochCalculation } from "../../utils/epochCalculation";

export const fetchUsers = name => {
  const nextURLfetch = resource__id => {
    const left_limit = addDays(Date(), -90);
    const left_arr = [
      left_limit.getFullYear(),
      left_limit.getMonth() + 1,
      left_limit.getDay()
    ];

    const left_date = left_arr.join("-");
    const URI2 =
      proxyURL +
      clistUrl +
      "contest/?resource__id=" +
      resource__id +
      "&start__gte=" +
      left_date +
      "T00:00:00" +
      "&order_by=-start" +
      "&" +
      clistApiKey;

    return URI2;
    //https://clist.by:443/api/v1/contest/?resource__id=2&start__gte=2019-10-18T00%3A00%3A00&order_by=start
  };

  const segregateContests = (allContests, siteName, dispatch) => {
    let tempObj = {
      live: [],
      past: [],
      future: []
    }; // will be named codechef later

    for (let i = 0; i < allContests.length; i++) {
      const { end, start } = allContests[i];
      const { startEpoch, endEpoch, presentEpoch } = epochCalculation(
        start,
        end
      );

      if (presentEpoch < startEpoch) tempObj["future"].push(allContests[i]);
      else if (presentEpoch <= endEpoch) tempObj["live"].push(allContests[i]);
      else tempObj["past"].push(allContests[i]);
      // console.log(tempObj);
      // console.log(props.siteName.toLowerCase());
    }
    tempObj["future"].reverse();
    dispatch(setLocalContest(siteName.toLowerCase(), tempObj));
  };

  const URI1 =
    proxyURL + clistUrl + "resource/?name__iregex=" + name + "&" + clistApiKey;
  return dispatch => {
    dispatch(fetchUsersRequest());
    axios
      .get(URI1)
      .then(response => {
        const resource = response.data;
        const resArr = resource.objects;
        let lenRes = resArr.length;
        const resource__id = resArr[lenRes - 1].id;
        // next axios
        const URI2 = nextURLfetch(resource__id);
        // console.log(URI2, "step2");
        return axios.get(URI2);
      })
      .then(response => {
        const allContests = response.data.objects;
        // console.log(allContests, "final");
        dispatch(setSiteName(name));
        segregateContests(allContests, name, dispatch);
        // dispatch(fetchUsersSuccess(allContests));
      })
      .catch(error => {
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
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = info => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: info
  };
};

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

export const setSiteName = name => {
  return {
    type: SET_SITE_NAME,
    payload: name
  };
};

export const setLocalContest = (sitename, sitedata) => {
  return {
    type: SET_LOCAL_CONTEST,
    payload: [sitename, sitedata]
  };
};
