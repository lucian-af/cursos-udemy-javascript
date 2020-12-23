// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'; // não faça isso em produção !!!
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B' };
const filho = { __proto__: pai, attr3: 'C' };

// faz uma busca de baixo para cima procurando o elementos
// até encontrar, se não encontrar, retorna undefined

// Filho nao tem, Pai nao tem, Avô nao tem, mas o Object tem, e como o __proto__ do avô aponta 
// para Object.prototype ele encontra a propriedade, obviamente porque adicionamos essa propriedade 
// em Object.prototype
console.log(filho.attr0);
// Filho nao tem, Pai nao tem, Avô tem, retorna o valor do avô
console.log(filho.attr1);
// Filho nao tem, Pai tem retorna o valor do pai, e nem procura no avô
console.log(filho.attr2);
// Filho tem, retorna o valor do filho, e nem procura no pai e nem no avô
console.log(filho.attr3);

// em herança, o javascript vai buscar o escopo mais imediato, se ele encontra ele não busca
// em outros objetos mesmo que tenha o mesmo nome

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        this.velAtual = this.velAtual + delta <= this.velMax
            ? this.velAtual + delta
            : this.velMax;
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing, sombreamento, espécie de sobrescrita de atributos em relação ao prototype
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`; // super chama o método/atributos do protótipo
    }
}

// forma de definir a relação de protótipo
// alternativa ao __proto__: suaClasse
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

ferrari.acelerarMais(10);
volvo.acelerarMais(14);

console.log(ferrari.status());
console.log(volvo.status());