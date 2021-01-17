class Produto {
    constructor(nome, preco, desconto) {
        this._nome = nome
        this._preco = preco
        this.desconto = desconto
    }

    get nome() {
        return `PRODUTO: ${this._nome}`;
    }
    // getter
    // transformamos a chamada de uma funcao em um atributo
    get precoFinal() {
        return this.preco * (1 - this.desconto);
    }
    get preco() {
        return this._preco;
    }
    // setter
    set nome(novoNome) {
        return this._nome = novoNome.toUpperCase();
    }

    set preco(novoPreco) {
        if (novoPreco >= 0) {
            return this._preco = novoPreco;
        }
    }
}

const p1 = new Produto('Caneta', 10);
p1.nome = 'caneta';
console.log(p1.nome);
const p2 = new Produto('Geladeira', 10000, 0.8);
p2.preco = -100000
console.log(p2.precoFinal);

console.log(typeof Produto);