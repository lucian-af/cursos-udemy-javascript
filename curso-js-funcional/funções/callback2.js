// lendo arquivo com callback
const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, '../../arquivos/dados.txt');

console.log('Inicio...');
fs.readFile(caminho, (_, data) => console.log(`Comecei agora... \n${data.toString()} \n... terminei`));
console.log('Fim...');

console.log('Inicio Sync...');
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('Fim Sync...');