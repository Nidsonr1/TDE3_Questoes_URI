var input = require('fs').readFileSync('stdin', 'utf8');
var inputValues = input.split('\n');

var n = parseInt(inputValues.shift());

var x = ((1 + Math.sqrt(5)) / 2.0);
var y = ((1 - Math.sqrt(5)) / 2.0);

const res = (Math.pow(x, n) - Math.pow(y, n)) / Math.sqrt(5);

console.log(res.toFixed(1));