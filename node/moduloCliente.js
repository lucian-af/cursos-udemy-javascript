const moduloA = require('./moduloA'); // ES5
const moduloB = require('./moduloB'); // ES5

console.log(moduloB.bomDia);
console.log(moduloA.ateLogo);
console.log(moduloB.boaNoite());
console.log(this === moduloA);