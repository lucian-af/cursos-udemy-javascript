// Aula 56 - IF ELSE

const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado!!! valor não condiz com o que será validado, retornará o else