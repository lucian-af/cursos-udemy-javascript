// Obter via urls 
// http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json
// com promise... de 2 maneiras

const http = require('http');
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let response = '';

            res.on('data', dados => {
                response += dados;
            });

            res.on('end', () => {
                try {
                    resolve(JSON.parse(response));
                } catch (error) {
                    reject(error.message);
                }
            });
        });
    })
}

// 1ª Mais demorada
// Por que: ele faz de forma encadeada, processa a 1ª, then, processa a 2ª, then, processa a 3ª, then...
let nomes = [];
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`));
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`));
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`));
            console.log(nomes);
        });
    });
});

// 2ª Um pouco mais rápido o retorno
// Por que: ele faz de forma paralela, como se fossem threads, espera o retorno de todas e processa o then
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

getTurma('D').catch(e => console.log(e));

// Por boas práticas, sempre que usar o then, usar o catch para tratar eventuais erros de uma promise.