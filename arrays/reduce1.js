// reduce transforma um array em um único elemento, um novo array
// o resultado da primeira execução é passado para a proxima execução
// funciona como se fosse um acumulador
// recebe dois parâmetros, um callback e um valor inicial

const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
});

console.log(resultado);