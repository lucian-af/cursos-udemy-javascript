// Aula 63 - Break / Continue

// break: influencia switch, for, while
// continue: influencia for, while

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5)
        break // age em cima do bloco mais próximo dele, no caso o FOR

    console.log(`x = ${nums[x]}`)
}
console.log('.. FIM Break \n')

for (let y in nums) {
    if (y == 5)
        continue // interrompe a repetição atual e vai para a pŕóxima

    console.log(`${y} = ${nums[y]}`)
}

console.log('.. FIM Continue \n')

// criando um rótulo para o laço, evite usar, lembra o uso do GOTO
externo: for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3)
            // por padrão o break, pararia o for mais próximo, ao passar um rotulo, ele para o laço do rótulo
            break externo

        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('.. FIM rótulo para FOR \n')