const { Observable } = require('rxjs');

const promise = new Promise(resolve => {
    resolve('Promise é bem legal!');
})

promise.then(console.log);

const obs = new Observable(subscriber => {
    subscriber.next('Observer ');
    subscriber.next('é ');
    setTimeout(() => {
        subscriber.next('bem legal');
    }, 1000)
    subscriber.complete();
    subscriber.next('Teste');
})

obs.subscribe(console.log);