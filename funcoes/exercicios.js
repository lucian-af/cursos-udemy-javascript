// 1º - operações matemáticas
function resultado(valor1, valor2, operacao = () => valor1 + valor2) {
    if (!valor2)
        return 0;

    return operacao(valor1, valor2);
}
console.log(resultado(10, 15, (x, y) => x * y));
console.log(resultado(10, 15, (x, y) => x + y));
console.log(resultado(43, 15, (x, y) => x - y));
console.log(resultado(50, 3, (x, y) => x / y));

// 2º - tipo de triângulo
function tipoTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return 'EQUILÁTERO';
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        return 'ISÓSCELES';
    } else {
        return 'ESCALENO';
    }
}
console.log(tipoTriangulo(1, 1, 1));
console.log(tipoTriangulo(1, 3, 3));
console.log(tipoTriangulo(1, 2, 3));

// 3º - base e expoente
function baseExpoente(base, expoente) {
    return Math.pow(base, expoente);

}
console.log(baseExpoente(10, 2));

// 4º - resto divisão
function restoDivisao(dividendo, divisor) {
    if (!divisor)
        return 0;

    return `O resultado da divisão é: ${dividendo / divisor} e o resto da divisão é: ${dividendo % divisor}`;
}
console.log(restoDivisao(3, 5));

// 5º - moeda 
function converterMoedaBRA(valor = 0.30000000000000004) {
    const retorno = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return retorno;
}
console.log(converterMoedaBRA());

// 6º juros aplicados
function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    // fórmula J = C.i.t
    const retorno = capitalInicial + (capitalInicial * (taxaJuros / 100) * tempoAplicacao);
    return retorno.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
console.log(jurosSimples(1000, 0.16, 12));

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    // fórmula M = C(1+i)^t
    const retorno = capitalInicial * Math.pow((1 + (taxaJuros / 100)), tempoAplicacao);
    return retorno.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
console.log(jurosCompostos(5000, 1, 6));

// 7º - formula de bhaskara
function bhaskara(ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        return "Delta é negativo"
    }
    let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2
    let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2
    resultados.push(x1)
    resultados.push(x2)
    return resultados
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))

// 8º - pontuacao
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
function avaliaPontuacoes(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes));

// 9º - 