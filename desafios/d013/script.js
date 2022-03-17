function entrar() {
    var res = document.getElementById('res')
    var nome = window.prompt('Qual o nome do aluno?')
    var n1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    var n2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    var media = (n1+n2) / 2

    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    res.innerHTML += `Com as notas ${n1} e ${n2}, <strong>a média é ${media}</strong>`
    
    if (media < 3) {
        res.innerHTML += `<p>Com média abaixo de 3,0 o aluno está <mark id="f">REPROVADO</mark></p>`
    } else if (media >= 3 && media <=6) {
        res.innerHTML += `<p>Com média entre 3,0 e 6,0 o aluno está em <mark id="a">RECUPERAÇÃO</mark></p>`
    } else {
        res.innerHTML += `<p>Com média acima de 6,0 o aluno está <mark id="v">APROVADO</mark></p>`
    }



}