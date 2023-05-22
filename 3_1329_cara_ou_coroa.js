var input = require('fs').readFileSync('stdin', 'utf8');
var inputValues = input.split('\n');

while(inputValues.length) {
  let N = parseInt(inputValues.shift());

  if(!N)  break;

  let maria = inputValues.shift().trim().split(" ").map((x) => parseInt(x)).reduce((acc, curr) => (!curr ? acc + 1 : acc), 0);
  
  let joao = N - maria;

  console.log(`Mary won ${maria} times and John won ${joao} times`);
}