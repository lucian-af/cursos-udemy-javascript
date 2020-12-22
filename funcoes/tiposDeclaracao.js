console.log(somar(3, 5));

// function declaration -- muito comum utilização
// diferente das outras declarações abaixo, pode ser chamada antes da sua criação.
function somar(x, y) {
    return x + y;
}

// function expression -- muito comum utilização
const sub = function (x, y) {
    return x - y;
}
console.log(sub(3, 5));

// named function expression -- pouco comum utilização
const mult = function mult(x, y) {
    return x * y;
}
console.log(mult(3, 5));