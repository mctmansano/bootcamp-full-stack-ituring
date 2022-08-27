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

// somar todas as retiradas
// somar todos os depósitos
// subtrair depósitos de retiradas


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

    let somaDedepositos = valoresDeDepositos.reduce(function(soma, i){
        return soma + i
    })
    console.log(`O saldo final de sua conta foi positivo no valor de R$ ${somaDedepositos - somaDeRetiradas}.`)

}

valoresRetirados(movimentacoesDaConta)