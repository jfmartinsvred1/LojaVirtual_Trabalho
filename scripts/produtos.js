
const nomeCliente = document.getElementById("nomeCliente")
    .innerText = `Olá, ${sessionStorage.getItem("nome")}`

const divProducts = document.querySelector('.products')
const divAlunos = document.querySelector('.gitHubs')

function transicao(id) {
    let produto = produtos.find(produto => produto.id == id)
    sessionStorage.setItem("produtoClickado", JSON.stringify(produto))
    window.location.href = "./produto.html"
}
function zerarCep(){
    sessionStorage.setItem('frete',0)
}

const produtos =
    [
        {
            id: 1,
            img: "./images/productsImages/Product1/Tênis-Nike-Air-Max-90-Masculino-1.jpg",
            nome: "Tênis Nike Air Max 90 Masculino",
            preco: 799.99,
            desconto: 0.0
        },
        {
            id: 2,
            img: "./images/productsImages/Product2/Tênis-Nike-Air-Force-1-Flyease-1.jpg",
            nome: "Tênis Nike Air Force 1 Flyease",
            preco: 799.99,
            desconto: 0.0
        },
        {
            id: 3,
            img: "./images/productsImages/Product3/SB-Dunk-Low-Pro-1.jpg",
            nome: "SB Dunk Low Pro",
            preco: 899.99,
            desconto: 30.0
        },
        {
            id: 4,
            img: "./images/productsImages/Product4/Air-Jordan-1-Retro-Low-OG-1.jpg",
            nome: "Air Jordan 1 Retro Low OG",
            preco: 1099.99,
            desconto: 0.0
        },
        {
            id: 5,
            img: "./images/productsImages/Product5/Tênis-Nike-SB-Force-58-Unissex-6.jpg",
            nome: "Tênis Nike SB Force 58 Unissex",
            preco: 479.99,
            desconto: 0.0
        },
        {
            id: 6,
            img: "./images/productsImages/Product6/Air-Force-1-x-AMBUSH-1.jpg",
            nome: "Air Force 1 x AMBUSH",
            preco: 1499.90,
            desconto: 0.0
        }
    ]


const alunos = [
    {
        nome: "João Victor Fernandes Martins",
        foto: "https://github.com/jfmartinsvred1.png",
        gitHub: "https://github.com/jfmartinsvred1"
    },
    {
        nome: "Leandro",
        foto: "https://github.com/leanstepcop.png",
        gitHub: "https://github.com/leanstepcop"
    },
    {
        nome: "Saulo",
        foto: "https://github.com/saulomvvr.png",
        gitHub: "https://github.com/saulomvvr"
    },
    {
        nome: "Guilherme Knust",
        foto: "https://media.licdn.com/dms/image/D4D35AQEjGyFULQL8FA/profile-framedphoto-shrink_800_800/0/1710661715585?e=1711389600&v=beta&t=dsOcAzISuOYFaIb0zixAfQL5PJkL23vgsTn3i1lsrdY",
        gitHub: ""
    },
]

function adicionarAoCarrinho(id) {
    let productTemp = produtos.find(p => p.id == id)
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
        if (produtosDoCarrinho.find(p => p.id == id) == null) {
            produtosDoCarrinho.push(produtoDoCarrinho)
        }
        else {
            if (produtosDoCarrinho.find(p => p.id == id).quantidade < 9)
                produtosDoCarrinho.find(p => p.id == id).quantidade += 1
        }

    }
    sessionStorage.setItem('carrinho', JSON.stringify(produtosDoCarrinho))
    alteraQuantidadeIcone()
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

function retornaHtmlProdutos() {
    let html = ``
    for (let i = 0; i <= produtos.length - 1; i++) {
        if (produtos[i].desconto != 0) {
            let produtoComDesconto = produtos[i].preco * (1 - (produtos[i].desconto / 100))
            html += `
            <div class="sneaker">
                <img src=${produtos[i].img} alt=${produtos[i].nome} onClick="transicao(${produtos[i].id})">
                <h3 onClick="transicao(${produtos[i].id})">${produtos[i].nome}</h3>
                <h4 id="promo" onClick="transicao(${produtos[i].id})">De 
                    <s>
                        R$ ${produtos[i].preco} 
                    </s>
                    por apenas R$ ${produtoComDesconto.toFixed(2)}
                </h4>
                <img src="./images/adicionar-produto.png" class="iconeAdcionarProduto" onClick="adicionarAoCarrinho(${produtos[i].id})">
            </div>`
        }
        else {
            html += `
                <div class="sneaker">
                    <img src=${produtos[i].img} alt=${produtos[i].nome} onClick="transicao(${produtos[i].id})">
                    <h3 onClick="transicao(${produtos[i].id})">${produtos[i].nome}</h3>
                    <h4 onClick="transicao(${produtos[i].id})">R$ ${produtos[i].preco}</h4>
                    <img src="./images/adicionar-produto.png" class="iconeAdcionarProduto" onClick="adicionarAoCarrinho(${produtos[i].id})">
                </div>`
        }
    }
    divProducts.innerHTML = html
}

function retornaFooter() {
    let html = ``
    for (let i = 0; i <= alunos.length - 1; i++) {
        html += `
        <div class="aluno">
                <img src="${alunos[i].foto}" alt="Foto de ${alunos[i].nome}">
                <h4>${alunos[i].nome}</h4>
        </div>
        `
    }
    divAlunos.innerHTML = html
}
retornaHtmlProdutos()
retornaFooter()
alteraQuantidadeIcone()

