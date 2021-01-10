// rest/spread
// se for juntar chamamos de rest, se formos espalhar usamos spread
// usar rest com parâmetro de função

// usar spread com objeto

const funcionario = { nome: 'Maria', salario: 12348.99 }
// estamos espalhando todos os atributos de funcionario dentro do objeto clone
// abaixo não estamos mudando o objeto funcionario, estamos criando um novo objeto usando o funcionario como "base"
const clone = { ativo: true, ...funcionario }
console.log(clone);

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];
console.log(grupoFinal);