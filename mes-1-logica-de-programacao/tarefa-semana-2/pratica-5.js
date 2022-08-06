var precoDoProdutoComDesconto = function valorProdutoComDesconto (valorProduto, porcentagemDeDesconto){
  
    return (valorProduto * (1 - (porcentagemDeDesconto/100)))
}

console.log (precoDoProdutoComDesconto (100, 10))