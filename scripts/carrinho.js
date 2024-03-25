
const tbody=document.querySelector('.produtos')
let produtosDoCarrinho = JSON.parse(sessionStorage.getItem('carrinho'));
const h3Inicio = document.querySelector('.h3Inicio')
const cep1=document.getElementById('CEP1')
const cep2=document.getElementById('CEP2')
const btnSubmit=document.getElementById('submit')
const btnPagamento = document.querySelector('.finalizar-compra')
const sub_total=document.querySelector('.sub-total');
const total= document.getElementById('totalCalculado')


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
    if (value <= 9 && value !==0) {
        produtos.find(p => p.id == id).quantidade = value
        sessionStorage.setItem('carrinho', JSON.stringify(produtos))
        window.location.reload()

    }
    if(value == 0){
        sessionStorage.setItem('carrinho', JSON.stringify(produtos.filter(p => p.id !== id)))
        window.location.reload()
    }
    else {
        window.location.reload()
    }

}
const frete = 100

function calculaValorTotal(){
    let valor=0
    for (let i = 0; i < produtos.length; i++){
        valor+=(produtos[i].preco*(1-(produtos[i].desconto/100)))*produtos[i].quantidade
    }
    return valor.toFixed(2)
}

const valorTotal = calculaValorTotal() 

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
                <input class="quantidade-input" id="quantidade" onInput="alteraQuantidade(value,${produtos[i].id})"
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
    for(let i=0;i<produtos.length;i++){
        html+=
        `
        <div class="valores">
            <span>${produtos[i].nome}:</span>
            <span id="valor-frete">R$ ${produtos[i].preco} - ${produtos[i].quantidade} X</span>
        </div>
        `
    }
    sub_total.innerHTML=html
    total.innerHTML=`<span>Total</span><span id="subtotal">R$ ${valorTotal}</span>`
}

btnSubmit.addEventListener('click',()=>{
    
})
retornaHtml()
retornaTotal()

