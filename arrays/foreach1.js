// uma funcao callback recebe até 3 parametros
// valor, indice, array

const aprovados = ['Pedro', 'Thiago', 'Lucian', 'Daniele'];

// com 2 parametros
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
});

// coom arrow function
aprovados.forEach(nome => console.log(nome));

// criando uma funcao e passando para o foreach
let exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);

exibirAprovados = (nome, indice) => console.log(`${indice + 1}. ${nome}`);
aprovados.forEach(exibirAprovados);

// com os 3 parametros possiveis
aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1}. ${nome} - no Array: ${array}`);
});