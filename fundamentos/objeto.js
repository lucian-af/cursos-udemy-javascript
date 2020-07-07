// Aula 24

const prod1 = {} // conotação de objeto(vazio) em javascript

prod1.nome = "Celular Ultra Mega"
prod1.preco = 1399.99
prod1['Desconto Legal'] = 99.90 // evitar atributos com espaço

console.log(prod1)

// estrutura aninhada
const prod2 = {
    nome: "Camisa Polo",
    preco: 119.90,
    obj: {
        atributo1: 1,
        obj: {
            atributo1: 11
        }
    }
}

console.log(prod2)