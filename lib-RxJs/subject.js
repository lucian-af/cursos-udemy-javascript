/*
    Observable(Unicasted): chama a função para cada subscribe que o chamou, gerando possíveis valores aleatórios
    Subject(Multicasted): chama a função uma única vez, e retorna o mesmo valor para todos os interessados
 */

const { Observable, Subject } = require('rxjs');

function getObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            subscriber.next(Math.random())
        }, 1000)
    })
}

const obs = getObservable();
obs.subscribe(console.log);
obs.subscribe(console.log);

function getSubject() {
    const sub = new Subject()
    setTimeout(() => {
        sub.next(Math.random())
        sub.complete()
    }, 1000)
    return sub;
}

console.log('---------------------------')

const sub = getSubject();
sub.subscribe(console.log);
sub.subscribe(console.log);