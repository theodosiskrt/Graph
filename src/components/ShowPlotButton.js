import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";

import { setPlotData } from "../store/actions";

const ShowPlotButton = () => {
  const selectedNames = useSelector((state) => state.selectedData.names);

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
  return (
    <Button onClick={fetchAndSetPlotData} variant="contained" fullWidth>
      Show Plot
    </Button>
  );
};

export default ShowPlotButton;
