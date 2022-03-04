var momento = new Date()
var hora = momento.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora < 12 && hora > 5) {
    console.log('Bom dia!')
} else if (hora <= 18 && hora > 5) {
    console.log('Boa tarde!')
} else if (hora >= 0 && hora <= 5) {
    console.log('Boa madrugada!')
} else {
    console.log('Boa noite!')
}
    
