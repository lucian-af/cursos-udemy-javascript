// filter filtra um array, e retorna um objeto baseado na condição dada ao filter

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Monitor Samsung', preco: 549, fragil: true },
    { nome: 'Copo de Vidro', preco: 7.89, fragil: true },
    { nome: 'Copo de Plástico', preco: 3.18, fragil: false }
]

const produtosFrageisECaros = (p) => p.preco > 500 && p.fragil;
const produtosMaisBaratos = (p) => p.preco <= 10;

console.log(produtos.filter(function (p) {
    return p.preco > 10.0
}));

console.log(produtos.filter(produtosFrageisECaros));
console.log(produtos.filter(produtosMaisBaratos));