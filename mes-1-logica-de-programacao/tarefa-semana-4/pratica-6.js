let dadosDoFilme = {
    titulo: "Estrelas Além do Tempo",
    avaliacao: 7.8,
    duracao: 127,
    publicacao: 2016,
    categoria: "Drama"
}
function argumentoFilmes() {
    
    console.log(`O filme ${dadosDoFilme.titulo} que estreou em ${dadosDoFilme.publicacao}, tem a avaliação de ${dadosDoFilme.avaliacao} pelo IMDb.`)
}

argumentoFilmes(dadosDoFilme)