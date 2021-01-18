function gerarNumeroEntre(min, max, numerosPribidos) {
    if (min > max) [max, min] = [min, max];
    return new Promise((resolve) => {
        const fator = max - min + 1;
        let aleatorio = parseInt(Math.random() * fator) + min

        while (numerosPribidos.includes(aleatorio)) {
            aleatorio = parseInt(Math.random() * fator) + min
        }
        resolve(aleatorio);
    })
}

// gerarNumeroEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log);

async function gerarMegaSena(qtdeNumeros) {
    try {
        const numeros = [];
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros));
        }
        return numeros;
    }
    catch (e) {
        throw 'Ops!';
    }

}

gerarMegaSena(15).then(console.log).catch(console.log);