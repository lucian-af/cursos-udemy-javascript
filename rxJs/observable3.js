// desafio!
// Criar um stream de numeros
// entre min e max com Observable

const { Observable, noop } = require('rxjs');

function entre(min, max) {
    return new Observable(subscriber => {
        if (min > max) [min, max] = [max, min];

        // Array(max - min).fill().map((_, i) => {
        //     subscriber.next(min + i);
        // })
        // subscriber.complete();

        let aleatorio = min;
        while (aleatorio <= max) {
            subscriber.next(aleatorio);

            if (aleatorio === max) {
                subscriber.complete();
            }

            aleatorio++;
        }
    })
}

entre(4, 10).subscribe(
    num => console.log(`num = ${num}`),
    noop,
    () => console.log('Fim!')
);