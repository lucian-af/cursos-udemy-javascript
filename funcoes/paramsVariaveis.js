// Aula 66 -- Antes da versão ES 2015

// Arguments(array) contem cada um dos elementos que foram passados como parametro na funcao
// mmesmo ela não tendo parametros é possível recuperar o que foi passado, oouu seja, o parametro varia
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]        
    }

    return soma
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())
console.log(soma(5,6,7))
// Até aqui se comporta muito bem, recurso legal

// Aqui gera uns monstrinhos, serve pra brincar
console.log(soma('Testando', ' funções ', ' com parametros ', ' variaveis!')) 