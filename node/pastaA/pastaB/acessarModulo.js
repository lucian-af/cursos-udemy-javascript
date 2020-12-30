const moduloA = require('../../moduloA');
console.log(moduloA.ola);


const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia!');
    res.end();
    console.log('teste');
}).listen(8080);