function gerarNumeroAleatorio() {
    min = 1
    max = 1000
    return (Math.random() * (max - min + 1)) + min
}

console.log (gerarNumeroAleatorio())