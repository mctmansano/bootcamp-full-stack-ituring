let entradasEsaidas = [100, -20, -30, 10, -7, -21, -5]
let saida = 0
let entrada = 0
function somaDeValores() {
        for (let i = 0; i < entradasEsaidas.length; i++) {
            if (entradasEsaidas[i] > 0) {
                entrada = entrada + entradasEsaidas[i]
            }
        }
        for (let i = 0; i < entradasEsaidas.length; i++) {
            if (entradasEsaidas[i] < 0) {
                saida = saida + entradasEsaidas[i]
            }
        }
    return `O valor total depositado foi de: R$ ${entrada}
O valor total retirado foi de: R$ ${-saida}
O saldo final de sua conta foi positivo no valor de R$ ${entrada - (-saida)}`
}



console.log(somaDeValores())