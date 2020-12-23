// objetos dinâmicos
const produto = new Object;
produto.nome = 'Notebook';
produto['marca do produto'] = 'Acer';
produto.preco = 8769.99;

console.log(produto);
delete produto['marca do produto'];
console.log(produto);

// objetos aninhados
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Juca',
        idade: 43,
        endereco: {
            logradouro: 'Rua dos bôbos',
            numero: 0
        }
    },
    condutores: [{
        nome: 'Rafaela',
        idade: 23
    }, {
        nome: 'Jarret',
        idade: 36
    }],

    calcularValorSeguro() {
        // ..
    }

}

carro.proprietario.endereco.numero = 01
carro['proprietario']['endereco']['numero'] = 003
console.log(carro);

// delete carro.condutores
// retorna undefined
console.log(carro.condutores); 
// quebra o código, porque condutores foi removido, sendo nesse ponto undefined
console.log(carro.condutores.length);