const _ = require('lodash');

setInterval(() => {
    console.log(_.random(1, 1000));
}, 500);

//  nessa aula, instalamos o lodash que possui uma série de funções para uso
// e o nodemon, que executa nosso arquivo e faz o hot reload 
// enquanto estamos desenvolvendo