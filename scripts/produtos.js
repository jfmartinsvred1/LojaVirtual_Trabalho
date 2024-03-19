
const nomeCliente = document.getElementById("nomeCliente")
.innerText=`Olá, ${sessionStorage.getItem("nome")}`

const divProducts = document.querySelector('.products')
const divAlunos = document.querySelector('.gitHubs')

function transicao(id){
    let produto = produtos.find(produto=>produto.id==id)
    sessionStorage.setItem("produtoClickado", JSON.stringify(produto))
    window.location.href="../produto.html"
}

const produtos= 
[
    {
        id:1,
        img:"../images/productsImages/Product1/Tênis-Nike-Air-Max-90-Masculino-1.jpg",
        nome:"Tênis Nike Air Max 90 Masculino",
        preco:799.99,
        desconto:0.0
    },
    {
        id:2,
        img:"../images/productsImages/Product2/Tênis-Nike-Air-Force-1-Flyease-1.jpg",
        nome:"Tênis Nike Air Force 1 Flyease",
        preco:799.99,
        desconto:0.0
    },
    {
        id:3,
        img:"../images/productsImages/Product3/SB-Dunk-Low-Pro-1.jpg",
        nome:"SB Dunk Low Pro",
        preco:899.99,
        desconto:30.0
    },
    {
        id:4,
        img:"../images/productsImages/Product4/Air-Jordan-1-Retro-Low-OG-1.jpg",
        nome:"Air Jordan 1 Retro Low OG",
        preco: 1099.00,
        desconto:0.0
    },
    {
        id:5,
        img:"../images/productsImages/Product5/Tênis-Nike-SB-Force-58-Unissex-6.jpg",
        nome:"Tênis Nike SB Force 58 Unissex",
        preco:479.99,
        desconto:0.0
    },
    {
        id:6,
        img:"../images/productsImages/Product6/Air-Force-1-x-AMBUSH-1.jpg",
        nome:"Air Force 1 x AMBUSH",
        preco:1499.90,
        desconto:0.0
    }
]


const alunos = [
    {
        nome:"João Victor Fernandes Martins",
        foto:"https://github.com/jfmartinsvred1.png",
        gitHub:"https://github.com/jfmartinsvred1"
    },
    {
        nome:"Leandro",
        foto:"https://github.com/leanstepcop.png",
        gitHub:"https://github.com/leanstepcop"
    },
    {
        nome:"Saulo",
        foto:"https://github.com/saulomvvr.png",
        gitHub:"https://github.com/saulomvvr"
    },
    {
        nome:"Guilherme Knust",
        foto:"https://media.licdn.com/dms/image/D4D35AQEjGyFULQL8FA/profile-framedphoto-shrink_800_800/0/1710661715585?e=1711389600&v=beta&t=dsOcAzISuOYFaIb0zixAfQL5PJkL23vgsTn3i1lsrdY",
        gitHub:""
    },
]

function retornaHtmlProdutos(){
    let html=``
    for(let i=0;i<=produtos.length-1;i++){
        if(produtos[i].desconto!=0){
            let produtoComDesconto = produtos[i].preco * (1-(produtos[i].desconto/100))
            html += `
            <div class="sneaker" onClick="transicao(${produtos[i].id})">
                <img src=${produtos[i].img} alt=${produtos[i].nome}>
                <h3>${produtos[i].nome}</h3>
                <h4 id="promo">De 
                    <s>
                        R$ ${produtos[i].preco} 
                    </s>
                    por apenas R$ ${produtoComDesconto.toFixed(2)}
                </h4>
            </div>`
        }
        else{
            html += `
            <div class="sneaker" onClick="transicao(${produtos[i].id})">
                <img src=${produtos[i].img} alt=${produtos[i].nome}>
                <h3>${produtos[i].nome}</h3>
                <h4>R$ ${produtos[i].preco}</h4>
            </div>`
        }
    }
    divProducts.innerHTML=html
}

function retornaFooter(){
    let html=``
    for(let i=0;i<=alunos.length-1;i++){
        html += `
        <div class="aluno">
                <img src="${alunos[i].foto}" alt="Foto de ${alunos[i].nome}">
                <h4>${alunos[i].nome}</h4>
        </div>
        `
    }
    divAlunos.innerHTML=html
}
retornaHtmlProdutos()
retornaFooter()

// let cep="27262570"
//  async function retornaCep(cep){
//     const response = await fetch('https://viacep.com.br/ws/27262570/json/',{
//         method:"GET"
//     })
//     const data = response.json()
//     console.log(await data)
//  }

//  retornaCep(cep)
