import { combineReducers } from "redux";

import { plotTypeReducer } from "./plotType";
import { selDataNamesReducer } from "./selDataNames";
import { selDataYearReducer } from "./selDataYear";

const allReducer = combineReducers({
  plotType: plotTypeReducer,
  selDataNames: selDataNamesReducer,
  selDataYear: selDataYearReducer,
});

export default allReducer;
