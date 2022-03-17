let amigo = {nome:'Maria',
sexo: 'F',
peso: 88.4,
engordar(p){
    console.log(`${amigo.nome} engordou`)
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} agora pesa ${amigo.peso}Kg`)