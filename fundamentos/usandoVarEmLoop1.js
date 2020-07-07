// Aula 32


// Em Loop o uso de var também é impactado pelo escopo global
for (var i = 0; i < 10; i++) {
    console.log(i)
}

// var i, ainda existe fora do contexto do loop
console.log(`i = ${i}`)