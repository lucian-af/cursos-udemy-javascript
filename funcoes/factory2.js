// Factory é uma função que sempre retorna um objeto

// Factory com passagem de parâmetros
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 8999.99));
console.log(criarProduto('Smart TV', 1999.99));