<<<<<<< HEAD
function expandImage(img) {
    var modal = document.getElementById("myModal");
    var expandedImg = document.getElementById("expandedImg"); 
=======
let produto = JSON.parse((sessionStorage.getItem("produtoClickado")))
const divProduct= document.querySelector('.product')
const h3Inicio = document.querySelector('.h3Inicio')
function expandImage(img) {
    var modal = document.getElementById("myModal");
    var expandedImg = document.getElementById("expandedImg");

>>>>>>> 8950ff407e5688d5dee583b9536ca5cd004a44d0
    modal.style.display = "block";
    expandedImg.src = img.src;
}
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

<<<<<<< HEAD
=======
let image =[]

h3Inicio.addEventListener('click',()=>{
    window.location.href='../produtos.html'
})

function retornaImgs(){
    let url=produto.nome.replace(/ /g,"-")
    for(let i=1;i<=6;i++){
        image.push(`../images/productsImages/Product${produto.id}/${url}-${i}.jpg`)
    }
}

console.log(image)
retornaImgs()

function retornaHtml(){
    let htmlImgs=``
    for(let i=0;i<image.length;i++){
        htmlImgs+=`<img 
        src="${image[i]}" 
        alt="Image${i}" onclick="expandImage(this);"> `
    }
    const htmlFinal=
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
            <h2>R$ ${produto.preco}</h2>
        </div>
    `
    divProduct.innerHTML=htmlFinal
}
retornaHtml()
>>>>>>> 8950ff407e5688d5dee583b9536ca5cd004a44d0
