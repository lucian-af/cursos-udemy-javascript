const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: {
        rua: 'EFG'
    }
}

// // atribuição por referência
// const novaPessoa = pessoa;
// novaPessoa.nome = 'João'
// novaPessoa.cidade = 'Fortaleza'
// console.log(pessoa);

// // Passagem por referência (função impura!)
// function alterarPessoa(novaPessoa) {
//     novaPessoa.nome = 'João'
//     novaPessoa.cidade = 'Fortaleza'
// }
// alterarPessoa(pessoa);
// console.log(pessoa);

// clone de um objeto
function criarNovaPessoa(pessoa) {
    const novaPessoa = { ...pessoa }; // esse clone é mais superficial, não afeta objetos aninhados
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'ABC' // mudança por referencia
    return novaPessoa;
}
const novaPessoa1 = criarNovaPessoa(pessoa);
console.log(pessoa);
console.log(novaPessoa1);

let a = 3;
let b = a; // atribuição por valor (cópia!)

a++
b--
console.log(a); // 4
console.log(b); // 2

// Dica: algumas bibliotecas possuem uma forma mais profunda derealizar cópias de objetos. EX: lodash