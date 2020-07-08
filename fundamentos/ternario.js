// Aula 49 -- Operadores ternários

// composição do operador ternário:
// 1ª parte: composta por uma expressão, sentença precedido pelo ponto de interrogação(nota >= 7 ?)
// 2ª parte: resultado, caso a expressão seja verdadeira separado com um dois pontos(:)
// 3ª parte: resultado, caso a expressão seja falsa

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7))