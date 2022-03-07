function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {
        img.innerHTML = '<img src="fotodia.jpg">'
        document.body.style.background = '#635720'
    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = '<img src="fototarde.jpg">'
        document.body.style.background = '#ce8877'
    } else {
        img.innerHTML = '<img src="fotonoite.jpg">'
        document.body.style.background = '#130f29'
    }
} 