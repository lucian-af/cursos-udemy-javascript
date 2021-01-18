// Uma função pura é uma função em que o valor de retorno é determinado
// APENAS por seus valores de entrada, sem efeitos colaterais observáveis, 
// ou seja modificar algo fora da função

// const PI = 3.14;

// Impura -- PI é um valor externo, a função depende de algo que está fora dela
function areaCirc(raio) {
    return raio * raio * Math.PI // apesar de ser dependência externa, é mais estável
}

// Pura -- tudo que a função precisa para retornar o valor e/ou processar algo, está sendo passado como parâmetro
function areaCircPura(raio, Pi) {
    return raio * raio * Pi
}

console.log(areaCirc(10));
console.log(areaCircPura(10, 3.14));