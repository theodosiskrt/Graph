import React from "react";
import { Provider } from "react-redux";

import NavBar from "./components/NavBar";
import store from "./store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
      </Provider>
    </>
  );
};

export default App;
