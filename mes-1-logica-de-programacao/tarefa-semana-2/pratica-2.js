function nomeDoComprador (nome) {
    console.log ("Olá, " + nome)
}
nomeDoComprador("Maria Carolina")


function dadosDaEntrega (NomeDoProduto, NomeDaPessoaQueRecebeuOProduto, EnderecoDeEntrega) {
console.log("Fizemos a entrega do produto " + NomeDoProduto + " no endereço " + EnderecoDeEntrega + " com sucesso! O seu produto foi recebido por: " + NomeDaPessoaQueRecebeuOProduto + ". Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.")
}

dadosDaEntrega("notebook", "José", "Rua José Campos, 199")


function email(nomeDaPessoaQueEnviouOEmail) {
    return "Atenciosamente, " + '\n' + nomeDaPessoaQueEnviouOEmail 
}
console.log (email("Vinício"))

