const fs = require('fs');
const path = require('path');

function lerDiretorio(caminho, extensao) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
                .filter(arquivos => arquivos.endsWith(extensao))
                .map(arquivo => path.join(caminho, arquivo));
            resolve(arquivos);
        } catch (e) {
            reject(e);
        }
    });
}
function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf8' });
            resolve(conteudo.toString());
        } catch (e) {
            reject(e);
        }
    })
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)));
}

function removerSeVazio(array) {
    return array.filter(el => el.trim());
}

function removerSeIncluir(padraoTextual) {
    return function (array) {
        return array.filter(el => !el.includes(padraoTextual));
    }
}

function removerNumeros(array) {
    return array.filter(el => isNaN(Number(el)));
}

function removerSimbolos(simbolos) {
    return function (array) {
        return array.map(el => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('');
            }, el);            
        })
    }
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    removerSeVazio,
    removerSeIncluir,
    removerNumeros,
    removerSimbolos
}