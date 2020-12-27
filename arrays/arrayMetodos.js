const pilotos = ['Vetell', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen'); // adiciona ao fim do array
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona um elemento na primeira posição do array
console.log(pilotos);

pilotos.splice(2, 0, 'Bottas', 'Massa'); // adiciona um elemento por posição no array
console.log(pilotos);

pilotos.splice(3, 1); // remove um elemento por posição no array
console.log(pilotos);

const ultimoColocados = pilotos.slice(3); // retorna um novo array, a partir da posição 3 do array base
console.log(ultimoColocados);

// retorna um novo array, a partir de uma determinada posição e a quantidade de elementos
// o segundo parametro, não é a quantidade de elementos que vai existir no novo arrays
// a partir do primeiro parametro ele pega as posições ate o valor do segundo parametro
const podio = pilotos.slice(0, 3); // retorna elementos em 0,1,2 - 3 não entra
console.log(podio);