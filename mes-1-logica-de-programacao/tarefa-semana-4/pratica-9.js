let avaliacoesDeFilmes = [{
    titulo: "Um Sonho de Liberdade",
    notaAvaliacao: 9.2,
    duracao: 142,
    anoPublicacao: 1994,
    categoria: "Drama"
  },
  {
    titulo: "Clube da Luta",
    notaAvaliacao: 8.7,
    duracao: 139,
    anoPublicacao: 1999,
    categoria: "Drama"
  },
  {
    titulo: "Toy Story 3",
    notaAvaliacao: 8.3,
    duracao: 103,
    anoPublicacao: 2010,
    categoria: "Animação"
  }]

function valoresRetirdos(avaliacoes) {
    let arrayDeAvaliacao = avaliacoes.map(function (avaliacao) {
        return avaliacao.notaAvaliacao
    })
    let notaDoMelhorAvaliado = arrayDeAvaliacao.reduce(function(a, b){
        return Math.max(a, b)
    })
    if (notaDoMelhorAvaliado === avaliacoesDeFilmes.notaAvaliacao){
        return avaliacoesDeFilmes.titulo
    }
    console.log(`O filme de melhor avaliação com nota ${notaDoMelhorAvaliado} é: ${avaliacoesDeFilmes.titulo}.`)
}
 
valoresRetirdos(avaliacoesDeFilmes)
