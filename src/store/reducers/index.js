import { combineReducers } from "redux";

import { plotTypeReducer } from "./plotType";

const allReducer = combineReducers({ plotType: plotTypeReducer });

export default allReducer;
