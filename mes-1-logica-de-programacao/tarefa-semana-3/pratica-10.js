let votos = []
let votosBrasil = []
let votosArgentina = []
let votosEspanha = []
let votosPortugal = []

function ResultadoVotação(votos) {
    for (let i = 0; i < votos.length; i++) {
        if (votos[i] === 1) {
            votosBrasil.push(i)
        }
    }
    for (let i = 0; i < votos.length; i++) {
        if (votos[i] === 2) {
            votosArgentina.push(i)
        }
    }
    for (let i = 0; i < votos.length; i++) {
        if (votos[i] === 3) {
            votosEspanha.push(i)
        }
    }
    for (let i = 0; i < votos.length; i++) {
        if (votos[i] === 4) {
            votosPortugal.push(i)
        }
        
    } return `Brasil: ${votosBrasil.length} voto(s)
Argentina: ${votosArgentina.length} voto(s)
Espanha: ${votosEspanha.length} voto(s)
Portugal: ${votosPortugal.length} voto(s)`
}

console.log(ResultadoVotação([1, 1, 1, 4, 4, 2, 3, 2]))