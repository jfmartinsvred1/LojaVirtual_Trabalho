
const tbody=document.querySelector('.produtos')
let produtosDoCarrinho = JSON.parse(sessionStorage.getItem('carrinho'));
const h3Inicio = document.querySelector('.h3Inicio')
const cep1=document.getElementById('CEP1')
const cep2=document.getElementById('CEP2')
const btnSubmit=document.getElementById('')
const btnPagamento = document.querySelector('.finalizar-compra')

cep1.addEventListener('input',()=>{
    if(cep1.value.length==5){
        cep2.focus()
    }
})
cep2.addEventListener('keydown',(e)=>{
    if(cep2.value.length==0&&e.keyCode===8){
        cep1.focus()
    }
})
h3Inicio.addEventListener('click',()=>{
    window.location.href='../produtos.html'
})

let produtos = []
if(produtosDoCarrinho!==null){
    produtosDoCarrinho.forEach(function(nome) {
        produtos.push(nome)
      });
}


function removerProdutoDoCarrinho(id){
    produtos=produtos.filter(p=>p.id!==id)
    sessionStorage.setItem('carrinho',JSON.stringify(produtos))
    if(produtos.length<=0){
        sessionStorage.removeItem('carrinho')
    }

    window.location.reload()
}

function alteraQuantidade(value, id) {
    if (value <= 9) {
        produtos.find(p => p.id == id).quantidade = value
        sessionStorage.setItem('carrinho', JSON.stringify(produtos))
    }
    else {
        window.location.reload()
    }

}

function retornaHtml() {
    let html = ``
    for (let i = 0; i < produtos.length; i++) {
        html = html + `<tr>
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
            <th id="valor-total">R$ ${(((produtos[i].preco * (1 - produtos[i].desconto / 100))) * produtos[i].quantidade).toFixed(2)}</th>
            <th class="btn-remove"><i class='bx bxs-x-circle' onClick="removerProdutoDoCarrinho(${produtos[i].id})"></i></th>
        </tr>`

    }
    tbody.innerHTML = html
}
retornaHtml()

if (produtos.length > 0) {
    btnPagamento.classList.remove('hidden-block')
    btnPagamento.addEventListener("click", () => {
        window.location.href = './pagamento.html'
    });
} else {
    btnPagamento.classList.add('hidden-block')
}

function retornaTotal(){
    let html=
    `
    `
}
retornaHtml()

