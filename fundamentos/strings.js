// Aula 20

const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // indices maiores que o tamanho da string não geram erro
console.log(escola.charCodeAt(3)) // com base no indice informado, pega o valor na tabela ASCII ou Unicode
console.log(escola.indexOf('d')) // retorna o index com base no char informado
console.log(escola.substring(1)) // vai da posição 1 até o fim da string
console.log(escola.substring(0,3)) // vai da posição 0 até a posição 3
console.log('Escola '.concat(escola).concat("!")) // concatenação de strings
console.log('Escola ' + escola + "!") // concatenação de strings com mais(+ soma)
console.log(escola.replace(3,'e')) // substituição de strings
console.log('Com REGEX: ',escola.replace(/\d/,'e')) // usando regex para substituir tudo que for digito pela letra 'e'
console.log('Ana, Maria, Pedro'.split(',')) // separa um texto em array atraves de um delimitador
console.log('Com REGEX: ', 'Ana, Maria, Pedro'.split(/,/)) // usando regex, faz o mesmo efeito