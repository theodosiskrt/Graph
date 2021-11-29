export const plotDataReducer = (
  state = { data: [], type: "scatter", year: "" },
  action
) => {
  switch (action.type) {
    case "SET_PLOT_TYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "SET_PLOT_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_PLOT_YEAR":
      return {
        ...state,
        year: action.payload,
      };
    default:
      return state;
  }
};
