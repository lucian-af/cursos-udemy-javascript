// pessoa -> Endereço: 123 -> {...}
const pessoa = { nome: 'Joao' };
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> Endereço: 456 -> {...}
// pessoa = { nome: 'Ana' };

// congela o objeto, não permite qualquer tipo de manipulação, nem de valor de atributos
// ou adicionar/deletar atributos
Object.freeze(pessoa);

pessoa.nome = 'Maria'; // não surte efeito
pessoa.end = 'rua abc'; // não surte efeito
delete pessoa.nome; // não surte efeito

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Rafaela' });
pessoaConstante.nome = 'Marta'; // não surte efeito
console.log(pessoaConstante);
