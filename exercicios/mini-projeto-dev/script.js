const botao = document.getElementById('button')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const formulario = document.getElementById('form')

const itens = document.querySelector('.itens')

botao.addEventListener('click', function (evento) {
    const valorNome = nome.value;
    const valorEmail = email.value;
    
    if (nome.value.length == '' || email.value.length == '') {
        return window.alert('[ERRO] Preencha todos os campos!')
    }

    formulario.style.background = 'lightgreen'
    itens.firstElementChild.innerHTML = valorNome;
    itens.lastElementChild.innerHTML = valorEmail;
})
    
