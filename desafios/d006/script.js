function converter() {
    var c = Number(window.prompt('Digite uma temperatura em °C (Celsius)'))
    var f = (180*c + 3200) / 100
    var k = c + 273
    var res = document.getElementById('res')

    res.innerHTML = `<h2>A temperatura de ${c}°C, corresponde a...</h2><p>${k}°K (Kelvin)</p> <p>${f}°F (Fahrenheit)</p>`
}