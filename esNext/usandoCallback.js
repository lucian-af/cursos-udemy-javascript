// Obter via urls 
// http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json
// sem promise...

const http = require('http');
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, res => {
        let response = '';

        res.on('data', dados => {
            response += dados;
        });

        res.on('end', () => {
            callback(JSON.parse(response));
        });
    });
}

// exemplo de callback hell
// não é bacana de se usar, fica um código estranho, complicado de manutenção.
// com promise podemos fazer esse mesmo exemplo de forma mais elegante.
let nomes = [];
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`));
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`));
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`));
            console.log(nomes);
        });
    });
});