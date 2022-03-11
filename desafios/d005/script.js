function converter() {
    var num = Number(window.prompt('Digite uma distância em Metros (M)'))
    var res = window.document.getElementById('res')
    var km = num/1000
    var hm = num/100
    var dam = num/10
    var dm = num*10
    var cm = num*100
    var mm = num*1000
    res.innerHTML = `<h2>A distância de ${num} metros, corresponde a...</h2> <p>${km} quilômetros (Km)</p> <p>${hm} hectômetros (Hm)</p> <p>${dam} decâmetros (Dam)</p> <p>${dm} decímetros (dm)</p> <p>${cm} centímetros (cm)</p> <p>${mm} milímetros (mm)</p>`
}