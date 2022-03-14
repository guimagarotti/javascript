let num = [8, 1, 7, 4, 2, 9]
num.sort()
// console.log(num)
/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])

for (var c=0; c<num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
*/

for(var c in num) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}

