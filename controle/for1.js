// Aula 61- FOR

let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++ // operador unário
}

console.log('...Fim laço WHILE!')

for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

console.log('...Fim laço FOR!')

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i = 0; i < notas.length; i++) {
    console.log(`notas = ${notas[i]}`)
}

console.log('...Fim laço FOR com array!')