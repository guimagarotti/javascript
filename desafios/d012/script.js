function verificar() {
    var pAnt = window.prompt('Qual era o preço anterior do produto?')
    var pAtu = window.prompt('Qual é o preço atual do produto?')
    var res = document.getElementById('res')
    var variacao = Number(pAtu - pAnt)
    var porcem = ((pAtu * 100) / pAnt - 100).toPrecision(2)
    
    res.innerHTML = `<h2>Analisando os valores informados</h2>`
    res.innerHTML += `<p>O produto custava R$ <strong>${pAnt.replace('.', ',')}</strong> e agora custa R$ <strong>${pAtu.replace('.', ',')}</strong>.</p>`
    
    if (pAnt < pAtu) {
        res.innerHTML += `<p>Hoje o produto está mais <strong>caro</strong>.</p>`
        res.innerHTML += `<p>O preço subiu R$ <strong>${Number(variacao).toFixed(2)}</strong> em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de <strong>${porcem.replace('.', ',')}%</strong> para cima.</p>`
    }
    if (pAnt > pAtu) {
        res.innerHTML += `<p>Hoje o produto está mais <strong>barato</strong>.</p>`
        res.innerHTML += `<p>O preço caiu R$ <strong>${-variacao.toFixed(2)}</strong> em relação ao preço anterior.</p>`
    }
}