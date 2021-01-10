// aceita repetição de valor, não de chave
const tecnologia = new Map();
tecnologia.set('react', { framework: false });
tecnologia.set('angular', { framework: true });

// exemplo que não funciona
console.log(tecnologia.react); // undefined

// exemplo que funciona
console.log(tecnologia.get('react').framework);

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
})

// has, elemento está ou não contido dentro de um array
console.log(chavesVariadas.has(123));
chavesVariadas.delete(123); // delete tbm retorna true ou false
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b');
chavesVariadas.set(456, 'b');
console.log(chavesVariadas);