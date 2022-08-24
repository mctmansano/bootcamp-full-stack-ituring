let utensilios = 
    {
        marca: "Tramontina",
        produto: "Jogo de talheres",
        preco: 500,
        quantidade: 132,
        categoria: "Utensilhos domésticos"
    }
function avaliacaoUtensilios(parametro) {
    console.log(Object.keys(parametro))
}

avaliacaoUtensilios(utensilios)