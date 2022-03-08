function operar() {
    var n = Number(window.prompt('Digite um número inteiro qualquer'))
    var proxn = n + 1
    var antesn = n - 1
    window.alert(`Antes de ${n}, temos o número ${antesn}.
    Depois de ${n}, temos o número ${proxn}.`)    
}