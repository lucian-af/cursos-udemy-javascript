// usando o schedule do node
const schedule = require('node-schedule');

// executara de 5 em 5 segundos, as 21 horas, em qualquer dia do mes, em qualquer mes, todas as segundas feiras
const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 1', function () {
    console.log(`Èxecutando Tarefa 1! ${new Date().getSeconds()}`);
});

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 21;
regra.second = 1;

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log(`Èxecutando Tarefa 2! ${new Date().getSeconds()}`);
})

// Nativo do Javascript
setTimeout(function () {
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1!')
}, 20000);

// setTimeout -- executa após x tempo
// setImmediate -- execucao imediata
// setInterval -- executa em loop de x em x tempo