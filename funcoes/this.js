//  Aula 68 - This (Pronuncia-se Dês)

// DICA: executar comandos no Console do Browser
// Detalhes a se considerar:
/*

(Vide Exemplo 1).
  Se criamos uma função e chamamos ela no console do browser, quem está "chamando" essa função é o window
  ou seja, o nosso this vai ser o window, poderemos usar atributos do window acessando pelo this
  
  (Vide Exemplo 2);  
  Já quando atribuimos essa função à algum evento de algum objeto, o this é quem chamou a função

*/

// Exemplo 1
function f1() {
    console.log(this === window)
}
// Executando a função sozinha, retorna true;
f1()

// Já quando clicarmos no body da página, retornará false, pois o this não é o window
// Ao clicarmos no body, a funcção irá retornar true, pois quem à chamou foi o click no body
document.getElementsByTagName('body')[0].onclick = f1

// Exemplo 2
const body = document.getElementsByTagName('body')[0]

function f2() {
    console.log(this === body)
}

// Executando a função sozinha, retorna false;
f2()

// Ao clicarmos no body, a funcção irá retornar true, pois quem à chamou foi o click no body
document.getElementsByTagName('body')[0].onclick = f2

/* ATENÇÃO:

  Finalidade do uso da arrow function (EX: () => console.log...)
  Ao usarmos o this com arrow function, o this não varia, ou seja, ele é aplicado no conceito léxico, 
  chamamos de this léxico, porque no momento da sua criação ele é aplicado. EX:  
 */
// o this aqui, assume a definição de window, por estar no contexto global
const f3 = () => console.log(this === window)
// Executando a função sozinha no console do browser, retorna true;
f3()

// Atribuindo a função a um evento, e manipulando o evento a função continuará retornando true, pois
// na concepção da arrow function, ficou definido o this, ou seja, independente de quem o chame, o this 
// vai ser sempre o this da sua criação
document.getElementsByTagName('body')[0].onclick = f3

// Ao clicarmos no body, a funcção irá retornar true, pois quem à chamou foi o click no body
document.getElementsByTagName('body')[0].onclick = f2