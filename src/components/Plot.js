import React from "react";
import Plotly from "react-plotly.js";
import { useSelector } from "react-redux";

const Plot = () => {
  const plotType = useSelector((state) => state.plotData.type);
  const plotData = useSelector((state) => state.plotData.data);
  const plotYear = useSelector((state) => state.plotData.year);

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
    plotData && (
      <Plotly
        data={plotData.map((data, idx) => ({
          y: data[plotYear],
          x: ["Jan", "March", "May", "July", "September", "November"],
          type: plotType,
          mode: "lines+markers",
          marker: { color: colors[idx] },
          name: data.name,
        }))}
        layout={{ autosize: true, width: 900, title: plotType }}
      />
    )
  );
};

export default Plot;
