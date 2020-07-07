// Aula 35

const funcs = []

// Usando let neste contexto, a função armazena o valor da variável i no array, e ao ser chamada
// ela retorna o valor que realmente foi passado à ela no momento de sua criação 
for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // retorna o valor que realmente foi passado
funcs[8]() // retorna o valor que realmente foi passado