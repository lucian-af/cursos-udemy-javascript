// Aula 62 - FOR/IN

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(`notas ${i} = ${notas[i]}`)
}

console.log('...Fim laço FOR/IN com array!')

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 33,
    peso: 76    
}

for (let attr in pessoa) {
    console.log(`${attr} = ${pessoa[attr]}`)
}

console.log('...Fim laço FOR/IN com objeto!')