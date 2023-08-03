import React from "react";

import ChartBar from "./ChartBar"

import "./Chart.css"

const Chart = (props) => {
  const dataPointsValues =  props.dataPoints.map(dataPoints => dataPoints.value)
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
    {props.dataPoints.map((items) => (
      <ChartBar
      key={items.label}
      value={items.value}
      maxValue={totalMaximum}
      label={items.label}
      />
    ))}
    </div>
  );
}

export default Chart;