// Aula 42 - Destructuring com array

const [a] = [10]
console.log(a)

// exemplo de dia-a-dia
// pega o primeiro, ignora o segundo, igonora o terceiro, pega o quarto, os demais não existem na estrutura
// então o quinto é undefined e o sexto tbm seria undefined, porém foi atribuido um valor default
const [n1, ,n3, ,n5, n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

// exemplo de aula
 // ignora o primeiro array, do segundo array, ignora o primeiro elemento e pega o segundo
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)