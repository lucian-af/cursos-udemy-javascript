// Functor: é um container ou wrapper
// Functor é um objeto que encapsula um valor, nesse objeto tem uma função map que altera esse valor
// Functor são objetos que implementam a função MAP
// EX: Array é um Functor, RxJs.Observable é um Functor

const nums = [1, 2, 3, 4, 5, 6];
const novosNums = nums.map(el => el + 10).map(el => el * 2)
console.log(nums, novosNums)

// exemplo de functor
function TipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if (this.invalido()) {
                return TipoSeguro(null)
            } else {
                const novoValor = fn(this.valor);
                return TipoSeguro(novoValor);
            }
        },
        flatMap(fn) {
            return this.map(fn).valor
        }
    }
}

const original = 'Esse é um texto'
const alterado = TipoSeguro(original)
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!`)
    .flatMap(t => t.split('').join(' '))

console.log(original, alterado);