import dashboardReducer from "./dashboard/dashboardReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dashboardReducer: dashboardReducer
});

export default rootReducer;
