//plotTypeReducer
export const setPlotType = (data) => ({ type: "SET_PLOT_TYPE", payload: data });

//selDataNamesReducer
export const addSelDataName = (data) => ({ type: "ADD_NAME", payload: data });
export const removeSelDataName = (data) => ({
  type: "REMOVE_NAME",
  payload: data,
});
export const setSelDataNames = (data) => ({ type: "SET_NAMES", payload: data });
