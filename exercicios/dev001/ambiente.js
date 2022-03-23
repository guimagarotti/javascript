const numbers = [1, 2, 3, 4, 5]

const numbersX2 = numbers.map(function (number) {
    return number * 2
})

const idades = [8, 13, 27, 30, 22, 40]

/* const idadesPar = idades.filter(function(idade) {
    return idade % 2 == 0
})
*/

const somaIdade = idades.reduce(function (idade, soma) {
    return soma + idade
}, 100)

console.log(somaIdade)


