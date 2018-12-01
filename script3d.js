Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv', function(err, rows){
    function getrandom(num , mul) 
    {
       var value = [ ]  
        for(i=0;i<=num;i++)
       {
         rand = Math.random() * mul;
        value.push(rand);
       }
        return value;
    }

    

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
        function zdata()
        {
            var value = [ ]
            for (var i = 0; i < data.length; i++) {
                value.push(data[i].DewPointAvgF);
            }
            return value;
        }


var data=[
    {
      opacity:0.7,
      size:0.5,
        type: 'scatter3d',
      x: xdata(),
      y: ydata(),
      z: zdata(),
      mode:'markers'
    },
    
];
var layout = {
  scene:{
      aspectmode: "manual", 
     aspectratio: { 
          x: 1, 
        y: 0.7,
          z: 1,
   }, 
    xaxis: {
    title: 'Average Temp(°F)',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    },
    nticks: 40,
    range: [0, 100],
  },
  yaxis: {
    title: 'Average Humidity',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    },
    nticks: 40,
    range: [0, 100],
  },
  zaxis: {
    title: 'Average Dew Point',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    },
    nticks: 40,
    range: [0, 100],
  }},
   autosize: false,
  width: 1000,
  height: 800,
  margin: {
    l: 0,
    r: 0,
    b: 40,
    t: 40,
    pad: 4
  },
};
Plotly.newPlot('myDiv1', data, layout);
});

});
