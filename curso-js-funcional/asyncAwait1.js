// async e await
function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo);
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'));

function retornarValor() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}

async function executar() {
    // let valor = await retornarValor();
    let valor = await retornarValorRapido();

    await esperarPor(1000);
    console.log(`Async/Await...${valor}`)
    await esperarPor(1000);
    console.log(`Async/Await...${valor + 1}`)
    await esperarPor(1000);
    console.log(`Async/Await...${valor + 2}`)

    return valor + 3;
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor);
}

executarDeVerdade();
executar().then(console.log);

// pontos a serem levados em consideração:
/*
    No node não podemos usar o await direto no arquivo, somente dentro de uma função
    Uma função marcada com asyn sem o uso explícito de Promise, retorna por si só uma promise
    Uma vez que ela retorna uma promise, o uso so await é necessário para a extração do valor de retorno
    "Ver função 'retornarValorRapido'"
    ----------------------------------------------------------------------------------------
    Quando nao usamos async/await em uma funcao, tratamos o retorno de uma promise com 'then'
*/