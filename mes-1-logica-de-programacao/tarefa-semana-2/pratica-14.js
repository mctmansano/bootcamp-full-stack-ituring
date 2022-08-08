function imc(pesoEmKg, alturaEmMetro) {
    if ((pesoEmKg / (alturaEmMetro * alturaEmMetro)) < 18.5)
        console.log("Abaixo do peso")
    else if ((pesoEmKg / (alturaEmMetro * alturaEmMetro))>18.5 && (pesoEmKg / (alturaEmMetro * alturaEmMetro)) < 25)
        console.log("Peso Normal")
    else if ((pesoEmKg / (alturaEmMetro * alturaEmMetro)) > 25 && (pesoEmKg / (alturaEmMetro * alturaEmMetro)) < 30)
        console.log("Sobrepeso")
    else
        console.log("Obesidade")

}

imc(56, 1.70)
imc(140, 1.20)
imc(20, 1.60)
imc(70, 1.8)