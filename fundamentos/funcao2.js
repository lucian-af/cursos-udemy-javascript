// Aula 28

// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const somar = (a, b) => {
    return a + b
}

somar(2, 3)

// retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)

imprimir2('Javascript é Top Top Top!!!')