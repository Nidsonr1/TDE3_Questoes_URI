var input = require('fs').readFileSync('stdin', 'utf8');
var inputValues = input.split('\n');

let limit = parseInt(inputValues.shift());

let repeat = Array(2001);
repeat.fill(0);

for (let i = 0; i < limit; i++) {
  let aux = parseInt(inputValues.shift());

  repeat[aux] += 1;
}

for (let count = 1; count < 2001; count++) {
  if (repeat[count] > 0) console.log(`${count} aparece ${repeat[count]} vez(es)`);
}