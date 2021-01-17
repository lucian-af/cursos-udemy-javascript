/*
  Map:
    Transforma um array de objetos em outro array de objetos com base na lógica aplicada
    Não altera o array original
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dobro = array.map(item => item * 2);
console.log(`Array: ${array} - Dobro: ${dobro}`);

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa'];
const letras = nomes.map(item => item[0]);
console.log(`Nomes: ${nomes} - Letras: ${letras}`);
console.log(nomes, letras);
