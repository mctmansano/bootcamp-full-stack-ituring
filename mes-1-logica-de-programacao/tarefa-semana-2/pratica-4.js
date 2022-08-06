function valorProdutoComDesconto (valorProduto, porcentagemDeDesconto){
  
    
    return (valorProduto * (1 - (porcentagemDeDesconto/100)))
}

console.log (valorProdutoComDesconto(100, 5))