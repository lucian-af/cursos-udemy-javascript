/// contexto léxico: uma função javascript ela respeita "o ambiente" onde ela foi criada, no caso
// exemplo abaixo, "minhaFuncao" independente de onde seja chamada, sempre vai retornar a variavel
// valor com conteudo 'Global' e não a variavel mais próxima de onde a funcção foi chamada.

const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec();