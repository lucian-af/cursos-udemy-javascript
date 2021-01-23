// criando um operador pipeable
const { from, Observable } = require('rxjs');

function primeiro() {
    return function (source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(valor) {
                    subscriber.next(valor);
                    subscriber.complete();
                }
            })
        });
    }
}

function ultimo() {
    return function (source) {
        return new Observable(subscriber => {
            let ultimo;
            source.subscribe({
                next(valor) {
                    ultimo = valor;
                },
                complete() {
                    subscriber.next(ultimo);
                    subscriber.complete();
                }
            })
        })
    }
}

from([1, 2, 3, 4, 5])
    .pipe(primeiro())
    .subscribe(console.log);

from([1, 2, 3, 4, 5])
    .pipe(ultimo())
    .subscribe(console.log);