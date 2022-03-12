var cot = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

function converter() {
    var real = Number(window.prompt('Quantos R$ você tem na carteira?'))
    var dolar = cot.value
    var res = document.getElementById('res')
    res = real*dolar
    window.alert(`Você possui US$ ${res} dólares`)
}
