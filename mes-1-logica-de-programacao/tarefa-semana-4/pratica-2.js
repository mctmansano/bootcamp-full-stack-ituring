function buscaSerie(lista, busca) {

    let indiceEncontrado

    lista.forEach(function (elemento) {
        if (elemento === busca) {
            indiceEncontrado = lista.indexOf(busca)
        }

    })
    console.log(indiceEncontrado)
}

buscaSerie(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Dexter")

buscaSerie(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Friends")