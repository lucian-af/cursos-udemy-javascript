// desafio
// esperar 3000 milisegundos
// gerar números de 500 em 500 milisegundos

// Depois de 10000 milisegundos unsubscribe

const { timer, Subscription } = require('rxjs');

const range = timer(3000, 500);
const sub1 = range.subscribe(num => console.log(`#1 Gerou: ${num}`));
const sub2 = range.subscribe(num => console.log(`#2 Gerou: ${num}`));

const subs = new Subscription();
subs.add(sub1);
subs.add(sub2);

setTimeout(() => subs.unsubscribe(), 10000);