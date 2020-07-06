// Aula 23

// array em javascript é uma estrutura heterogenea, aceita qualquer tipo de valor, pelo fato do 
// javascript ser fracamente tipado

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

console.log(valores[4]) // isso retorna undefined(indefinido)

valores[4] = 10 // adiciona valores a posição 4
console.log(valores)

console.log(valores.length) // retorna o tamanho do array

valores.push({id: 3}, false, null, 'Teste') // adiciona elementos ao array
console.log(valores)

console.log(valores.pop()) // remove o último elemento do array

delete valores[0] // deleta com base em um índice, delete funciona no contesto de objeto
console.log(valores)

console.log(typeof valores) // Array é do tipo object