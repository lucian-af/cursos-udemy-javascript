// Aula 27

// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // resultado normal
imprimirSoma(2) // retorno NaN, pois não houve tratamento para valores ausentes dos parâmetros
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // resultado é 12, os demais valores passados via parâmetro são desconsiderados
imprimirSoma() // retorno NaN, ambos os parâmetros são undefined

// Função com retorno
function somar(a, b = 0) {
    return a + b
}
console.log(somar(2, 3)) // mesma idéia da função sem retorno
console.log(somar(2)) // aqui terá retorno 2, pois houve tratamento para o segundo parâmetro (default = 0)
console.log(somar()) // mesma idéia da função sem retorno