function calcular() {
    let item = window.prompt('Qual produto você está comprando?')
    let preço = window.prompt(`Qual é o preço de ${item}?`).replace(",", ".")
    let desc = preço * 0.1
    let npreço = preço - desc
    let res = window.document.getElementById('res')
    
    res.innerHTML = `
    <h2>Calculando desconto de 10% para ${item}:</h2> 
    <p>O preço original era R$ ${preço}.</p> 
    <p>Você acaba de ganhar R$ ${desc} de desconto (-10%).</p> 
    <p>No fim, você vai pagar R$ ${npreço} no produto ${item}.</p>
    `
}