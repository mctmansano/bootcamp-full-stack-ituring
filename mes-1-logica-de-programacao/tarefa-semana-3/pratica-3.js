function numeroEhPrimo(numeroInteiro) {
    for (i = 2; i < numeroInteiro; i++){
        if (numeroInteiro % i === 0)
        return false;
    }
return true;
}


console.log(numeroEhPrimo(17))
console.log(numeroEhPrimo(2))
console.log(numeroEhPrimo(7))
console.log(numeroEhPrimo(8))
console.log(numeroEhPrimo(5))
console.log(numeroEhPrimo(23))
console.log(numeroEhPrimo(15))
console.log(numeroEhPrimo(1500450271))
