// Uma função pura é uma função em que o valor de retorno é determinado
// APENAS por seus valores de entrada, sem efeitos colaterais observáveis, 
// ou seja modificar algo fora da função

// Função Impura - toda vez que temos dependência de algo externo
// mesmo que seja uma função nativa do JS, temos uma função impura
// o resultado da função não é determinístico
// O FATO DE SER IMPURA NÃO VAI INVIABILIZAR O SEU USO. EXISTE EXCEÇÕES
function geraraNumeroAleatorio(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
}

console.log(geraraNumeroAleatorio(1, 10000));
console.log(geraraNumeroAleatorio(1, 10000));
console.log(geraraNumeroAleatorio(1, 10000));
console.log(geraraNumeroAleatorio(1, 10000));
console.log(geraraNumeroAleatorio(1, 10000));