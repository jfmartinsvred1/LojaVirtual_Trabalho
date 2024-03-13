const formLogin = document.getElementById('form-login');
const emailLogin = document.getElementById('email')
const senhaLogin = document.getElementById('senha')

console.log(sessionStorage.getItem("email"))
console.log(sessionStorage.getItem("senha"))

formLogin.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(
        emailLogin.value == sessionStorage.getItem("email")
        &&senhaLogin.value==sessionStorage.getItem("senha")
    )
    {
        window.location.href="../produtos.html"
    }
    else{
        /*caso login de errado*/
    }

})


