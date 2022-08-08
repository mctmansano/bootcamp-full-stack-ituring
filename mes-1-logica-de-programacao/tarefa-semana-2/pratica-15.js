function calculoIMC(pesoEmKg, alturaEmMetro) {
    return pesoEmKg/(alturaEmMetro*alturaEmMetro)
}

function classificacaoIMC (calculoIMC) {
    if (calculoIMC < 18.5)
    console.log("Abaixo do peso")
else if (calculoIMC>18.5 && calculoIMC < 25)
    console.log("Peso Normal")
else if (calculoIMC > 25 && calculoIMC < 30)
    console.log("Sobrepeso")
else
    console.log("Obesidade")
}

classificacaoIMC(calculoIMC())