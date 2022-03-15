let numero = document.getElementById('numI')
let tabela = document.getElementById('seltab')
let res = document.getElementById('final')
let valores = []

function eNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(n) {
    if (eNumero(numero.value) && !naLista(numero.value, valores)) {
        window.alert('OK!')
    } else {
        window.alert('[ERRO] Valor inválido ou já se encontra na lista!')
    }
}


