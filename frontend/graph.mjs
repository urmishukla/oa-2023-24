const graphDiv = document.getElementById("graph");



/*d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/earthquakes-23k.csv',
  function(err, rows){function unpack(rows, key) {return rows.map(function(row){ return row[key];
})};*/

d3.csv('../aqi.csv',
  function(err, rows){function unpack(rows, key) {return rows.map(function(row){ return row[key];
})};

var data = [{
  lon: unpack(rows, 'lng'), lat: unpack(rows, 'lat'), radius:10,
  z: unpack(rows, 'AQI Value'), type: "densitymapbox", coloraxis: 'coloraxis',
  hoverinfo: 'skip'}];

var layout = {
    mapbox: {center: {lon: 60, lat: 30}, style: "outdoors", zoom: 2},
    coloraxis: {colorscale: "Viridis"}, title: {text: "AQI Levels Around the World"},
    width: 600, height: 400, margin: {t: 30, b: 0}};

var config = {mapboxAccessToken: "pk.eyJ1IjoidXJtaXNodWtsYSIsImEiOiJjbG1vOGVhdzAwbHptMnFtcDhlZmNreWgwIn0.BfVcM7vRkYQAxltlUwFDDg"};

Plotly.newPlot(graphDiv, data, layout, config);
})

