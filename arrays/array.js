console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo'; // variação de adição em um array
console.log(aprovados[3]);
aprovados.push('Abia'); // variação de adição em um array
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort() // ordenação alfabética, altera o array
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
// splice, adiciona e remove elementos através de um determinado índice
// 1º parâmetro é a posição inicial que vamos manipular 
// 2º parâmetro é a quantidade de elementos que queremos remover a partir do 1º parâmetro
// 3º parâmetro(n...) em diante são os elementos que quero adicionar a partir do 1º parâmetro
aprovados.splice(1, 1); // remove 1 elemento a partir da posição 1, a posição 1 entra na jogada
console.log(aprovados);
aprovados.splice(1, 2); // remove 2 elementos a partir da posição 1, a posição 1 entra na jogada
console.log(aprovados);
aprovados.splice(1, 0, 'Francisco', 'Miguel'); // não remove elementos e adiciona 2 elementos a partir da posição 1
console.log(aprovados);