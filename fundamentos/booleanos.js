// Aula 22

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // dupla negação(!!) retorna true

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
// se o valor à direita da atribuição entre parenteses for verdadeiro, ele retorna verdadeiro, 
// não está relacionado à atribuição
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // esse tipo de validação ele retorna o primeiro verdadeiro

// Dica:
let nome = 'Lucian'
// se o nome for false, ele retorna a string a direita, senão retorna o nome, conceito de booleanos acima
console.log(nome || 'Não Informado')