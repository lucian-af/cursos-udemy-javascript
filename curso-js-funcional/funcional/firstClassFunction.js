/* Diz-se que uma linguagem de programação possui
 * funções de primeira classe quando funções nessa
 * linguagem são tratadas como qualquer outra variável
 */

 // UMA LINGUAGEM SÓ CONSEGUE SER FUNCIONAL SE TIVER OS DOIS CONCEITOS IMPLEMENTADOS
 // FIRST-CLASS-FUNCTION E HIGHER-ORDER-FUNCTION

const x = 3;
const y = function (txt) {
    return `Esse é o texto: ${txt}`;
}

console.log(x);
console.log(y('Olá'));