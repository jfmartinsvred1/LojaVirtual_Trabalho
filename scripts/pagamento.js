function formatarNomeMetodoPagamento(method) {
    var nomes = {
        "credit-card": "Cartão de Crédito",
        "debit-card": "Cartão de Débito",
        "pix": "PIX",
        "boleto": "Boleto"
    };
    return nomes[method.toLowerCase()] || method;
}

function togglePaymentDetails(method) {
    var details = document.getElementById(method + '-details');
    var allDetails = document.querySelectorAll('.payment-details');

    allDetails.forEach(function(detail) {
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
}

//Numero do cartao
var numeroCartao = document.querySelectorAll(".numero-cartao");
numeroCartao.forEach(function(inputNumeroCartao) {
    inputNumeroCartao.addEventListener("input", function() {
        var primeiroDigito = this.value.trim().charAt(0);
        var imagemCartao = document.getElementById("card-flag");

        if(primeiroDigito === "3"){
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
        else if(primeiroDigito === "6"){
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
dataValidade.forEach(function(inputDataValidade) {
    inputDataValidade.addEventListener("input", function(event) {
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
codigoSeguranca.forEach(function(input) {
    input.addEventListener("input", function(event) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});

//Nome no cartao
var nomeCartao = document.querySelectorAll(".nome-cartao");
nomeCartao.forEach(function(input){
    input.addEventListener("input", function(event){
        this.value = this.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, '');
    })
});

//Checkout
