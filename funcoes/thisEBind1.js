// Aula 69 - This e a função Bind

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
       console.log(this.saudacao)
    }
}

pessoa.falar()

// conflito entre a programação funcional e a programação orientada a objetos, 
// o this do objeto pessoa esta em outro contexto, isso ocasiona um conflito de paradigmas
const falar = pessoa.falar
falar()

// Bind, é responsavel por "amarrar" determinado objeto à uma função
// para que ele seja dono da execução de determinado método. 
// No exemplo abaixo, o bind, vai forçar a execução do this, pela função falarDePessoa
// a chamada de bind não altera o valor da função
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()