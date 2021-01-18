// function declaration
// declaração mais usada para uma função
function bomDia() {
    console.log('Bom Dia!');
}
bomDia();

// function expression
// podemos declarar uma função dentro de uma variável
const boaTarde = function () {
    console.log('Boa Tarde!');
}
boaTarde();

// retorno de funções pode ser atribuido a variáveis
function somar(a, b) {
    return a + b;
}

// resultado recebe a soma de 3 e 4
let resultado = somar(3, 4);
console.log(resultado);

// não tem limite de parâmetro, porém os excedentes são ignorados
resultado = somar(3, 5, 4, 6, 7);
console.log(resultado);

// não dá erro, mas também não faz o correto, quando subtraímos um parâmetro que 
//  não tem um valor padrão, pode ocorrer um erro, nesse caso ele vai tentar somar 3 com nada
// e nada no javascript é undefined, com isso 3 com undefined é NaN - Not-A-Number
resultado = somar(3);
console.log(resultado);