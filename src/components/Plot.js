import React from "react";
import Plotly from "react-plotly.js";
import { useSelector } from "react-redux";

const Plot = () => {
  const plotType = useSelector((state) => state.plotData.type);
  const plotData = useSelector((state) => state.plotData.data);
  console.log(plotData);

  const colors = [
    "red",
    "black",
    "green",
    "yellow",
    "orange",
    "purple",
    "blue",
    "pink",
  ];

  return (
    <Plotly
      data={plotData.map((data, idx) => ({
        y: data,
        x: ["Jan", "March", "May", "July", "September", "November"],
        type: plotType,
        mode: "lines+markers",
        marker: { color: colors[idx] },
      }))}
      layout={{ autosize: true, width: 900, title: "A Fancy Plot" }}
    />
  );
};

export default Plot;
