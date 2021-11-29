import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography, Grid } from "@mui/material";

import { setPlotData } from "../store/actions";

const ShowPlotButton = () => {
  const selectedNames = useSelector((state) => state.selectedData.names);
  const selectedYear = useSelector((state) => state.selectedData.year);

  const dispatch = useDispatch();

  const fetchAndSetPlotData = async () => {
    const res = await fetch(
      `http://localhost:5000/plotData?${selectedNames
        .map((name, idx) =>
          idx !== selectedNames.length - 1 ? `name=${name}&` : `name=${name}`
        )
        .join("")}`
    );

    const data = await res.json();
    dispatch(setPlotData(data.map((data) => data.x)));
  };

  const errorText = !selectedNames.length
    ? "Select at least 1 company name."
    : !selectedYear
    ? "Select a year."
    : false;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="subtitle2"
          align="center"
          style={{ color: "#aaa" }}
        >
          {errorText}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={fetchAndSetPlotData}
          variant="contained"
          fullWidth
          disabled={errorText}
        >
          Show Plot
        </Button>
      </Grid>
    </Grid>
  );
};

export default ShowPlotButton;
