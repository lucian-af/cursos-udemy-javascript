// Aula 29

// Quando criamos uma variável fora de uma função, esta variável é global
// ou seja, ela estará disponivel em toda a sua aplicação(window)
{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

// isso funciona, pois a variável foi criada fora de uma função, embora tenhamos, 4 blocos de código,
//  variável é perfeitamente acessível pois foi criada "globalmente"
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}
teste()
// console.log(local) // isso não funciona, pois a variável local, foi criada dentro do escopo da função

/* Atenção: 
    Uma variável criada no escopo global, pode ser sobrescrita, se for criado variáveis com mesmo nome
    ela será sobrescrita no seu sistema, podendo quebrar seu código
 */