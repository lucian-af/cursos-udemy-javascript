const alunos = [
    { nome: 'Joao', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
];

// Imperativo
// é mais direcionado a como tem de ser feito
// tipo uma receita de bolo
// passamos o passo a passo "sequencial"
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

// Declarativo
// a idéia é de ter códigos reutilizáveis
// o importante é mais com o que precisa ser feito do que com o como será feito
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);