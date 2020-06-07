/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        1, 2, 3, 4, 5, 6, 7
      ],
      datasets: [
      {
        data: [
          0.1, 0.09, 0.06, 0.06, 0.045, 0.04, 0.04
        ],
        lineTension: 0,
        backgroundColor: "rgba(0,123,255,0.3)",
        borderColor: "rgba(0,123,255,1.0)",
        borderWidth: 4,
        pointBackgroundColor: "rgba(0,123,255,1.0)",
        fill: 'start'
    }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
    },
      plugins: {
          filler: {
              propagate: true
          }
      }
    }
  })
}())
