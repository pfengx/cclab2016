// each moon
var data = [
  { "number": "100, 100", 
    "label": "Full Moon", 
    "fill": "#FFFFF"
  }
  // {"label": "Full Moon", "fill": "#FFFFF", "startAngle": 100, "endAngle":0},
  // {"label": "First Quarter", "fill": "red", "startAngle": 100, "endAngle":100},
  // {"label": "Third Quarter", "fill": "blue", "startAngle": 100, "endAngle":0},
  // {"label": "New Moon", "fill": "#FFFFF", "startAngle": 100, "endAngle":0}

];

var arcs = d3.pie().value(function(d) { return d.number; })(data);

//margin
var m = 20;
//radius
var r = 100; 

var svg = d3.select("body").selectAll("svg")
  .data(arcs)
  .enter().append("svg")
  .attr("width", (r + m) * 2)
  .attr("height", (r + m) * 2)
  .append("g")
  .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

svg.selectAll("path")
  .data(arcs)
  .enter().append("path")
    .attr("d", d3.arc(arcs) //start and end angles?
      .innerRadius(0)
      .outerRadius(r))
  .style("fill", function(d) { return (d.fill); });