// javascript não permite sobrecarga de funções, funções com o mesmo nome e parâmetros diferentes
// não são aceitos, a única forma de ter funções com o mesmo nome é através de getters e setters

const sequencia = {
    _valor: 1, // por convenção essa eh uma variavel privada, não deve ser acessada diretamente
    get valor() {
        return this._valor++;
    },
    set valor(valor) {
        if (valor > this._valor)
            this._valor = valor;
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);