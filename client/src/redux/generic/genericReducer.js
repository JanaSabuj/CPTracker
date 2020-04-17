import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_SITE_NAME,
  SET_LOCAL_CONTEST
} from "./genericTypes";

const initialState = {
  loading: false,
  error: "",
  siteName: "",
  localStorage: []
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
    case SET_LOCAL_CONTEST:
      const name = action.payload[0];
      const data = action.payload[1];
      return {
        ...state,
        loading: false,
        localStorage: [...state.localStorage, { name: name, data: data }]
      };
    default:
      return state;
  }
};

export default genericReducer;
