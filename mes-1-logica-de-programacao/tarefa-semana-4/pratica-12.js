let movimentacoesDaConta = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
},
{
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
}]

function valoresRetirados(movimentacoes) {
    let retiradas = movimentacoes.filter(function (movimentacao) {
        return movimentacao.movimentacao === "retirada"
    })

    let valoresDeRetiradas = retiradas.map(function (movimentacao) {
        return movimentacao.valor
    })

    let somaDeRetiradas = valoresDeRetiradas.reduce(function(soma, i){
        return soma + i
    })

    let depositos = movimentacoes.filter(function (movimentacao) {
        return movimentacao.movimentacao === "deposito"
    })

    let valoresDeDepositos = depositos.map(function (movimentacao) {
        return movimentacao.valor
    })

    let somaDeDepositos = valoresDeDepositos.reduce(function(soma, i){
        return soma + i
    })
    console.log(`Total de depósitos: ${depositos.length}
Total de retiradas: ${retiradas.length}
O valor total depositado foi de: R$ ${somaDeDepositos}
O valor total retirado foi de: R$ ${somaDeRetiradas}
O saldo final de sua conta foi positivo no valor de R$ 27O saldo final de sua conta foi positivo no valor de R$ ${somaDeDepositos - somaDeRetiradas}.`)

}

valoresRetirados(movimentacoesDaConta)