function soma(a, b = 10) {
    return a + b
}

const valorSoma = soma(3)
console.log(valorSoma)

const soma = (a, b) => {
    console.log(a, b)
    return a + b
}

const valorSoma = soma(3, 6)
console.log(valorSoma)