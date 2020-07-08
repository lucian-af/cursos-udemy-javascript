// Aula 45 - Operadores binários

// forma reduzida de criar 4 variaveis, usando destructuring
const [a, b, c, d] = [3, 5, 1, 15]

// d++ = operdores pós fixo que fica após o operando
// ++d = operdores pré fixo que fica antes do operando
// op1 + op2 = operdores infix quue fica entre os operadores

// -a(deixa o operando negativo) = operador unário, opera em cima de um único operando
const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, -divisao, modulo)