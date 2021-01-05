const fs = require('fs');

// __dirname é uma constante que esta presente em todos os modulos do node que representa o diretorio atual
const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);


// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (err) {
        console.log('erro');
        return;
    }
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}: ${config.db.port}`);
});

// o bloco acima pode ser simplificado dessa forma, por ser um arquivo JSON
const config = require('./arquivo.json')
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
})