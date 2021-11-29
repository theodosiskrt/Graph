export const plotDataReducer = (state = { data: [], type: "" }, action) => {
  switch (action.type) {
    case "SET_TYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
