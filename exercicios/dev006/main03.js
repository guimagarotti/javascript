class Person {
    constructor(firstName, lastName, idade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idade = idade
    }

    hobbie() {
        console.log(`${this.firstName} joga Rainbow Six Siege!`)
    }
}

const pessoa = new Person("Guilherme", "Magarotti", 18)

console.log(pessoa)
pessoa.hobbie()
