let produto = JSON.parse((sessionStorage.getItem("produtoClickado")))
const divProduct = document.querySelector('.product')
const h3Inicio = document.querySelector('.h3Inicio')
h3Inicio.addEventListener('click',()=>{
    window.location.href='../produtos.html'
})
function expandImage(img) {
    var modal = document.getElementById("myModal");
    var expandedImg = document.getElementById("expandedImg");

    modal.style.display = "block";
    expandedImg.src = img.src;
}
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

let image = []

h3Inicio.addEventListener('click', () => {
    window.location.href = './produtos.html'
})

function retornaImgs() {
    let url = produto.nome.replace(/ /g, "-")
    for (let i = 1; i <= 6; i++) {
        image.push(`./images/productsImages/Product${produto.id}/${url}-${i}.jpg`)
    }
}

retornaImgs()

function retornaHtml() {
    let htmlImgs = ``
    for (let i = 0; i < image.length; i++) {
        htmlImgs += `<img 
        src="${image[i]}" 
        alt="Image${i}" onclick="expandImage(this);"> `
    }
    const htmlFinal =
        `
        <div id="myModal" class="expandingImg">
            <span class="closeImg" onclick="closeModal()">&times;</span>
            <img id="expandedImg" class="expanded-image">
        </div>
        <div class="productImages">
            <div class="productGallery">
            ${htmlImgs}
            </div>
        </div>
        <div class="productInfo">
            <h1>${produto.nome}</h1>
            <h2>R$ ${(((produto.preco * (1 - produto.desconto / 100))) ).toFixed(2)}</h2>
            <div class="sneakers-sizes">
                <h3>Selecione um tamanho</h3>
                <div class="row">
                    <button class="size-button" onclick="toggleButton(this)">35</button>
                    <button class="size-button" onclick="toggleButton(this)">36</button>
                    <button class="size-button" onclick="toggleButton(this)">37</button>
                    <button class="size-button" onclick="toggleButton(this)">38</button>
                    <button class="size-button" onclick="toggleButton(this)">39</button>
                </div>
                <div class="row">
                    <button class="size-button" onclick="toggleButton(this)">40</button>
                    <button class="size-button" onclick="toggleButton(this)">41</button>
                    <button class="size-button" onclick="toggleButton(this)">42</button>
                    <button class="size-button" onclick="toggleButton(this)">43</button>
                    <button class="size-button" onclick="toggleButton(this)">44</button>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-button" onclick="addToCart()">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
        `
    divProduct.innerHTML = htmlFinal
}
retornaHtml()

function toggleButton(button) {
    var buttons = document.querySelectorAll('.size-button');
    buttons.forEach(function(btn) {
        if (btn === button) {
            btn.classList.toggle('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function alteraQuantidadeIcone() {
    const quantidadeIcone = document.querySelector('.quantidade-cart')
    let produtosDoCarrinho = JSON.parse(sessionStorage.getItem('carrinho'))
    let quantidadeTotal = 0

    for (let i = 0; i < produtosDoCarrinho.length; i++) {
        quantidadeTotal += produtosDoCarrinho[i].quantidade
    }

    quantidadeIcone.textContent = quantidadeTotal.toString()

}

function addToCart() {
    let productTemp = produto
    let produtoDoCarrinho = {
        id: productTemp.id,
        img: productTemp.img,
        nome: productTemp.nome,
        preco: productTemp.preco,
        desconto: productTemp.desconto,
        quantidade: 1
    }
    let produtosDoCarrinho = JSON.parse(sessionStorage.getItem('carrinho'))
    if (produtosDoCarrinho == null) {
        produtosDoCarrinho = []
        produtosDoCarrinho.push(produtoDoCarrinho)
    }
    else {
        if (produtosDoCarrinho.find(p => p.id == produto.id) == null) {
            produtosDoCarrinho.push(produtoDoCarrinho)
        }
        else {
            if (produtosDoCarrinho.find(p => p.id == produto.id).quantidade < 9)
                produtosDoCarrinho.find(p => p.id == produto.id).quantidade += 1
        }

    }
    sessionStorage.setItem('carrinho', JSON.stringify(produtosDoCarrinho))
    alteraQuantidadeIcone()
}
alteraQuantidadeIcone()