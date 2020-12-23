// formas de fazer uma introspecção com os objetos, espécie de reflection
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
// retorna as chaves/atributos do objeto
console.log(Object.keys(pessoa));
// retorna os valores dos atributos
console.log(Object.values(pessoa));
// retorna um array de chave e valor separado pra cada atributo do objeto
console.log(Object.entries(pessoa));
// retorna um array de chave e valor separado pra cada atributo do objeto
console.log(Object.entries(pessoa));
// opcao de destructuring com o entries
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});
// podemos usar essa forma para definir algumas caracteristicas para determinado atributo
// como enumerable: pode ser listada quando eu chamar um Object.keys ?
// pode ser sobrescrita ? espécie de freeze somente para a propriedade e não para o objeto todo
// value: para definir um valor default
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
});
pessoa.dataNascimento = '01/01/2017'; // não surti efeito
console.log(pessoa.dataNascimento); // mostra a data que foi definida na criacao da propriedade
console.log(Object.keys(pessoa)); // se enumerable for false, a propriedade não será demonstrada
// Object.assign (ES2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
// incorpora objetos dentro de um objeto base
// o primeiro parametro deste método é o objeto base, os outros N objetos serão incorporados 
// ao objeto base e as propriedades com mesmo nome, serão sobrescritas, incrementando o seu valor
const obj = Object.assign(dest, o1, o2);
console.log(obj);