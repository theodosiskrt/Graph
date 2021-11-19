import React from "react";
import Plotly from "react-plotly.js";

const Plot = () => {
  return (
    <Plotly
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
        { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
      ]}
      layout={{ autosize: true, width: 900, title: "A Fancy Plot" }}
    />
  );
};

export default Plot;
