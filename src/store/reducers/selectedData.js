export const selectedDataReducer = (
  state = { names: [], year: "", type: "scatter" },
  action
) => {
  switch (action.type) {
    case "ADD_DATA_NAME":
      return {
        ...state,
        names: [...state.names, action.payload].sort(),
      };
    case "REMOVE_DATA_NAME":
      const newNames = state.names.filter((name) => name !== action.payload);
      return { ...state, names: newNames };
    case "SET_DATA_NAMES":
      return { ...state, names: action.payload };
    case "SET_DATA_YEAR":
      return { ...state, year: action.payload };
    case "SET_DATA_TYPE":
      return { ...state, type: action.payload };
    default:
      return state;
  }
};
