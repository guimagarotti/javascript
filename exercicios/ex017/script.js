function tabuada() {
    var nI = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (nI.value.length == 0) {
        window.alert('[ERRO] Digite um número!')
    } else {
        var nF = Number(nI.value)
        var c = 1
        tab.innerHTML = ''
        
        /*
        while (c <= 10) {
            var item = document.createElement('option')            
            item.text = ` ${nF} x ${c} = ${nF*c}`
            item.value = `tab${nF}`
            tab.appendChild(item)
            c++
        }
        */

        for (var c = 1; c <= 10; c++) {
            var res = document.createElement('option')
            res.text = `${nF} x ${c} = ${nF*c}`
            res.value = `tab${nF}`
            tab.appendChild(res)
        }
    }
}