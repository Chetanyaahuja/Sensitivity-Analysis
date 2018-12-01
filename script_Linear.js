d3.csv("austin_weather.csv", function(data) {
  function xdata()
        {
            var value = [ ]
            for (var i = 0; i < data.length; i++) {
                value.push(data[i].TempAvgF);
            }
            return value;
        }
        function ydata()
        {
            var value = [ ]
            for (var i = 0; i < data.length; i++) {
                value.push(data[i].HumidityAvgPercent);
            }
            return value;
        }


    var trace1 = {
  x: xdata(),
  y: ydata(),
  opacity:0.7,
  mode: 'markers',
  type: 'scatter',
  name: 'Team A',
  text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
  marker: { size: 12 }
};


var data = [ trace1 ];

var layout = { 
  scene:{
      aspectmode: "manual", 
     aspectratio: { 
          x: 1, 
        y: 1,
   }}, 
  xaxis: {
    title: 'Average Temperature(In F)',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
    // nticks: 50,
    // range: [ 0, 100 ] 
  },
  yaxis: {
    title: 'Average Humidity(In Percentage)',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
    // nticks: 50,
    // range: [0, 100]
  },
  width: 640,
  height: 500,
  title:'Analizing Temperature and Humidity correlations'
};

Plotly.newPlot('myDiv', data, layout);
});


