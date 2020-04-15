import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_SITE_NAME
} from "./genericTypes";

const initialState = {
  loading: false,
  error: "",
  siteName: "",
  siteInfo: []
};

const genericReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        siteInfo: action.payload
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        siteInfo: [],
        error: action.payload
      };
    case SET_SITE_NAME:
      return {
        ...state,
        siteName: action.payload
      };
    default:
      return state;
  }
};

export default genericReducer;
