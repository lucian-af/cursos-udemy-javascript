// Closure é quando uma função "lembra" do seu escopo léxico
// mesmo quando a função é executada fora desse escopo léxico
// Escopo Léxico: é o escopo no qual a função foi definida fisicamente
// EX: se a função foi definida nesse arquivo, o escopo dela é esse arquivo

const somarXMais3 = require('./closureEscopo');
// esse x não será levado em consideração
const x = 1000;
// a função "lembra" do escopo no qual ela foi criada
console.log(somarXMais3());