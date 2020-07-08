// Aula 36 -- Isso não traz benefício, pode até confundir, mas é bom saber que pode ser feito.
// Eu particularmente acho bem POG, fazer esse tipo de uso;

// ao declararmos a variável a, na linha abaixo, não haverá erro, apenas o retorno de undefined 
// (a variável existe, porém não foi inicializada), isso ocorre porque a varivel sofre um hoisting(elevação)
// Fazer isso em uma function causa o mesmo efeito.
// Seria o mesmo que, que escrever da forma abaixo:
// var a
// console.log(`a = ${a}`
// a = 2
// console.log(`a = ${a}`)

console.log(`a = ${a}`)
var a = 2
console.log(`a = ${a}`)

// com let isso não funciona
// o código abaixo gera esse tipo de erro:
/// Cannot access 'b' before initialization ... Traduzindo
// Não é possível acessar 'b' (variavel b) antes da inicialização

// console.log(`b = ${b}`)
// let b = 2
// console.log(`b = ${b}`)