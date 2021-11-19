import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Grid, Box } from "@mui/material";

import NavBar from "./components/NavBar";
import OptionsList from "./components/OptionsList";
import ShowPlotButton from "./components/ShowPlotButton";
import store from "./store/store";

const App = () => {
  const [names, setNames] = useState([]);
  const [years, setYears] = useState([]);

  const fetchListItems = async (string) => {
    const res = await fetch(`http://localhost:5000/${string}`);
    const data = await res.json();
    if (string === "data") setNames(data);
    else setYears(data);
  };

  useEffect(() => {
    fetchListItems("data");
    fetchListItems("years");
  }, []);

  return (
    <>
      <Provider store={store}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={2}>
              <OptionsList
                listItems={names}
                storeName="selDataNames"
                listTitle="Data"
              />
            </Grid>
            <Grid item xs={2}>
              <OptionsList
                listItems={years}
                storeName="selDataYear"
                listTitle="Years"
                singleChoice
              />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{ marginLeft: "2em", alignItems: "flex-end" }}
            >
              <ShowPlotButton />
            </Grid>
          </Grid>
        </Grid>
      </Provider>
    </>
  );
};

export default App;
