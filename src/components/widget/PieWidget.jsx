import React from 'react';
import Chart from "react-apexcharts";

export default function PieWidget() {
const data = {
  options: {
    chart: {
      width: 380,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }

      }}],
      plotOptions: {
        pie: {
          donut: {
            size: '80%', // Control the size of the donut hole
          },
        },
      },
      colors: ['#98D89E', '#F6DC7D', '#EE8484'],
      labels: ['Basic Tree', 'Custom Hot Pant', 'Super Hoodie'],
      legend: {
        onItemClick: {
          toggleDataSeries: false
        },
        onItemHover: {
          highlightDataSeries: false
        },

        fontFamily: "Montserrat",
        fontSize: '14px',
        fontWeight: '700',
        marginBottom: '2rem'
      },
    },
    series: [55, 31, 14],
};

  return (
      <div className="widget"  style={{minHeight:"240px",minWidth:"350px", width: '480px', height: '256px'}} >
      <div className='left'>
        <span className="title1" >Top products</span>
        <span className='pie' > <Chart  options={data.options} series={data.series} type="donut" height="300px" /></span>
      </div>
      <div className="right">
     <p className='ptag'> May - June 2021</p>
      </div>
    </div>
  )
}