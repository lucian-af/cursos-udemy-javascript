// tratamento de erro
// Opção 1
// function funcionarOuNao(valor, chanceErro) {
//     return new Promise((resolve, reject) => {
//         if (Math.random() < chanceErro) {
//             reject('Ocorreu um erro!');
//         } else {
//             resolve(valor);
//         }
//     })
// }

// Opção 2
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!');
                return;
            }
            con.log(); // simulação de erro
            resolve(valor);
        } catch (e) {
            reject(e);
        }
    })
}

funcionarOuNao('Testando...1', 0.8)
    .then(console.log)
    .catch(erro => console.log(`Tratado no catch: ${erro}`))
    .then(() => console.log('Fim')); // funciona tipo um finalize, nao tem dados, mas pode chamar uma outra função ou processar algo

funcionarOuNao('Testando...2', 0.3)
    .then(console.log, erro => console.log(`Tratado no then: ${erro}`));

// Dicas importantes, quando tratamos o erro dentro de um 'then', ele tem prioridade na execução
// ou seja, se tiver um 'catch' na instrução, será ignorado.