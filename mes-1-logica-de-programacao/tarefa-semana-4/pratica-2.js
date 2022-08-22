function buscaSerie(lista, busca) {
    lista.forEach(function (elemento) {
        if (elemento === busca) {
            console.log(lista.indexOf(busca))
            break
        }
        
    })

}

console.log(buscaSerie(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "This is Us"))

console.log(buscaSerie(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Friends"))