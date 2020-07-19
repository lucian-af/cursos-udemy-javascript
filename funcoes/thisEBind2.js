// Aula 70 - this e Bind

// Forma de driblar o this que varia

function Pessoa() {
    this.idade = 0

    // Formas distintas de realmente fixar o uso do this
    // 1º - criando uma variavel(self)
    // 2º - fazendo o uso do bind, normal
    const self = this

    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa