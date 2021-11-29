import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography, Grid } from "@mui/material";

import { setPlotData, setPlotType, setPlotYear } from "../store/actions";

const ShowPlotButton = () => {
  const selectedNames = useSelector((state) => state.selectedData.names);
  const selectedYear = useSelector((state) => state.selectedData.year);
  const selectedType = useSelector((state) => state.selectedData.type);

  const plotType = useSelector((state) => state.plotData.type);
  const plotData = useSelector((state) => state.plotData.data);
  const plotYear = useSelector((state) => state.plotData.year);

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
    dispatch(setPlotData(data));
    dispatch(setPlotYear(selectedYear));
    dispatch(setPlotType(selectedType));
  };

  const errorText = !selectedNames.length
    ? "Select at least 1 company name."
    : !selectedYear
    ? "Select a year."
    : false;

  const areNamesDifferent = () => {
    let found = false;
    if (plotData.length !== selectedNames.length) return true;
    plotData.map((data, idx) => {
      if (data.name !== selectedNames[idx]) found = true;
    });
    return found;
  };

  const isDisabled =
    selectedType === plotType &&
    selectedYear === plotYear &&
    !areNamesDifferent();

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
          disabled={errorText || isDisabled}
        >
          Show Plot
        </Button>
      </Grid>
    </Grid>
  );
};

export default ShowPlotButton;
