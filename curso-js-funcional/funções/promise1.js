// let a = 1;
// console.log(a);

let p = new Promise(function (cumprirPromessa) {
    // cumprirPromessa(3);
    // cumprirPromessa({
    //     x: 3, y: 4
    // });
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

// console.log(typeof p);
// p.then(valor => console.log(valor.x, valor.y));
p
    .then(valor => valor[0]) // primeiro elemento do array
    .then(valor => valor[0]) // primeira letra do nome
    .then(letra => letra.toLowerCase()) // converte para minusculo
    // .then(letraMinuscula => console.log(letraMinuscula)) // mostra no console a primeira letra em minúscula do primeiro elemento
    .then(console.log); // a linha acima pode ser substituida por esta
    // quando temos um unico parametro que sera passado para uma funcao, podemos substituir pela propria funcao