export const selDataNamesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NAME":
      return [...state, action.payload];
    case "REMOVE_NAME":
      const newState = state.filter((name) => name !== action.payload);
      return newState;
    case "SET_NAMES":
      return action.payload;
    default:
      return state;
  }
};
