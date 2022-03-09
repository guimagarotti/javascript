function contar() {
    var inicio = document.getElementById('num1')
    var fim = document.getElementById('num2')
    var salto = document.getElementById('pulo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || salto.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Dados faltando!')
    } else {
        res.innerHTML = 'Contando:'
        var n1 = Number(inicio.value)
        var n2 = Number(fim.value)
        var sal = Number(salto.value)
        
        if (sal <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            sal = 1
        }
        if (n1 < n2) {
            // Crescente
            for (var c = n1; c <= n2; c += sal) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Decrescente
            for (var c = n1; c >= n2; c -= sal) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`     
    }
}