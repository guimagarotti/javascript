var vetor = []
/*
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
*/

/*
if (eNumero(numero.value) && !naLista(numero.value, valores)) {
    window.alert('OK!')
} else {
    window.alert('[ERRO] Valor inválido ou já se encontra na lista!')
}
*/
function adicionar() {
    if (numero.length == 0 || valores.indexOf(Number(numero)) == -1 || numero >= 1 || numero <= 100) {
        window.alert('[ERRO] Valor inválido ou já se encontra na lista!')
    }
}


