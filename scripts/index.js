const formLogin = document.getElementById('form-login');
const emailLogin = document.getElementById('email')
const senhaLogin = document.getElementById('senha')

formLogin.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(emailLogin.value == sessionStorage.getItem("email")&&senhaLogin.value==sessionStorage.getItem("senha")){
        console.log("ok")
    }
    else{
        console.log("errado")
    }

})


