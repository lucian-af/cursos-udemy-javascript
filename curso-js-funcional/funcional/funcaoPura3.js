// mock é quando você tenta simular uma dependencia externa da função
// EX: dependencia de uma API que pega a cotação do dólar
/// torna os testes mais complicados de serem executados

// Uma função pura é uma função em que o valor de retorno é determinado
// APENAS por seus valores de entrada, sem efeitos colaterais observáveis, 
// ou seja modificar algo fora da função

let qtdeDeExecucoes = 0;

// Pura!
// uma função pura pode ser denominada como previsível
function somar(a, b) {
    qtdeDeExecucoes++; // efeito colateral observável
    return a + b;
}

console.log(qtdeDeExecucoes);
console.log(somar(1, 2));
console.log(somar(1, 2));
console.log(somar(1, 2));
console.log(somar(1, 2));
console.log(somar(1, 2));
console.log(qtdeDeExecucoes);