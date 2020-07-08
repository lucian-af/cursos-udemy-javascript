// Aula 44 - Destructuring com array

function rand([min = 0, max = 1000]) {
     // criando um novo array([max, min]) com os atributos que foram desestruturados do array([min, miax)     
    if (min > max)[min, max] = [max, min]

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
// console.log(rand()) // erro, não é possível desestruturar elementos do 'nada'