// Aula 60 - DO WHILE

function obterInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// Ao menos uma vez, será executado o bloco de código
do {
    opcao = obterInteiroAleatorioEntre(-1, 10)
    console.log(opcao)
} while (opcao != -1)

console.log('Até a próxima!')