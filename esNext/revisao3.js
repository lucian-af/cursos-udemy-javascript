// ES8 Object.values/Object.entries
// Object.values retorna os valores de um objeto
// Object.entries retorna uma matriz do objeto, transformando chaves e valores em arrays, 
// dentro de um array principal

const obj1 = { nome: 'Lucian', idade: 31 };
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

// Melhorias na Notação Literal
const nome = 'Carla';
const pessoa = {
    nome,
    ola() { return 'Olá!' }
}
console.log(pessoa.nome, pessoa.ola());

// Class
class Animal { }
class Cachorro extends Animal {
    falar() { return 'Au au!' }
}

console.log(new Cachorro().falar());