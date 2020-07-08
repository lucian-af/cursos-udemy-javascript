// Aula 38

// contexto léxico 1 - local físico no qual sua varíavel foi definida, nesse caso foi definido no nível do
// arquivo, poderia ser definido no contexto global(window), em outro arquivo
const saudacao = 'Opa'


// contexto léxico 2 - definido especificamente dentro da função, por estar em contexto separado, não conflitam
// caso ele não encontre a variável no contexto mais restrito ele vai elevenado até encontrar ou retornar
// is not defined
function exec(){
    const saudacao = 'Falaa'
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Lucian',
    idade: 30,
    endereco: {
        logradouro:'Rua Dos Bôbos',
        numero: 0
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)