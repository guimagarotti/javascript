var vetor = []
var res = document.getElementById('fim')

function naLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let numero = document.getElementById('n1')
    let tabela = document.getElementById('seltab')
    let num = numero.value
    
    if (num < 1 || num > 100) {
        window.alert('[ERRO] Digite um valor válido!')
    } else if (!naLista(num, vetor)) {
        vetor.push(Number(num))
        let item = document.createElement('option')
        item.text = `Valor ${Number(num)} adicionado.`
        tabela.appendChild(item)
        res.innerHTML = ''
    }
}

function finalizar() {
    if (vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let totN = vetor.length
        let maiorN = Math.max.apply(Math, vetor)
        let menorN = Math.min.apply(Math, vetor)
        let somaN = 0
        let medN = 0
        for (let pos in vetor) {
            somaN += vetor[pos]
        }
        medN = somaN / totN

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${totN}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maiorN}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menorN}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${somaN}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${Math.round(medN)}</strong>.</p>`
    }
}