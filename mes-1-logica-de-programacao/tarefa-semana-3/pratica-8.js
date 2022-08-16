let entradasEsaidas = [100, -20, -30, 10, -7, -21, -5]
let soma = 0
let entradas = 0
let saidas = 0

function somaDeValores(){
    for (let valor in entradasEsaidas) {
        if (entradasEsaidas < 0){
           return entradas += entradasEsaidas[valor]
        }
    } return entradas
}

console.log("O saldo final de sua conta foi positivo no valor de R$ " + somaDeValores(entradasEsaidas))