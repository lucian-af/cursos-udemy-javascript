// promises
// uso de promises é para processamento assíncrôno
// o Exemplo abaixo simula uma espera em determinado processo, que após concluído retornará algo
// o parameter function resolve só aceita um parâmetro. 
// Solução alternativa é passar um objeto, para ter outras possibilidades

function falarDepoisDe(segundos, frase) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(frase);
        }, segundos * 1000);
    }, reject => reject('Ops, algo deu errado!'));
}

// na chamada de uma promise usamos o then, dentro do then manipulamos o retorno esperado da nossa promise
// podemos usar vários "thens" encadeados
// para tratarmos o erro ou rejeição (reject), usamos um único catch, após os nossos "thens" que é responsável
// por tratar um erro e apresentar algo amigável para o usuário.
falarDepoisDe(2, 'Olá!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e));