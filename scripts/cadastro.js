const formCadastro = document.getElementById('form-Cadastro')
const nomeCadastro = document.getElementById('nomeCadastro')
const emailCadastro = document.getElementById('emailCadastro')
const senhaCadastro = document.getElementById('senhaCadastro')

formCadastro.addEventListener('submit',(e)=>{
    e.preventDefault()
    sessionStorage.setItem("nome", nomeCadastro.value)
    sessionStorage.setItem("email", emailCadastro.value)
    sessionStorage.setItem("senha", senhaCadastro.value)
    window.location.href="../index.html"
})