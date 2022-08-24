function indiceDasSeries(lista) {


    lista.forEach((elemento, indice) => {
        console.log(`[${indice}] ${elemento}`)
    })}

indiceDasSeries(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"])

/*
let listaDeSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

function itemESeries(nomedeSeries, indice){
    console.log([indice], nomedeSeries)
}

listaDeSeries.forEach(itemESeries)



function buscaSerie(lista, busca) {

    let indiceEncontrado

    lista.forEach(function (elemento) {
        if (elemento === busca) {
            indiceEncontrado = lista.indexOf(busca)
        }

    })
    return indiceEncontrado
}

console.log(buscaSerie(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Dexter"))

console.log(buscaSerie(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Friends"))*/