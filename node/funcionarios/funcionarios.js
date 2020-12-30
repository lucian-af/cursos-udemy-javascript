// usamos o comando npm init para criar um arquivo package.json que contem 
// uma espécie de ponteiros das dependencias do nosso projeto

// axios é um client http, ele faz requisições para obter dados externos
// comando para instalar npm install axios
// se usarmos o comando npm install axios --save
// ele cria dentro de package.lock.json uma referencia que serve para baixarmos as dependencias do nosso projeto somente
// executando somente o comando npm install na pasta do nosso projeto

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

// objetivo é: 
// Obter o funcionario onde pais seja China, genero Feminino e tenha o menor salário
const chinesas = data => data.pais === 'China';
const mulheres = data => data.genero === 'F';
const menorSalario = (anterior, data) => anterior.salario > data.salario ? data : anterior;

axios.get(url).then(response => {
    const funcionarios = response.data;
    const china = funcionarios
        .filter(chinesas)
        .filter(mulheres)
        .reduce(menorSalario);
    console.log(china);
});