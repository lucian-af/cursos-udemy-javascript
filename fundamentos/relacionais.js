// Aula 46 -- Operadores Relacionais
//  resultado SEMPRE será true ou false

console.log(`01) ${'1' == 1}`)  // compara os valores
console.log(`02) ${'1' === 1}`) // compara os valores e o tipo (estritamente igual)
console.log(`03) ${'3' != 3}`)  // compara os valores
console.log(`04) ${'3' !== 3}`)  // compara os valores e o tipo (estritamente diferente)

console.log(`05) ${3 < 2}`)
console.log(`06) ${3 > 2}`)
console.log(`07) ${3 <= 2}`)
console.log(`08) ${3 >= 2}`)

const d1 = new Date(0)
const d2 = new Date(0)

console.log(`09) ${d1 === d2}`)
console.log(`10) ${d1 == d2}`)
console.log(`11) ${d1.getTime() === d2.getTime()}`)
console.log(`12) ${undefined == null}`)
console.log(`13) ${undefined === null}`)

// Dica: usar o estritamente igual, mais recomendado, pois não ignora os tipos