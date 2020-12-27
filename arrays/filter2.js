// recriando o filter e entendendo como ele funciona

Array.prototype.filter2 = function (callbak, thisArgs) {
    let retorno = [];
    let self = thisArgs ? thisArgs : this;
    for (let i = 0; i < self.length; i++) {
        if (callbak(self[i], i, self))
            retorno.push(self[i]);
    }
    return retorno;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Monitor Samsung', preco: 549, fragil: true },
    { nome: 'Copo de Vidro', preco: 7.89, fragil: true },
    { nome: 'Copo de Plástico', preco: 3.18, fragil: false }
]
const produto = [
    { nome: 'Copo de Vidro II', preco: 17.89, fragil: false },
    { nome: 'Copo de Plástico II', preco: 9.18, fragil: false }
]

const produtosFrageisECaros = (p) => p.preco > 500 && p.fragil;
const produtosMaisBaratos = (p) => p.preco <= 10;

// console.log(produtos.filter2(function (p) {
//     return p.preco > 10.0
// }));

// console.log(produtos.filter2(produtosFrageisECaros));
// console.log(produtos.filter2(produtosMaisBaratos));

console.log(produtos.filter2(produtosMaisBaratos, produto));
console.log(produtos.filter(produtosMaisBaratos, produto));