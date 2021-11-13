export const plotTypeReducer = (state = "scatter", action) => {
  if (action.type === "SET_PLOT_TYPE") return action.payload;
  return state;
};
