var input = require('fs').readFileSync('stdin', 'utf8');
var inputValues = input.split('\n');


const result = ["sena", "quina", "quadra", "terno", "azar", "azar", "azar"];

let bet = inputValues.shift().trim().split(' ').map((x) => parseInt(x));
let drawn = inputValues.shift().trim().split(' ').map((y) => parseInt(y));

bet = new Set(bet);

for(let i = 0; i < 6; ++i){
    bet.delete(drawn[i]);
}
console.log(bet)
console.log(result[bet.size]);