// Aula 50 - Broweser vs NodeJS --  Aula baseada no NodeJS
// Diferenças entre runtimes (Browser e NodeJS(javascript no backend))
// Entender o runtime que estamos rodando o nosso projeto é fundamental para termos um bom projeto.
// Existem particularidades que podem sobrescrever variáveis e trazer problemas, vide o global do NodeJS
// comparado ao this/window da programação na web

let a = 3

global.b = 123 // global é tipo o this/window do conceito web
this.c = 456
this.d = false
this.e = 'nodeJS'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
console.log(module.exports.b)
console.log(this === global) // false

module.exports = {e: 456, f: false, g: 'teste'}
console.log(module.exports)

// criando uma variável malua: sem var e let!
// não fazer isso, criar dessa forma, significa estar criando uma variável no contexto global do nodeJS
// isso pode acarretar em sobrescrita de variáveis e você perder horas procurando o bug
// Fuja do objeto global o máximo possível
abc = 3 
console.log(global.abc)