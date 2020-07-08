// Aula 48 -- Operadores Unários

let num1 = 1
let num2 = 2

num1++ // pós fixado
console.log(num1)

--num1 // pré fixado, forma com maior precedencia, tem uma certa prioridade
console.log(num1)

// Atenção: isso pode gerar confusão, o ++num será executado antes da comparação, 
// e o num-- será executado depois, ou seja em um primeiro momento será verdadeiro e 
// na linha seguinte a mesma comparação será falsa
console.log(++num1 === num2--)
console.log(num1 === num2)