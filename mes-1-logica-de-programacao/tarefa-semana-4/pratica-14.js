let caracteristicaDosResturantes = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliações: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
  }

function mediaDasAvaliacoes (notasDasPessoas) {
    let notasDasAvaliacoes = notasDasPessoas.map((notas) => caracteristicaDosResturantes.avaliações)
    console.log(notasDasAvaliacoes)
  }

mediaDasAvaliacoes(caracteristicaDosResturantes)