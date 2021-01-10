// for Of
for (let letra of "Cod3r") {
    console.log(letra);
}

const assuntoEcma = ['Map', 'Set', 'Promise'];

// for padrão
for (let i in assuntoEcma) {
    // retorna o indice
    console.log(i);
}

// for of, retorna o valor, sem precisar passar o objeto e o indice
for (let assunto of assuntoEcma) {
    console.log(assunto);
}

const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

// pega cada array do Map, chave e valor
for (let assunto of assuntoMap) {
    console.log(assunto);
}

// pega somente a chave do Map
for (let chave of assuntoMap.keys()) {
    console.log(chave);
}

// Pega somente os valores das chaves do Map
for (let valor of assuntoMap.values()) {
    console.log(valor);
}

// faz um Destructuring do array já pegando chave e valor
for (let [ch, vl] of assuntoMap.entries()) {
    console.log(ch, vl);
}

// mesma ideia funciona para o Set
const s = new Set(['a', 'b', 'c']);
for (let letra of s) {
    console.log(letra);
}