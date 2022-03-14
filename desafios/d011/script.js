function verificar() {
    var ano = window.prompt('Qual ano quer verificar?')
    var res = document.getElementById('res')
    if (ano % 4 == 0) {
        res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2> <p>O ano de ${ano} <mark id="v">É BISSEXTO</mark></p>`
    } else {
        res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2> <p>O ano de ${ano} <mark id="f">NÃO É BISSEXTO</mark></p>`
    } 
}

