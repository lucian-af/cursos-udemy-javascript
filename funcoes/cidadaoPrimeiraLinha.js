// Aula 64 - Funções

// Função em JS é First-Class Object (Citizens)
// Higher-order function - Função de alta ordem

// Cidadão de primeira classe, a função é tratada como dado, 
// a função pode ser passada como parâmetro, pode ser atribuida a uma variavel
// pode ou não retornar valor, via de regra, sempre retorna algo, mesmo que seja undefined, caso
// não passamos nada após um return

// criação de forma literal
function funcao1() {}

// Armazenar em uma variável
const funcao2 = function () {}

// Armazenar em um array
const array = [function (a, b) {
    return a + b
}, funcao1, funcao2]

console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Olá'
}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(obj.falar)
run(function () {
    console.log('Executando...')
})

// Uma função pode Retornar/Conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

// Que loko, uma funcao, que retorna uma funcao, que executa uma ação
// Exemplos:
soma(2,4)(5)
const seisMais = soma(2,4)
seisMais(5)