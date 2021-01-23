const fs = require('fs');
const path = require('path');
const { Observable } = require('rxjs');

function lerDiretorio(caminho) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(caminho).forEach(arquivo => {
                subscriber.next(path.join(caminho, arquivo))
            })
            subscriber.complete();
        } catch (e) {
            subscriber.error(e);
        }
    })
}

function elementosTerminadosCom(padraoTextual) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (texto.endsWith(padraoTextual)) {
                subscriber.next(texto)
            }
        }
    }))
}

function lerArquivo() {
    return createPipeableOperator(subscriber => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
                subscriber.next(conteudo.toString());
            } catch (error) {
                subscriber.error(error);
            }
        }
    }))
}

function separarTextoPor(simbolo) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            texto.split(simbolo).forEach(parte => subscriber.next(parte));
        }
    }))
}

function removerSeVazio() {
    return createPipeableOperator(subscriber => ({
        next(linha) {
            if (linha.trim())
                subscriber.next(linha);
        }
    }))
}

function removerSeIncluir(padraoTextual) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (!texto.includes(padraoTextual))
                subscriber.next(texto);
        }
    }))
}

function removerNumeros(array) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (isNaN(Number(texto)))
                subscriber.next(texto);
        }
    }))
}

function removerSimbolos(simbolos) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            const textoSemSimbolos = simbolos.reduce(
                (acc, simbolo) => {
                    return acc.split(simbolo).join('')
                }, texto)
            subscriber.next(textoSemSimbolos);
        }
    }))
}

function agruparElementos() {
    return createPipeableOperator(subscriber => ({
        next(palavras) {
            const agrupado = Object.values(
                palavras.reduce((acc, palavra) => {
                    const el = palavra.toLowerCase()
                    const qtde = acc[el] ? acc[el].qtde + 1 : 1
                    acc[el] = { elemento: el, qtde }
                    return acc
                }, {}))
            subscriber.next(agrupado)
        }
    }))
}

function createPipeableOperator(operatorFn) {
    return function (source) {
        return new Observable(subscriber => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete(e))
            })
        })
    }
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    elementosTerminadosCom,
    removerSeVazio,
    removerNumeros,
    removerSimbolos,
    separarTextoPor,
    removerSeIncluir,
    agruparElementos
}