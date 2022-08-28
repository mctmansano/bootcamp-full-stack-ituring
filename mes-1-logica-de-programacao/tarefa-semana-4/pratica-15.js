//Crie uma função que recebe uma lista de motoristas com os dados de cada veículo e o tempo estimado até o cliente (em minutos).
//Exiba o motorista que estiver com o menor tempo até você.

let carrosDisponiveis = [{
    motorista: "Thais S.",
    avaliacao: 9.8,
    tempoEstimado: 7,
    veiculo: "Palio",
    placa: "ABC4321"
  },
  {
    motorista: "Thales Gonçalves",
    avaliacao: 8.9,
    tempoEstimado: 4,
    veiculo: "Celta",
    placa: "ABC0987"
  },
  {
    motorista: "José Lopes",
    avaliacao: 9.9,
    tempoEstimado: 5,
    veiculo: "Fox",
    placa: "ABC1234"
  },
  {
    motorista: "Cristina Souza",
    avaliacao: 9.3,
    tempoEstimado: 3,
    veiculo: "Fox",
    placa: "ABC1234"
  },
  {
    motorista: "Leo Garcia",
    avaliacao: 8.5,
    tempoEstimado: 9,
    veiculo: "Ka",
    placa: "ABC8765"
  }]

function maisPerto(listaDeMotorista) {

    let ordenandoTempo = listaDeMotorista.sort(function(a,b) {
      let tempoA = a.tempoEstimado
      let tempoB = b.tempoEstimado
      return tempoA - tempoB
      })

      let primeiroNome = ordenandoTempo[0].motorista.split(" ")[0]

      return `${primeiroNome} está a caminho com o carro ${ordenandoTempo[0].veiculo} de placa ${ordenandoTempo[0].placa}. Chega em ${ordenandoTempo[0].tempoEstimado} minutos.`

    }
    
console.log(maisPerto(carrosDisponiveis))