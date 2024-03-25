const formCadastro = document.getElementById('form-Cadastro')

formCadastro.addEventListener('submit', (e) => {
    e.preventDefault()
    sessionStorage.setItem("nome", document.getElementById('nomeCadastro').value)
    sessionStorage.setItem("email", document.getElementById('emailCadastro').value)
    sessionStorage.setItem("senha", document.getElementById('senhaCadastro').value)
    window.location.href = './index.html'
})