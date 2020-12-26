console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function () {
    return this[0];
}

console.log([1, 2, 3, 4].first());
console.log(['a', 'b', 'c', 'd'].first());

// Atenção: 
/*
    Podemos adicionar novas funcionalidades a determinados objetos nativos do javascript, vide o que foi
    feito acima. 
    Entretanto devemos tomar cuidado e fazer uma análise extremamente cuidadosa, quanto a sobrescrever
    funções nativas, vide exemplo abaixo, pois podemos criar problemas difíceis de serem encontrados e
    por não ser uma boa prática também.
*/

// Procurar nunca fazer
String.prototype.toString = function () {
    return 'Não sobrescreva está funcionaliade!';
}

console.log('Escola Cod3r'.toString());