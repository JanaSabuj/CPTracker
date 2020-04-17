import dashboardReducer from "./dashboard/dashboardReducer";
import genericReducer from "./generic/genericReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dashboardReducer: dashboardReducer,
  genericReducer: genericReducer
});

export default rootReducer;
