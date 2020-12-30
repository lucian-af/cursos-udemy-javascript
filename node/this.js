// this fora de uma função aponta para module.exports

console.log('Fora de uma função...')
console.log(`this ==== global: ${this === global}`); // false
console.log(`this === module: ${this === module}`); // true
console.log(`this === module.exports: ${this === module.exports}`); // true
console.log(`this === exports: ${this === exports}`); // true

// this dentro de uma função aponta para global
function logThis() {
    console.log('Dentro de uma função...')
    console.log(`this ==== global: ${this === global}`); // true
    console.log(`this === module: ${this === module}`); // false
    console.log(`this === module.exports: ${this === module.exports}`); // false
    console.log(`this === exports: ${this === exports}`); // false
}

logThis();