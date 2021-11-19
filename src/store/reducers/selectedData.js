export const selectedDataReducer = (
  state = { names: [], year: "" },
  action
) => {
  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state,
        names: [...state.names, action.payload],
      };
    case "REMOVE_NAME":
      const newNames = state.names.filter((name) => name !== action.payload);
      return { ...state, names: newNames };
    case "SET_NAMES":
      return { ...state, names: action.payload };
    case "SET_YEAR":
      return { ...state, year: action.payload };
    default:
      return state;
  }
};
