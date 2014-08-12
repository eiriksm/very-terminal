var $ = require('NodObjC');
var gui = require('nw.gui');
window.frame = gui.Window.get();
window.frame.on('focus', setActive);

$.framework('Foundation');
$.framework('AppKit');

var t = $.NSWorkspace('sharedWorkspace');
var windowCounts = {};
setInterval(function() {
  var w = t('frontmostApplication');
  var n = w('localizedName');
  windowCounts[n] = windowCounts[n] || 0;
  windowCounts[n]++;
}, 1000);


function renderChart() {
  var data = [];

  for (var prop in windowCounts) {
    if (windowCounts.hasOwnProperty(prop)) {
      data.push({
        value: windowCounts[prop],
        label: prop,
        color: '#'+ Math.floor(Math.random()*16777215).toString(16)
      });
    }
  }
  var ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx).Doughnut(data, {
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
  });
}

function setActive(e) {
  renderChart();
}
