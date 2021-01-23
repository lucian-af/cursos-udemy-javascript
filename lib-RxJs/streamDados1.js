function gerarNumeros() {
    return {
        iniciar(fn, intervalo = 1000) {
            let num = 0;
            const disparador = setInterval(() => fn(num++), intervalo)
            return {
                parar() {
                    clearInterval(disparador);
                }
            }
        }
    }
}

const temp1 = gerarNumeros()
const exec1 = temp1.iniciar(numero => console.log(`#1 ${numero * 2}`), 1000);
const exec11 = temp1.iniciar(numero => console.log(`#1.1 ${numero * 2}`), 1000);

const temp2 = gerarNumeros()
const exec2 = temp2.iniciar(numero => console.log(`#2 ${numero + 100}`), 2000);

setTimeout(() => {
    exec1.parar();
    exec2.parar();
}, 10000)

setTimeout(() => {
    exec11.parar();
}, 12000)