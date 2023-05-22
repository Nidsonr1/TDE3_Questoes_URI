var input = require("fs").readFileSync("stdin", "utf-8");
var inputValues = input.split(" ");

let a = parseFloat(inputValues.shift());
let b = parseFloat(inputValues.shift());
let c = parseFloat(inputValues.shift());

let delta = (b*b)-(4*a*c);

if( delta < 0 || a === 0 ) {
  console.log("Impossivel calcular\n");
} else {
  x = (-b + Math.sqrt(delta))/(a+a);
  y = (-b - Math.sqrt(delta))/(a+a);
  
  console.log(`R1 = ${x.toFixed(5)}`);
  console.log(`R2 = ${y.toFixed(5)}`);
}