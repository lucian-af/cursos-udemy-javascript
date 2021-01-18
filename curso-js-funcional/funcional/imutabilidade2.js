// código imperativo
const nums = [4, 8, 3, 2, 9, 1, 9, 3];

// #1 - Dados mutáveis
// Aqui estamos dizendo para o computador como tem de ser feito
// let total = 0;
// for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
// }
// console.log(total);

// #2 - Reduce - não altera o array original
// Aqui estamos dizendo para o computador o que precisa ser feito
// reduza o array de numeros, usando a lógica de somar
// const total = nums.reduce((a, b) => a + b);
// console.log(total);

// #3 - Recursividade - imutável
// Pontos importantes da recursividade: 
//  Uma função recursiva precisa chamar ela mesma;
//  Uma função recursiva precisa ter um ponto de parada;
function somarArray(array, total = 0) {
    if (array.length === 0) return total;
    return somarArray(array.slice(1), total + array[0]);
}

const total = somarArray(nums);
console.log(total);