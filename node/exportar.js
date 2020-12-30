console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1; // aponta para o mesmo espaço de memória que module.exports
exports.b = 2 // aponta para o mesmo espaço de memória que module.exports
module.exports.c = 3;

exports = null;
console.log(module.exports);

exports = {
    nome: 'Teste'
}

console.log(module.exports);

module.exports = { publico: true };