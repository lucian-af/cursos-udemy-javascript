// Aula 30

// Dica valiosa: Fuja do escopo global, possibilidade de bugs que vão te tirar a alegria de programar

var numero = 1
{
    var numero = 2
    console.log(`dentro = ${numero}`)
}

console.log(`fora = ${numero}`)