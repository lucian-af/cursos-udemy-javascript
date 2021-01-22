const { from, Observable } = require('rxjs');

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

function primeiro() {
    return createPipeableOperator(subscriber => ({
        next(valor) {
            subscriber.next(valor);
            subscriber.complete();
        },
        complete() { }
    }))

    // com currying
    // return createPipeableOperator(subscriber => valor => {
    //     subscriber.next(valor);
    //     subscriber.complete();
    // })

    // sem currying, mais simples
    // return createPipeableOperator((subscriber, valor) => {
    //     subscriber.next(valor);
    //     subscriber.complete();
    // })
}

function ultimo() {
    let ultimo;
    return createPipeableOperator(subscriber => ({
        next(valor) {
            ultimo = valor;
        },
        complete() {
            if (ultimo !== undefined) {
                subscriber.next(ultimo);
            }
            subscriber.complete();
        }
    }))
}

function nenhum() {
    return createPipeableOperator(subscriber => ({
        next() {
            subscriber.complete();
        }
    }))
}

from([1, 2, 3, 4, 5])
    .pipe(primeiro())
    .subscribe(console.log);

from([1, 2, 3, 4, 5])
    .pipe(ultimo())
    .subscribe(console.log);

from([1, 2, 3, 4, 5])
    .pipe(nenhum())
    .subscribe(console.log('nadica de nada'));