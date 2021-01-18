// funções como parâmetro para outras funções que retornam outra função
function bomDia() {
    console.log('Bom Dia!');
}

const boaTarde = function () {
    console.log('Boa Tarde!');
}

function executarQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn();
    } else if (typeof fn === 'string') {
        console.log(`ATENÇÃO: ${fn} é uma string!!!`);
    } else {
        console.log(`ATENÇÃO: ${fn} não é uma função!!!`);
    }
}
executarQualquerCoisa(3);
executarQualquerCoisa(boaTarde);
executarQualquerCoisa(bomDia);
executarQualquerCoisa('Lucian');

// Retornar uma função a partir de uma outra função
function potencia1(base, exp) {
    return Math.pow(base, exp);
}

let bits8 = potencia1(2, 8);
console.log(bits8);

function potencia2(base) {
    return function (exp) {
        return Math.pow(base, exp);
    }
}

bits8 = potencia2(2);
console.log(bits8(8));
console.log(potencia2(2)(8));

// desafios
// somar(3)(4)(5)
function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(somar(3)(4)(5))

// calcular(3)(7)(fn)
// Onde:
// fn => 3*7 = 21
// fn => 3+7 = 10
// fn => 3-7 = -4
function calcular(a) {
    return function (b) {
        return function (fn) {
            return fn(a, b);
        }
    }
}

console.log(calcular(3)(7)((a, b) => a * b));
console.log(calcular(3)(7)((a, b) => a + b));
console.log(calcular(3)(7)((a, b) => a - b));