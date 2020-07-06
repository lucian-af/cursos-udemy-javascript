// Aula 21

const nome = 'Lucian'
const concatenacao = 'Olá ' + nome + '!' // isso faz concatenação de string, concatenação faz a junção
// de strings e forma uma nova string

// o template faz interpolação de string, que consiste em adicionar uma variavel no contexto da string em 
// espaços pré determinados
const template = `
Olá ${nome}!`

console.log(concatenacao, template)

//expressoes...
console.log(`1+1 = ${1 + 1}`)

// templates com funções
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)