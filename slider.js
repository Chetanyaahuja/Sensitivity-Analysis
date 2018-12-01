var ticksMapping = {
  10: '1 Cluster',
  20: '2 Cluster',
  30: '3 Cluster',
  40: '4 Cluster',
  50: '5 Cluster',
  60: '6 Cluster'
};
// With JQuery
$("#ex13").slider({
  tooltip: 'hide',
  step: 10,
  ticks: [10, 20, 30, 40, 50, 60],
  ticks_labels: ['', '', '', '', '', ''],
  value: 10
}).on('change', function(obj){
  var n = obj.value.newValue;
  if(n === 30)
  {
    document.getElementById('myImage').src='cluster3.png';
  }
  else if(n === 40)
  {
    document.getElementById('myImage').src='cluster4.png';
  }
  else if(n === 10)
  {
    document.getElementById('myImage').src='cluster1.png';
  }
  else if(n === 20)
  {
    document.getElementById('myImage').src='cluster2.png';
  }
  else if(n === 50)
  {
    document.getElementById('myImage').src='cluster5.png';
  }
  else
  {
    document.getElementById('myImage').src='cluster6.png';
  }
  
});



