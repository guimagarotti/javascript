function reajustar() {
    var res = document.getElementById('res')
    
    var name = prompt('Qual é o nome do funcionário?')
    var salary = Number(prompt(`Qual o salário de ${name}?`))
    var pcentual = Number(prompt(`O salário de ${name} vai ser reajustado em qual porcentagem?`))
    var reajuste = salary * (pcentual / 100)
    var newsalary = salary + reajuste
    
    res.innerHTML = `
    <h2>${name} recebeu um aumento salarial!</h2>
    <p>O salário atual era R$ ${salary}.</p>
    <p>Com um aumento de ${pcentual}%, o salário vai aumentar R$ ${reajuste} no próximo mês.</p>
    <p>E a partir daí, ${name} vai passar a ganhar R$ ${newsalary}.</p>
    `
}