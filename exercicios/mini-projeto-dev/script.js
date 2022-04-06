const botao = document.getElementById("button")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const dados = document.querySelector(".itens")

const msgErro = document.querySelector(".msg")

botao.addEventListener("click", function (evento) {
    evento.preventDefault()
    
    const valorNome = nome.value;
    const valorEmail = email.value;
    
    if (valorNome === '' || valorEmail === '') {
        msgErro.textContent = "Por favor preencha os campos!";

        return setTimeout(() => {
            msgErro.innerHTML = ""
        }, 3500);
    }
    
    const li = document.createElement('li')
    li.innerHTML = `Nome: ${valorNome} <br> Email: ${valorEmail}`

    dados.appendChild(li);

    nome.value = "";
    email.value = "";
});
