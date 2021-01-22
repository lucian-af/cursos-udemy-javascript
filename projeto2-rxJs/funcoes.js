const fs = require('fs');
const path = require('path');
const { Observable } = require('rxjs');

function createPipeableOperator(operatorFn) {
    return function (source) {
        return new Observable(subscriber => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || subscriber.complete()
            });
        });
    }
}

function lerDiretorio(caminho) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(caminho).foreach(arquivo => subscriber.next(path.join(caminho, arquivo)));
            subscriber.complete();
        } catch (e) {
            subscriber.error(e);
        }
    });
}

function elementosTerminadosCom(padraoTextual) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (texto.endsWith(padraoTextual)) {
                subscriber.next(texto);
            }
        }
    }))
}

function lerArquivo(caminho) {
    return new Observable(subscriber => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf8' });
            subscriber.next(conteudo.toString());
        } catch (e) {
            subscriber.error(e);
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

function composicao(...fns) {
    return valor => fns.reduce(async (acc, fn) => {
        if (Promise.resolve(acc) === acc) {
            return fn(await acc)
        } else {
            return fn(acc)
        }
    }, valor)
}

module.exports = {
    composicao,
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    removerSeVazio,
    removerSeIncluir,
    removerNumeros,
    removerSimbolos,
    elementosTerminadosCom
}