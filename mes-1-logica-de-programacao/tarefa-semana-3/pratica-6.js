function buscandoTh (lista, serieComTh){
let listaDeSeriados = []

    for (let item of lista){
        if (item.includes(serieComTh)){
            listaDeSeriados.push(item)
        }
    }

    return listaDeSeriados
}

console.log(buscandoTh(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Th"))
