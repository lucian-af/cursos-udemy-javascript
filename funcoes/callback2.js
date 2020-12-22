const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback
let notasBaixasSemCallback = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixasSemCallback.push(notas[i]);
    }
}
console.log(notasBaixasSemCallback);

// Com callback
notasBaixasComCallback = notas.filter(nota => nota < 7);
console.log(notasBaixasComCallback);