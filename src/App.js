import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Grid } from "@mui/material";

import NavBar from "./components/NavBar";
import MultichoiceList from "./components/MultichoiceList";
import store from "./store/store";

const App = () => {
  const [listItems, setListItems] = useState([]);

  const fetchListItems = async () => {
    const res = await fetch("http://localhost:5000/data");
    const data = await res.json();
    setListItems(data);
  };

  useEffect(() => {
    fetchListItems();
  }, []);

  return (
    <>
      <Provider store={store}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item container>
            <Grid item xs={2}>
              <MultichoiceList listItems={listItems} />
            </Grid>
          </Grid>
        </Grid>
      </Provider>
    </>
  );
};

export default App;
