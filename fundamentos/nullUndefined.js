// Aula 25

let valor // não inicializada
console.log(valor) // esse log, retorna undefined, ou seja, a variável existe, porém não foi instanciada
/// console.log(valor2) // isso geraria um erro(is not defined), pois essa variável sequer existe

valor = null // ausência de valor
console.log(valor)

// Dica = usar atribuição de null, caso queira zerar o valor de uma variável

// console.log(valor.toString()) // Erro! // cuidado ao fazer conversões em variáveis nulas

const produto = {}
console.log(produto.preco) // undefined
console.log(produto) // vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço, melhor forma de definir é null, não undefined
console.log(!!produto.preco)
console.log(produto)