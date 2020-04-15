import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_SITE_NAME
} from "./genericTypes";

import { clistApiKey } from "../../auth/secret";
import { clistUrl } from "../../auth/secret";

export const fetchUsers = name => {
  const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const URI =
    proxyURL + clistUrl + "resource/?name__iregex=" + name + "&" + clistApiKey;
  console.log(URI);
  return dispatch => {
    dispatch(fetchUsersRequest());
    axios
      .get(URI)
      .then(response => {
        // response.data is the users
        const resource = response.data;
        const resource__id = resource.objects[0].id;
        // dispatch(fetchUsersSuccess(resource));
        const URI2 =
          clistUrl +
          "contest/?resource__id=" +
          resource__id +
          "&" +
          name +
          "&" +
          clistApiKey;

        console.log(URI2, "step2");
        return axios.get(proxyURL + URI2);
      })
      .then(response => {
        const allContests = response.data.objects;
        console.log(allContests, "final");
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
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
