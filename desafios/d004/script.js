function analisar() {
    var item = window.prompt('Que produto você está comprando?')
    var preço = Number(window.prompt(`Quanto custa o/a ${item} que está comprando?`))
    var pg = Number(window.prompt(`Qual o valor pago pelo seu/ sua ${item}?`))
    var troco = pg - preço
    window.alert(` Você comprou um/uma ${item} de R$${preço}.\n Pagou R$${pg} em dinheiro e vai receber R$${troco} de troco.\n Volte Sempre!`)
}