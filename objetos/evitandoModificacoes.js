// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca'; // não surte efeito, pois foi criado com preventExtensions
delete produto.tag; // é possível excluir, adicionar não
console.log(produto);

// Object.seal
const pessoa = {
    nome: 'Lucian',
    idade: 31
}
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));
pessoa.dataNascimento = '17/08/1989'; // não é possível
pessoa.idade = 32;
delete pessoa.nome; // não é possível
console.log(pessoa);

// Object.freeze = seal + atributos constantes
const carro = {
    descricao: 'Palio',
    marca: 'Fiat'
}
Object.freeze(carro);
console.log('Freeze:', Object.isFrozen(carro));
carro.anoFabricacao = 2004; // não surte efeito
carro.descricao = 'Palio Elx 1.3'; // não surte efeito
delete carro.marca;
console.log(carro);