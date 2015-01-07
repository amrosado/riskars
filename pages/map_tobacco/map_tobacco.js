var hits = {};

var dgi = {};  //dave gutman inspector variable

var parade = window.histograms.states;

for (var i = 0 ; i<parade.length ; i++)
    hits[parade[i].name] = parade[i].hits;

var width = 960,
    height = 500,
    centered;

var projection = d3.geo.albersUsa()
    .scale(width)
    .translate([0, 0]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height)
    .on("click", click);

var g = svg.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
  .append("g")
    .attr("id", "states");

d3.json("states.json", function(json) {

  var heatmap = d3.scale.linear()
    .domain([0,d3.max(json.features, function(d) { return Math.log(hits[d.properties.abbr] || 1); })])
    .interpolate(d3.interpolateRgb)
    .range(["#ffffff","#073f07"])

  var states = g.selectAll("path")
    .data(json.features)
    .enter().append("path")
      .attr("d", path)
      .attr("id", function(d) { return d.properties.abbr; })
      .style("fill", function(d) { return heatmap(Math.log(hits[d.properties.abbr] || 1)); })
      .on("click", click)
   
  //need to add an on hover event

//    var dyn_update = g.selectAll(
  var hvr_states = g.selectAll("path")
    .data(json.features)
    .enter().append("path")
      .attr("d", path)
      .attr("id", function(d) { return d.properties.abbr; })
      .style("fill", function(d) { return heatmap(Math.log(hits[d.properties.abbr] || 1)); })
      .on("mouseover", mouse_stuff)
   



  var labels = g.selectAll("text")
    .data(json.features)
    .enter().append("text")
      .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
      .attr("id", function(d) { return 'label-'+d.properties.abbr; })
      .attr("dy", ".35em")
      .on("click", click)
      .text(function(d) { return d.properties.abbr; });
});


function mouse_stuff(d)
   {
  console.log('I HOVER!!');
   }

function click(d) {
  var x = 0,
      y = 0,
      k = 1;

   console.log('I CLICKED SOMETHING');

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = -centroid[0];
    y = -centroid[1];
    k = 4;
    centered = d;
  } else {
    centered = null;
  }

  g.selectAll("path")
      .classed("active", centered && function(d) { return d === centered; });
  g.selectAll("text")
      .text(function(d) { return d.properties.abbr; })
      .classed("active",false);
   

   console.log(d.properties.abbr+' is what I think I clicked on?');
    
    // d.properties stores all the fun info for the box

    box_text = d.properties.name+' is abbreviation as ' + d.properties.abbr
    
    $('#dg_pg').text(box_text);

     dgi = d.properties;

  if (centered) {
      g.select("#label-"+centered.properties.abbr)
          .text(function(d) { return d.properties.name+': '+(hits[d.properties.abbr]||'(none)'); })
          .classed("active", centered && function(d) { return d === centered; });
  }

  g.transition()
      .duration(1000)
      .attr("transform", "scale(" + k + ")translate(" + x + "," + y + ")")
      .style("stroke-width", 1.5 / k + "px");
};
