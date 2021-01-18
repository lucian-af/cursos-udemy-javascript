// flatMap: 
const letrasAninnhadas = [
    ['O', ['l'], 'a'],
    [' '],
    ['m', ['u', 'n'], 'd', 'o'],
    ['!', '!', '!', '!']
]

const letras = letrasAninnhadas.flat(Infinity)

const resultado = letras
    .flatMap(l => [l, ','])
    .reduce((a, b) => a + b);

console.log(resultado);