var num = [5, 8, 2, 9, 3]
num.push(4)
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O segundo valor do vetor é ${num[1]}`)
var pos = num.indexOf(15)
if (pos == -1) {
    console.log('[ERRO] Valor não encontrado!')
} else {
    console.log(`O valor 3 está na posição ${pos}`)
}

