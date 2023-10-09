import React, { useState } from "react";
import Chart from "react-apexcharts";


import "./Mychart.scss";

const Mychart = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
          style: {},
          borderRadius: 3,
          barPercentage: 100,
        },
      },
    },

    series: [
      {
        name: "Users",
        data: [500, 350, 200, 400],
        color: "#98D89E",
      },
      {
        name: "Guest",
        data: [400, 450, 300, 350],
        color: "#EE8484",
      },
    ],
  });

  return (
    <div className="chart-div">
      <h1 className="text">Activities</h1>
      <div className="chart">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          height="220px"
        />
      </div>
    </div>
  );
};

export default Mychart;
