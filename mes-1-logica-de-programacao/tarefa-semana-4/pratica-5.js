function ordenando(lista) {

    lista.sort(function (a, b) {
        if (a < b) return -1
        if (a > b) return 1
        return 0

    })
    return lista
}


console.log(ordenando([4, 9, 7, 1, 8, 12]));