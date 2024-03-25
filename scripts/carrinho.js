const tbody=document.querySelector('.produtos')
let produtosDoCarrinho = JSON.parse(sessionStorage.getItem('carrinho'))
let produtos = []
produtosDoCarrinho.forEach(function(nome) {
    produtos.push(nome)
  });


function removerProdutoDoCarrinho(id){
    produtos=produtos.filter(p=>p.id!==id)
    sessionStorage.setItem('carrinho',JSON.stringify(produtos))
    if(produtos.length<=0){
        sessionStorage.
    }
    window.location.reload()
}

function alteraQuantidade(value,id){
    if(value <=9){
        produtos.find(p=>p.id==id).quantidade=value
        sessionStorage.setItem('carrinho',JSON.stringify(produtos))
    }
    else{
        window.location.reload()
    }
    
}

function retornaHtml(){
    let html=``
    for(let i=0;i<produtos.length;i++){
        html = html+`<tr>
            <th>
                <div class="product">
                  <img src="${produtos[i].img}" width="128px" alt="${produtos[i].nome}">
                  <div class="info">
                    <div class="name">${produtos[i].nome}</div>
                  </div>
                </div>
            </th>
            <th id="valor-produto">
                R$ ${produtos[i].preco}
            </th>
            <th>
                <input class="quantidade-input" id="quantidade" onClick="alteraQuantidade(value,${produtos[i].id})"
                value=${produtos[i].quantidade} 
                type="number" placeholder="0">
            </th>
            <th id="valor-total">R$ ${(((produtos[i].preco * (1-produtos[i].desconto/100)))*produtos[i].quantidade).toFixed(2)}</th>
            <th class="btn-remove"><i class='bx bxs-x-circle' onClick="removerProdutoDoCarrinho(${produtos[i].id})"></i></th>
        </tr>`
        
    }
    tbody.innerHTML=html
}
retornaHtml()