//selectedDataReducer
export const addSelDataName = (data) => ({ type: "ADD_NAME", payload: data });
export const removeSelDataName = (data) => ({
  type: "REMOVE_NAME",
  payload: data,
});
export const setSelDataNames = (data) => ({ type: "SET_NAMES", payload: data });
export const setSelDataYear = (data) => ({ type: "SET_YEAR", payload: data });
//plotDataReducer
export const setPlotType = (data) => ({ type: "SET_TYPE", payload: data });
export const setPlotData = (data) => ({ type: "SET_DATA", payload: data });
