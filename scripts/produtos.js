
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
            desconto: 0.0,
            descricao:"Origens do Nike Air Max  A revolucionária tecnologia Air apareceu pela primeira vez nos calçados Nike em 1978. Em 1987, o Air Max 1 estreou com a tecnologia Air visível no seu calcanhar, permitindo que os fãs não só sentissem o amortecimento do Air, mas pudessem vê-lo. Desde então, cada nova geração do Air Max tem sido uma sensação entre atletas e colecionadores, oferecendo combinações impressionantes de cor e um amortecimento confiável e leve."
        },
        {
            id: 2,
            img: "./images/productsImages/Product2/Tênis-Nike-Air-Force-1-Flyease-1.jpg",
            nome: "Tênis Nike Air Force 1 Flyease",
            preco: 799.99,
            desconto: 0.0,
            descricao:"Air Force 1  Estreando em 1982 como um must-have do basquete, o Air Force 1 se destacou nos anos 90. O visual clean do AF1 clássico branco foi endossado das quadras de basquete para as ruas e além. Encontrando seu ritmo na cultura do hip-hop, lançando colaborações e cores limitadas, o Air Force 1 se tornou um tênis icônico em todo o mundo. E com mais de 2000 iterações deste item básico, seu impacto na moda, música e cultura do tênis não pode ser negado."
        },
        {
            id: 3,
            img: "./images/productsImages/Product3/SB-Dunk-Low-Pro-1.jpg",
            nome: "SB Dunk Low Pro",
            preco: 899.99,
            desconto: 30.0,
            descricao:"Uns Dunks repletos de estilo (e camurça)! Concebidos quase totalmente em camurça felpuda, estes Dunks têm encanto retrô para dar e vender. Indiscutivelmente elegantes (como as suas habilidades de skateboard), as cores vibrantes, como vermelho Mystic e esmeralda Rise, aumentam o encanto do tecido. O elemento que complementa o look? A sola exterior em Rosewood que lhe transporta diretamente de volta para os anos 70."
        },
        {
            id: 4,
            img: "./images/productsImages/Product4/Air-Jordan-1-Retro-Low-OG-1.jpg",
            nome: "Air Jordan 1 Retro Low OG",
            preco: 1099.99,
            desconto: 0.0,
            descricao:"Do basquete à moda, o AJ1 mudou o jogo do calçado para sempre. Com base no seu legado, esta edição marcante combina couro branco premium com toques brilhantes de University Red para um acabamento ultra-limpo. A marca Nike Air na língua é complementada pelo logotipo Wings bordado no calcanhar. Calce um novo par e mude seu jogo."
        },
        {
            id: 5,
            img: "./images/productsImages/Product5/Tênis-Nike-SB-Force-58-Unissex-6.jpg",
            nome: "Tênis Nike SB Force 58 Unissex",
            preco: 479.99,
            desconto: 0.0,
            descricao:"A melhor e mais recente novidade a aparecer nas ruas, o Force 58 garante a durabilidade da forma da sola com a flexibilidade de um tênis vulcanizado. Feito de lona e camurça e com acabamento perfurado na região dos dedos, todo o look é carregado com o DNA de herança do basquete."
        },
        {
            id: 6,
            img: "./images/productsImages/Product6/Air-Force-1-x-AMBUSH-1.jpg",
            nome: "Air Force 1 x AMBUSH",
            preco: 1499.90,
            desconto: 0.0,
            descricao:"Transite entre os mundos no AF1 x AMBUSH. A designer de moda e diretora criativa visionária Yoon Ahn aumenta o volume no visual icônico com tons ousados e toques coloridos inspirados em espaços techno. O couro premium oferece uma estética rica e cheia de variações naturais, para que você possa fazer a transição sem esforço do seu “9 to 5” para a pista de dança. E não importa se você está dançando ou não, o Swoosh exagerado dá a sensação de movimento. Entre — as coisas estão esquentando."
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
        foto: "https://media.licdn.com/dms/image/D4D35AQEjGyFULQL8FA/profile-framedphoto-shrink_200_200/0/1710661715585?e=1712080800&v=beta&t=8YiDWgF7GF_Sn8_voUBYvNVtAhJLJ0NV6A30TwlvQvc",
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

    if(produtosDoCarrinho==null){
        produtosDoCarrinho = 0
    }

    for (let i = 0; i < produtosDoCarrinho.length; i++) {
        quantidadeTotal += produtosDoCarrinho[i].quantidade
    }

    quantidadeIcone.innerText = quantidadeTotal.toString()

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

