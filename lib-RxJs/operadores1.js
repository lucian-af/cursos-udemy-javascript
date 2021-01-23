// Os dois tipos...
// 1. Operadores de Criação
// 2. Operadores Encadeáveis (Pipeablee Op.)

const { of } = require('rxjs')
const { last, map, exhaustMap } = require('rxjs/operators');

// o pipe funciona como uma composição de funções
// o resultado de uma função é passado para outra e assim sucessivamente

of(1, 2, 'ana', false, 'ultimo')
    .pipe(
        exhaustMap()
    ).subscribe(valor => console.log(valor));