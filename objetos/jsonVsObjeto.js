const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

// Convertendo objeto para Json
console.log(`Objeto => JSON: `, JSON.stringify(obj));

// Convertendo Json para objeto
const json = '{"a": 1, "b": 3, "c": "Lucian", "d": {}, "e": []}';
console.log(`JSON => Objeto: `, JSON.parse(json));