// Aula 37

// Tudo isso é detalhe de sintaxe, por baixo dos panos, para o javascript TUDO (ou quase tudo) é função

console.log(typeof Object) // isso é função
console.log(typeof new Object)  // isso é object // pode ser instanciado sem parenteses

const Cliente = function () {}  // isso é função.. Óbvio!!! kkk
console.log(typeof Cliente) // isso é função
console.log(typeof new Cliente) // isso é object

class Produto {} // sintaxe introduzida no ES(EcmaScript - -Razão Social do Javascript - kkk) 2015 (ES6)
console.log(typeof Produto) // isso é função
console.log(typeof new Produto()) // isso é object