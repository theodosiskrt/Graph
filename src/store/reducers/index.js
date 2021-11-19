import { combineReducers } from "redux";

import { plotTypeReducer } from "./plotType";
import { selectedDataReducer } from "./selectedData";

const allReducer = combineReducers({
  plotType: plotTypeReducer,
  selectedData: selectedDataReducer,
});

export default allReducer;
