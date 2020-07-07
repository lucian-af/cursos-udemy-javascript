// Aula 34

const funcs = []

// Usando var neste contexto, a função aparentemente nção armazena o valor da variável i no array, 
// e ao ser chamada, ela "se perde" no valor de retorno, retornando o último valor de i
for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // retorna o ultimo valor de i
funcs[8]() // retorna o ultimo valor de i