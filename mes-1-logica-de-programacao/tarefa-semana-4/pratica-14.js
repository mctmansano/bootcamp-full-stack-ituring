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

function mediaDasAvaliacoes(avaliacoes) {
    let notas = avaliacoes.avaliações.map(function (avaliações) {
        return avaliações.nota
    })
    let somaDasNotas = notas.reduce(function (soma, i) {
        return soma + i
    })
    let media = somaDasNotas / notas.length

    console.log(`A média de avaliações do restaurante Turing Gourmet foi de ${media.toFixed(2)}.`)
}

mediaDasAvaliacoes(caracteristicaDosResturantes)