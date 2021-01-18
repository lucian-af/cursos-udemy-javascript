// Currying é quando você ao invés de passar todos os parâmetros para a função
// passamos os parâmetros de forma parcial
// Criador: Haskell Curry

function textoComTamanhoEntre(min) {
    return max => erro => texto => {
        // Lazy Evaluation
        const tamanho = (texto || '').trim().length;

        if (tamanho < min || tamanho > max) {
            throw erro
        }
    }
}

function aplicarValidacao(fn, valor) {
    return valor => {
        // Lazy Evaluation
        try {
            fn(valor);
        } catch (e) {
            return { error: e }
        }
    }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(2)(3);
const forcarNomeProdutoValido = forcarTamanhoPadrao('produto inváilido');
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido);

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
const p2 = { nome: 'B', preco: 14.99, desc: 0.25 }
console.log(validarNomeProduto(p1.nome));
console.log(validarNomeProduto(p2.nome));
