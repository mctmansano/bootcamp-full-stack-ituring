function listaDeSeriados(lista, seriado) {

    for (let item of lista) {
        if (item === seriado) {
            return lista.indexOf(seriado)
        }
}}


console.log (listaDeSeriados(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Dexter"))
console.log (listaDeSeriados(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Friends"))