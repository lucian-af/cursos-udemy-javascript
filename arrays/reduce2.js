const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

// Desafio 1: Todos os alunos são bolsistas ?
console.log(`Todos são bolsistas: ${alunos.map(aln => aln.bolsista).reduce(aln => aln === true)}`);

// Desafio 2: Algum aluno é bolsista ?
console.log(`Algum é bolsista: ${alunos.map(aln => aln.bolsista).reduce((anterior, aln) => anterior ? anterior : aln)}`);

/// Resolução do vídeo
// Desafio 1: Todos os alunos são bolsistas ?
console.log(`Todos são bolsistas: ${alunos.map(aln => aln.bolsista).reduce((anterior, aln) => anterior && aln)}`);

// Desafio 2: Algum aluno é bolsista ?
console.log(`Algum é bolsista: ${alunos.map(aln => aln.bolsista).reduce((anterior, aln) => anterior || aln)}`);