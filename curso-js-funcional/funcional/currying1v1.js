// Currying é quando você ao invés de passar todos os parâmetros para a função
// passamos os parâmetros de forma parcial

function textoComTamanhoEntre(min, max, erro, texto) {
    const tamanho = (texto || '').trim().length;

    if (tamanho < min || tamanho > max) {
        throw erro
    }
}

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
textoComTamanhoEntre(2, 3, 'produto inváilido', p1.nome);