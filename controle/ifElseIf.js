// Aula 57

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10))
        console.log('Quadro de Honra')
    else if (nota.entre(7, 9.99))
        console.log('Aprovado')
    else if (nota.entre(4, 6.99))
        console.log('Recuperação')
    else if (nota.entre(0, 3.99))
        console.log('Reprovado')
    else
        console.log('Nota inválida')

    console.log('Fim')
}

imprimirResultado(9.7)
imprimirResultado(8.8)
imprimirResultado(5)
imprimirResultado(1)
imprimirResultado(-1)
imprimirResultado(11)