const { toArray, map, groupBy, mergeMap, reduce } = require('rxJs/operators');
const path = require('path');
const fn = require('./funcoes');
const _ = require('lodash');
const caminho = path.join(__dirname, '..', 'dados', 'legendas');
const simbolos = ['.', ',', '?', '!', '"', '-', '_', '<i>', '</i>', '\r', ':', '[', ']', '(', ')', '♪']

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerSeVazio(),
        fn.removerSeIncluir('-->'),
        fn.removerNumeros(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerSeVazio(),
        fn.removerNumeros(),
        groupBy(item => item),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(palavras => ({ elememto: palavras[0], qtde: palavras.length })),
        toArray(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(console.log)