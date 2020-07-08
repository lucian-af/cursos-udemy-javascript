// Aula 39

// Notação ponto é presente em toda a linguagem, acessar membros de um objeto através do ponto
console.log(typeof console)
console.log(Math.ceil(6.1)) // ceil eleva acima

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // não recomendado esse tipo de sintaxe (['nome'])
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = () => console.log('Exec...')
}

const obj2 = new Obj('Lucian')
console.log(obj2.nome)

const obj3 = new Obj('Ferreira')
console.log(obj3.nome)

obj3.exec()