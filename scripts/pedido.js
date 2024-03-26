function aleatoryNumberGenerate(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var aleatoryNumber = aleatoryNumberGenerate(100000000, 999999999);

var requestNumber =  document.getElementById("id-pedido");
requestNumber.textContent = requestNumber.textContent.replace("#x", "#" + aleatoryNumber);

function temporizador() {
    var timerNumber = document.getElementById("timerNumber");
    for (let i = 5; i >= 0; i--) {
        setTimeout(function() {
            if(i > 0){
                timerNumber.textContent = i;
            }
            else{
                window.location.href = './produtos.html'
            }
        }, (5 - i) * 1000);
    }
}

temporizador();