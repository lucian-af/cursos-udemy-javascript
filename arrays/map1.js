// função map, mapeia o objeto original e retorna um novo objeto
// não modifica o objeto de origem
// sempre retorna um objeto de mesmo tamanho
// sempre precisa de um return
const nums = [1, 2, 3, 4, 5];

let arrayDobro = nums.map((valor) => valor * 2);

console.log(nums);
console.log(arrayDobro);

const somar10 = valor => valor + 10;
const triplo = valor => valor * 3;
const money = valor => `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`;

arrayDobro = nums.map(somar10).map(triplo).map(money);
console.log(arrayDobro);