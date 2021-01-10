// não aceita repetição e não é indexado
const times = new Set()
times.add('São Paulo').add('Palmeiras').add('São Paulo').add('Flamengo').add('Vasco');

console.log(times);
console.log(times.size);
console.log(times.has('vasco')); // retorna false, ele é case sensitive
console.log(times.has('Vasco'));
times.delete('Flamengo');
console.log(times.has('Flamengo'));

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet);