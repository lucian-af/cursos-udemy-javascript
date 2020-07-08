// Aula 41 - Novo recurso do ES2015
// Destructuring -  operador de desestruturação, é uma forma de tirar da estrutura algo

const pessoa = {
    nome: 'Ana',
    idade: 19,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 2444
    }
}

// explicando: tire de dentro do objeto pessoa algo(algo = nome e idade)
const {
    nome,
    idade
} = pessoa
console.log(nome, idade)

// forma de renomear os atributos que foram extraidos de pessoa
const {
    nome: n,
    idade: i
} = pessoa
console.log(n, i)

const {
    sobrenome,
    bemHumorada = true
} = pessoa
console.log(sobrenome, bemHumorada)

const {
    endereco: {
        logradouro,
        numero,
        cep
    }
} = pessoa
console.log(logradouro, numero, cep)

//  Dica: se atentar em conhecer o objeto, ou os objetos aninhados a ele, pois extrair objetos que não existem
// na estrutra não funcionará. EX:

// Isso não funciona, pois não existe o objeto conta muito menos seus atributos no objeto pessoa
// const {
//     conta: {
//         ag,
//         numero        
//     }
// } = pessoa
// console.log(ag, numero)