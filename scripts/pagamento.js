const patternNome=(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g)
const divValorTot=document.getElementById('valorTot')
const valorASerImpresso= sessionStorage.getItem('valorTotal');
divValorTot.innerHTML=`<h2>R$ ${valorASerImpresso}</h2>`
let metodoSelecionado=''
function formatarNomeMetodoPagamento(method) {
    var nomes = {
        "credit-card": "Cartão de Crédito",
        "debit-card": "Cartão de Débito",
        "pix": "PIX",
        "boleto": "Boleto"
    };
    return nomes[method.toLowerCase()] || method;
}

function zeraCarrinhoEFrete(){
    sessionStorage.removeItem("carrinho");
    sessionStorage.removeItem("frete");
    sessionStorage.removeItem("produtoClickado");
    sessionStorage.removeItem("valorTotal");
}

function togglePaymentDetails(method) {
    metodoSelecionado=method
    var details = document.getElementById(method + '-details');
    var allDetails = document.querySelectorAll('.payment-details');

    allDetails.forEach(function (detail) {
        if (detail.id !== method + '-details') {
            detail.style.display = 'none';
        }
    });

    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }

    document.getElementById("metodo-selecionado").textContent = formatarNomeMetodoPagamento(method);

    if (method === 'pix') {
        document.getElementById("card-flag").src = "images/logo-pix.png";
    } else if (method === 'boleto') {
        document.getElementById("card-flag").src = "images/logo-boleto.png";
    } else if (method === 'credit-card') {
        document.getElementById("card-flag").src = "images/logo-card.png";
    } else if (method === 'debit-card') {
        document.getElementById("card-flag").src = "images/logo-card.png";
    } else {
        document.getElementById("card-flag").src = "images/nothing.png";
    }
}

//Numero do cartao
var numeroCartao = document.querySelectorAll(".numero-cartao");
numeroCartao.forEach(function (inputNumeroCartao) {
    inputNumeroCartao.addEventListener("input", function () {
        var primeiroDigito = this.value.trim().charAt(0);
        var imagemCartao = document.getElementById("card-flag");

        if (primeiroDigito === "3") {
            imagemCartao.src = "images/logo-american-express.png"
            imagemCartao.alt = "Cartão American Express"
        }
        else if (primeiroDigito === "4") {
            imagemCartao.src = "images/logo-visa.png";
            imagemCartao.alt = "Cartão Visa";
        }
        else if (primeiroDigito === "5") {
            imagemCartao.src = "images/logo-master-card.png";
            imagemCartao.alt = "Cartão Mastercard";
        }
        else if (primeiroDigito === "6") {
            imagemCartao.src = "images/logo-elo.png"
            imagemCartao.alt = "Cartão Elo"
        }
        else {
            imagemCartao.src = "";
            imagemCartao.alt = "";
        }

        var formattedValue = this.value.replace(/\D/g, '');
        formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ').trim();
        this.value = formattedValue;
    });
});

//Validade do cartao
var dataValidade = document.querySelectorAll(".data-validade");
dataValidade.forEach(function (inputDataValidade) {
    inputDataValidade.addEventListener("input", function (event) {
        var inputValue = this.value;
        var numericValue = inputValue.replace(/\D/g, '');
        var formattedValue = '';
        for (var i = 0; i < numericValue.length; i++) {
            if (i === 2) {
                formattedValue += '/';
            }
            formattedValue += numericValue[i];
        }
        this.value = formattedValue;
    });
});

//Codigo do cartao
var codigoSeguranca = document.querySelectorAll(".codigo-seguranca");
codigoSeguranca.forEach(function (input) {
    input.addEventListener("input", function (event) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});



function nomeCartaoValidacao(a){
    if(a.value.length<3){
        return false
    }
    else{
        return true
    }
}
function codigoSegurancaValidacao(a){
    if(a.value.length!=3){
        return false
    }
    else{
        return true
    }
}
function dataCartaoValidacao(a){
    let data = a.value
    const [mes,ano]=data.split('/')
    if(mes>=1&&mes<13&&ano>=24){
        return true
    }
    else{
        return false
    }
}
function numeroCartaoValidacao(a){
    if(a.value.length!=19){
        return false
    }
    else{
        return true
    }
}
function validarCartao(nome,data,cod,numero){
    let preechidoCorretamente=false;
    const nameV=nomeCartaoValidacao(nome)
    const dataV=dataCartaoValidacao(data)
    const codV=codigoSegurancaValidacao(cod)
    const numV=numeroCartaoValidacao(numero)
    if(nameV&&dataV&&codV&&numV){
        preechidoCorretamente=true
    }

    return preechidoCorretamente
}

//Nome no cartao
var nomeCartao = document.querySelectorAll(".nome-cartao");
nomeCartao.forEach(function (input) {
    input.addEventListener("input", function (event) {
        this.value = this.value.replace(patternNome, '').toUpperCase();
    })
});

const btnFinalizar = document.querySelector('.finish-payment')

btnFinalizar.addEventListener("click", () => {
    if(metodoSelecionado=='pix'||metodoSelecionado=='boleto'){
        zeraCarrinhoEFrete()
        window.location.href="../pedido.html"
    }
    else if(metodoSelecionado=="credit-card"){
        const nomeCartaoc = document.querySelector(".nome-c");
        const numeroCartaoc = document.querySelector(".numero-c");
        const codigoCartaoc = document.querySelector(".codigo-c");
        const dataCartaoc = document.querySelector(".data-c");

        let verificar = validarCartao(nomeCartaoc,dataCartaoc,codigoCartaoc,numeroCartaoc)
        if(verificar){
            zeraCarrinhoEFrete()
            window.location.href="../pedido.html"
        }
        else{
            alert('Dados inválidos!')
        }
        
    }
    else if(metodoSelecionado=="debit-card"){
        const nomeCartaoD = document.querySelector(".nome-D");
        const numeroCartaoD = document.querySelector(".numero-D");
        const codigoCartaoD = document.querySelector(".codigo-D");
        const dataCartaoD = document.querySelector(".data-D");

        let verificar = validarCartao(nomeCartaoD,dataCartaoD,codigoCartaoD,numeroCartaoD)
        if(verificar){
            zeraCarrinhoEFrete()
            window.location.href="../pedido.html"
        }
        else{
            alert('Dados inválidos!')
        }
    }
    else{
        alert('Dados inválidos!')
    }
});


