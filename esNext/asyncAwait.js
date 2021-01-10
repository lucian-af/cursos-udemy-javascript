// Obter via urls 
// http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json
// asyn/await

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

// Recurso do ES8
// Objetivo é simplificar o uso de promises
// await só funciona em funções marcadas com async
let obterAlunos = async () => {
    const ta = await getTurma('A');
    const tb = await getTurma('B');
    const tc = await getTurma('C');
    return [].concat(ta, tb, tc);
}

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes));