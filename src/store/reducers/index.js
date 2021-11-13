import { combineReducers } from "redux";

import { plotTypeReducer } from "./plotType";
import { selDataNamesReducer } from "./selDataNames";

const allReducer = combineReducers({
  plotType: plotTypeReducer,
  selDataNames: selDataNamesReducer,
});

export default allReducer;
