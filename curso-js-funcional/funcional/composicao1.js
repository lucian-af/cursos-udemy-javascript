// Composição de Funções #1
function composicao(...fns) {
    return valor => fns.reduce((acc, fn) => fn(acc), valor)
}

function gritar(texto) {
    return texto.toUpperCase();
}

function enfatizar(texto) {
    return `${texto}!!!!`;
}

function tornarLento(texto) {
    return texto.split('').join(' ');
}

const resultado = composicao(
    gritar,
    enfatizar,
    tornarLento
)('PARA')
console.log(resultado)

// Composição de Funções #2
const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento
)

const resultado2 = exagerado('atenção')
console.log(resultado2);

const umPoucoMenosExagerado = composicao(
    gritar,
    enfatizar
)
const resultado3 = umPoucoMenosExagerado('Cuidado com o buraco')
console.log(resultado3);