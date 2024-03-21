const tbody=document.querySelector('.produtos')
const produtosDoCarrinho = JSON.parse(sessionStorage.getItem('carrinho'))

function removerProdutoDoCarrinho(id){
    console.log(produtosDoCarrinho)
    produtosDoCarrinho = produtosDoCarrinho.splice(p=>p.id==id)
    console.log(produtosDoCarrinho)
}

function retornaHtml(){
    let html=``
    for(let i=0;i<produtosDoCarrinho.length;i++){
        html = html+`<tr>
            <th>
                <div class="product">
                  <img src="${produtosDoCarrinho[i].img}" width="128px" alt="${produtosDoCarrinho[i].nome}">
                  <div class="info">
                    <div class="name">${produtosDoCarrinho[i].nome}</div>
                  </div>
                </div>
            </th>
            <th id="valor-produto">
                R$ ${produtosDoCarrinho[i].preco}
            </th>
            <th>
                <input class="quantidade-input" id="quantidade" 
                value=${produtosDoCarrinho[i].quantidade} 
                type="number" placeholder="0">
            </th>
            <th id="valor-total">R$ ${(produtosDoCarrinho[i].preco * (1-produtosDoCarrinho[i].desconto/100)).toFixed(2)}</th>
            <th class="btn-remove"><i class='bx bxs-x-circle' onClick"removerProdutoDoCarrinho(${produtosDoCarrinho[i].id})"></i></th>
        </tr>`
        
    }
    tbody.innerHTML=html
}
retornaHtml()