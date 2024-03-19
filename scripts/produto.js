let produto = JSON.parse((sessionStorage.getItem("produtoClickado")))
const divProduct= document.querySelector('.product')
function expandImage(img) {
    var modal = document.getElementById("myModal");
    var expandedImg = document.getElementById("expandedImg");

    modal.style.display = "block";
    expandedImg.src = img.src;
}
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

let image =[]

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