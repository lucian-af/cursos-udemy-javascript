function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo!!!', 123);
const aula2 = new Aula('Até breve!!!', 204);
console.log(aula1, aula2);

// simulando o new
// entendendo o que acontece quando instanciamos um objeto em JS
function novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, 'Olá', 432);
console.log(aula3);