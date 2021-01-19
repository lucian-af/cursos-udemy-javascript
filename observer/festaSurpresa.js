const readline = require('readline');

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp);
            rl.close();
        });
    })
}

// observer
function namorada() {
    setTimeout(() => {
        console.log('N: Apagar as luzes...');
        console.log('N: Pedir silêncio...');
        console.log('N: Surpresa!!!');
    }, 2000);
}

// observer
function sindico(evento) {
    console.log('S: Monitorando o barulho!');
    console.log(`S: ${evento.resp}`);
    console.log(`S: ${evento.data}`);
}

// subject
async function porteiro(interessados) {
    while (true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q) \n');
        if (resp.toLowerCase() === 's') {
            // os observadores são notificados
            (interessados || []).forEach(obs => obs({ resp, data: Date.now() }));
        } else if (resp.toLowerCase() === 'q') {
            break;
        }
    }
}

/*
   Chamada da função    -> registra dois observadores
   Os observadores são  -> namorada e sindico
   o subject            -> porteiro
*/
porteiro([namorada, sindico])