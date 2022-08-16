let entradasEsaidas = [100, -20, -30, 10, -7, -21, -5]
let soma = 0

function somaDeValores(){
    for (let i in entradasEsaidas) {
        soma += entradasEsaidas[i]
    }
    return soma
}

console.log("O saldo final de sua conta foi positivo no valor de R$ " + somaDeValores(entradasEsaidas))