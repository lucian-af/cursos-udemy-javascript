// recriando e entendendo como funciona o map
Array.prototype.map2 = function (callback) {
    let retorno = [];
    for (i = 0; i < this.length; i++) {
        retorno.push(callback(this[i], i, this))
    }
    return retorno;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
];

const valorCarrinho = carrinho.map2((itens) => JSON.parse(itens).preco);
console.log(valorCarrinho);