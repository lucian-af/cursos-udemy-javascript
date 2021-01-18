// arrow function
const boasFestas = () => console.log('Happy Holidays!!!!');
boasFestas();

const saudacao = nome => `Fala ${nome}, blza?!`;
console.log(saudacao('Maria'));

// ...(rest) converte todos os parametros passados para um array
const somar = (...numeros) => {
    if (Array.isArray(numeros)) {
        let total = 0;
        for (let num of numeros) {
            total += num;
        }
        return total;
    }
};
console.log(somar(3, 4, 7));

// desafio
// função retornar funcao com arrow function
const potencia = base => exp => Math.pow(base, exp);
console.log(potencia(2)(8));