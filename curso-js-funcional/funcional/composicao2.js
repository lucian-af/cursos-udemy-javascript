// Composição de Funções #1
function composicao(...fns) {
    return valor => fns.reduce(async (acc, fn) => {
        if (Promise.resolve(acc) === acc) {
            return fn(await acc)
        } else {
            return fn(acc)
        }
    }, valor)
}

function gritar(texto) {
    return texto.toUpperCase();
}

function enfatizar(texto) {
    return `${texto}!!!!`;
}

function tornarLento(texto) {
    return new Promise(resolve => setTimeout(() => resolve(texto.split('').join(' ')), 3000))
}

const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento
)
exagerado('PARA').then(console.log);

const umPoucoMenosExagerado = composicao(
    gritar,
    enfatizar
)
umPoucoMenosExagerado('Cuidado com o buraco').then(console.log);