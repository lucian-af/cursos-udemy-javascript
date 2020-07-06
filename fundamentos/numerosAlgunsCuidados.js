// Aula 18

console.log(7 / 0) // em javascript divisão por zero retorna Infinity
console.log("10" / 2) // em javascript isso pode ser resolvido, retornará 5
console.log('3' + 2) // isso ele não soma, ele concatena, o mais(+) faz sentido no cenario da string(concatenar)
console.log('3' - 2) // isso ele irá subtrair, porque o menos não faz sentido no mcenario de string
console.log("10,2" / 2) // em javascript isso retorna NAN(Not-A-Number (não é um número))
console.log("Show" * 2) // em javascript isso retorna NAN(Not-A-Number (não é um número))
 // em javascript, por causa da especificação que o javascript usa ele pode divergir em operações com 
 // ponto flutuante (Especificação ecma-international.org)
console.log(0.1 + 0.7) // esse tipo de cenário é mais rápido usando a especificação do ecma, porém gera uma imprecisão
//console.log(10.toStriing()) // não é aceito
console.log((10.345).toFixed(2)) // isso é aceito