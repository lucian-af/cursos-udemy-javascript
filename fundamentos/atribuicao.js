// Aula 40 -- Operadores de Atribuição

const a = 7 // a = 7, atribui à a o valor 7
let b = 3

// atribuição aditiva, ou seja acresce o valor a direita ao valor da esquerda. Equivale: b = b + a
b += a
console.log(b)

// atribuição subtrativa, ou seja diminui o valor a direita do valor à esquerda. Equivale: b = b - 4
b -= 4
console.log(b)

// atribuição multiplicativa, ou seja multipica o valor a direita pelo valor à esquerda.
// Equivale: b = b * 2
b *= 2
console.log(b)

// atribuição divisiva, ou seja divide o valor à esquerda pelo valor à direita.
// Equivale: b = b / a
b /= 2
console.log(b)

// atribuição modular, testa o resto da divisão, se o resultado for par b = 0, se ímpar b = 1
// Equivale: b = b % 2
b %= 2
console.log(b)