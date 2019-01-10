var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(obj) {
  var xsquar = obj.x * obj.x
  var ysquar = Math.pow(obj.y, 2)
  return Math.sqrt(xsquar + ysquar)
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);