function gerarNumeroEntre(min, max) {
    if (min > max) {
        // técnica de destructuring
        // o min a direita do igual ficara no max a esquerda do igual
        // o max a direita do igual ficara no min a esquerda do igual
        [max, min] = [min, max];
    }
    return new Promise(resolve => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio);
    })
}

gerarNumeroEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `Número gerado: ${numX10}`)
    .then(console.log);