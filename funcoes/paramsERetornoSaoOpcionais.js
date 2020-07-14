// Aula 65 --
// Funciona, mas não é aconselhado fazer dessa forma

function area(largura, altura) {
    const area = largura * altura

    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // OK
console.log(area(2)) // NaN
console.log(area()) // NaN
console.log(area(2, 3, 4, 5)) // sem sentido, mas calcula
console.log(area(5, 5)) // OK, com undefined