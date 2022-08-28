let avaliacoesDeFilmes = [{
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    genero: ["Biografia", "Drama", "História"]
},
{
    titulo: "Top Gun",
    notaAvaliacao: 8.6,
    duracao: 130,
    anoPublicacao: 2022,
    genero: ["Ação", "Drama"]
},
{
    titulo: "O Jogo da Imitação",
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ["Biografia", "Drama", "Suspense", "Guerra"]
}]

let listaFilmes = avaliacoesDeFilmes.map(function (avaliacoesDeFilmes) {
    console.log( `
    ${avaliacoesDeFilmes.titulo} (Nota: ${avaliacoesDeFilmes.notaAvaliacao})
    • Duração: ${avaliacoesDeFilmes.duracao} minutos
    • Ano de publicação: ${avaliacoesDeFilmes.anoPublicacao}
    • Gênero: ${(avaliacoesDeFilmes.genero.join(", "))}
`) 
return 
})


