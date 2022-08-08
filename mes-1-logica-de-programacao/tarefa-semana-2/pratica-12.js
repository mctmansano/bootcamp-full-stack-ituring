let semana = (numero) => {
    switch (numero) {
        case (1):
            console.log("Segunda")
            break;
        case (2):
            console.log("Terça")
            break;
        case (3):
            console.log("Quarta")
            break;
        case (4):
            console.log("Quinta")
            break;
        case (5):
            console.log("Sexta")
            break;
        case (6):
            console.log("Sábado")
            break;
        case (7):
            console.log("Domingo")
            break;
        default:
            console.log(`O número ${numero} não é válido para dia de semana`)
            break;
    }
}

semana(1)
semana(2)
semana(3)
semana(4)
semana(7)