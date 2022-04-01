let cont = 0

while (cont < 10) {
    cont++
    console.log(cont);
}

const pessoa= {
    nome: 'Guilherme',
    idade: 18,
}

for (property in pessoa) {
    console.log(pessoa[property])
}