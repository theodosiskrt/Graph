import { combineReducers } from "redux";

import { plotDataReducer } from "./plotData";
import { selectedDataReducer } from "./selectedData";

const allReducer = combineReducers({
  plotData: plotDataReducer,
  selectedData: selectedDataReducer,
});

export default allReducer;
