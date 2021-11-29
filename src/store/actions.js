//selectedDataReducer
export const addSelDataName = (data) => ({
  type: "ADD_DATA_NAME",
  payload: data,
});
export const removeSelDataName = (data) => ({
  type: "REMOVE_DATA_NAME",
  payload: data,
});
export const setSelDataNames = (data) => ({
  type: "SET_DATA_NAMES",
  payload: data,
});
export const setSelDataYear = (data) => ({
  type: "SET_DATA_YEAR",
  payload: data,
});
export const setSelDataPlotType = (data) => ({
  type: "SET_DATA_TYPE",
  payload: data,
});
//plotDataReducer
export const setPlotType = (data) => ({ type: "SET_PLOT_TYPE", payload: data });
export const setPlotData = (data) => ({ type: "SET_PLOT_DATA", payload: data });
export const setPlotYear = (data) => ({ type: "SET_PLOT_YEAR", payload: data });
