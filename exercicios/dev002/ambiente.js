const pessoa = {
nome: 'Guilherme', 
sobrenome: 'Magarotti', 
idade: 18, 
hobbies: ['Jogar Futebol', 'Estudar', 'Ler'],
dog: {
    idade: 6,
    nome: 'Cookie',
},
}

// const firstname = pessoa.nome
// const lastname = pessoa.sobrenome
// const age = pessoa.idade
// const hobbies = pessoa.hobbies

const {nome, sobrenome, idade, hobbies, dog: { nome: dogNome, idade: dogIdade }, } = pessoa
const read = pessoa.hobbies[2]

console.log(nome)
console.log(sobrenome)
console.log(idade)
console.log(hobbies)

console.log(dogNome, dogIdade)