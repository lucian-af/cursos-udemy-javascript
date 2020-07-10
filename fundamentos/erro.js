// Aula 51 - Try/Catch/Throw

// formas de usar o throw
function tratarErroLancar(erro) {
    // throw new Error('... erro!')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date().toLocaleString()
    }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroLancar(e)
    } finally {
        console.log('saiu?')
    }
}

const obj = {
    // name: 'Lucian',
    nome: 'Lucian'
}

imprimirNomeGritando(obj)