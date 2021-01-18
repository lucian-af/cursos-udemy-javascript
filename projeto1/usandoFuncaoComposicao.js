const path = require('path');
const fn = require('./funcoes');
const caminho = path.join(__dirname, '..', 'dados', 'legendas');
const simbolos = ['.', ',', '?', '!', '"', '-', '_', '<i>', '</i>', '\r', '[', ']', '(', ')', '♪']

const mesclarConteudos = conteudos => conteudos.join(' ');
const separarPorLinhas = todoConteudo => todoConteudo.split('\n');
const separarPorPalavras = todoConteudo => todoConteudo.split(' ');
const agruparPalavras = palavras => Object.values(palavras.reduce((acc, palavra) => {
    const p = palavra.toLowerCase();
    const qtde = acc[p] ? acc[p].qtde + 1 : 1;
    acc[p] = { elemento: p, qtde }
    return acc;
}, {}));

const ordernarPorAtributoNumerico = (attr, ordem = 'asc') => {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr];
        const desc = (o1, o2) => o2[attr] - o1[attr];
        return [...array].sort(ordem === 'asc' ? asc : desc);
    }
}

fn.composicao(
    fn.lerDiretorio(caminho),
    fn.lerArquivos,
    mesclarConteudos,
    separarPorLinhas,
    fn.removerSeVazio,
    fn.removerSeIncluir('-->'),
    fn.removerNumeros,
    fn.removerSimbolos(simbolos),
    mesclarConteudos,
    separarPorPalavras,
    fn.removerSeVazio,
    agruparPalavras,
    ordernarPorAtributoNumerico('qtde', 'desc'),
    console.log
)('.srt')