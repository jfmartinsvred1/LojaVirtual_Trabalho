const formLogin = document.getElementById('form-login');
const emailLogin = document.getElementById('email')
const senhaLogin = document.getElementById('senha')
localStorage.setItem("email", "");
localStorage.setItem("senha", "");
let user ={
    email:localStorage.getItem("email"),
    senha:localStorage.getItem("senha")
}
formLogin.addEventListener('submit', (e)=>{
    e.preventDefault()
    localStorage.setItem("email", emailLogin.value);
    localStorage.setItem("senha", senhaLogin.value);
    console.log(localStorage.getItem("email"))
})

