function corEmRGB(cor) {

    switch (cor) {
        case "vermelha":
            console.log("rgb(255,0,0)")
            break;
        case "laranja":
            console.log("rgb(255,128,0)")
            break;
        case "amarela":
            console.log("rgb(255,255,0)")
            break;
        case "verde":
            console.log("rgb(,255,)")
            break;
        case "azul claro":
            console.log("rgb(0,255,255)")
            break;
        case "azul marinho":
            console.log("RGB(0,0,255)")
            break;
        case "rosa":
            console.log("rgb(255,0,255)")
            break
        default:
            console.log("rgb(255,255,255)")
            break;

    }
}

corEmRGB("vermelha")
corEmRGB("amarela")
corEmRGB("rosa")
corEmRGB("roxo")