import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Grid } from "@mui/material";

import NavBar from "./components/NavBar";
import OptionsList from "./components/OptionsList";
import ShowPlotButton from "./components/ShowPlotButton";
import Plotly from "./components/Plot";

import store from "./store/store";

const App = () => {
  const [names, setNames] = useState([]);
  const [years, setYears] = useState([]);

  const fetchListItems = async (string) => {
    const res = await fetch(`http://localhost:5000/${string}`);
    const data = await res.json();
    return data;
  };

  useEffect(async () => {
    let data = await fetchListItems("data");
    setNames(data);
    data = await fetchListItems("years");
    setYears(data);
  }, []);

  return (
    <>
      <Provider store={store}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item container xs={12} columnSpacing={5}>
            <Grid item xs={2} marginLeft={2}>
              <OptionsList
                listItems={names}
                storeName="names"
                listTitle="Data"
              />
            </Grid>
            <Grid item xs={2}>
              <OptionsList
                listItems={years}
                storeName="year"
                listTitle="Years"
                singleChoice
              />
            </Grid>
            <Grid item container xs={2} alignItems="flex-end">
              <ShowPlotButton />
            </Grid>
            <Grid item container xs={5}>
              <Plotly />
            </Grid>
          </Grid>
        </Grid>
      </Provider>
    </>
  );
};

export default App;
