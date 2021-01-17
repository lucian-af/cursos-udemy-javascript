// // callbacks aninhadas
// setTimeout(function () {
//     console.log('Eexcutando callback...')
//     setTimeout(function () {
//         console.log('Eexcutando callback 2...')
//         setTimeout(function () {
//             console.log('Eexcutando callback 3...')
//         }, 2000);
//     }, 2000);
// }, 2000);

function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('Executando promise...');
            resolve('Vishhhh');
        }, tempo);
    })
}

esperarPor().then(esperarPor).then(esperarPor);