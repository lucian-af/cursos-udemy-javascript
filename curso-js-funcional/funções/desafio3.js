// lendo arquivo com promise
const fs = require('fs');
const path = require('path');

function processarArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, data) => resolve(data));
    })
}

const caminho = path.join(__dirname, '../../arquivos/dados.txt');
// processarArquivo(caminho)
//     .then(data => data.toString())
//     .then(data => data.split('\n'))
//     .then(data => data[1])
//     .then(console.log);

processarArquivo(caminho)
    .then(data => data.toString())
    .then(data => data.split('\n'))
    .then(data => data.join(','))
    .then(data => `O valor final é: ${data}`)
    .then(console.log);