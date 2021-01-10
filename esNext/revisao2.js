// Arrow function
const soma = (a, b) => a + b;
console.log(soma(1, 5));

// Arrow function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});

lexico1();
lexico2();

// parametro default
function log(texto = 'Node') {
    console.log(texto);
}

log();
log('Sou mais forte');

// operador rest/spread
// posso passar parâmetros ilimitados para essa funcao
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}

console.log(total(2, 3, 4, 5));