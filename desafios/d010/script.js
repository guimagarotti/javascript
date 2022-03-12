function calcular() {
    var a = Number(window.prompt('Qual é o valor de A?'));
    var b = Number(window.prompt('Qual é o valor de B?'));
    var c = Number(window.prompt('Qual é o valor de C?'));
    var delta = b ** 2 - 4 * a * c;
    var equacao = `${b}² - 4 . ${a} . ${c}`;
    var res = document.getElementById('res');

    res.innerHTML = `
    <h2>Resolução Bháskara</h2>
    <p>A equação é: <strong>${a}x² + ${b}x + ${c} = 0</strong></p>
    <p>O cálculo realizado será: <strong>Δ = ${equacao}</strong></p>
    <p>O valor calculado foi: <mark>Δ = ${delta}</mark></p>
    `
}