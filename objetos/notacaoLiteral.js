// Melhorias do ES2015
const a = 1
const b = 1
const c = 1

// antes da versao ES2015
// tinhamos de criar nomes para os atributos, antes de atribuir um valor
const obj1 = { a: a, b: b, c: c }

// ES2015
// o objeto assume o nome da propriedade, através do nome da variável que adicionada ao objeto
const obj2 = { a, b, c }

console.log(obj1, obj2);

// ES2015
// criando objetos com propriedades dinamicas atraves de constantes
const nomeAtr = 'nota';
const valorAtr = 7.87;
const obj3 = {}
obj3[nomeAtr] = valorAtr;
console.log(obj3);

const obj4 = { [nomeAtr]: valorAtr }
console.log(obj4);

const obj5 = {
    // Antes do ES2015
    // era necessário declarar um "nome" para o atributo e depois criar a função
    funcao1: function () {
        // ...
    },
    // ES2015
    // podemos passar diretamente o nome da funcao
    funcao() {
        // ...
    }
}
console.log(obj5);