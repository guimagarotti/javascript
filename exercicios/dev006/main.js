class Person {
    constructor(primeiroNome, ultimoNome, idade) {
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.idade = idade;
    }

    NomeCompleto() {
        console.log(`${this.primeiroNome} ${this.ultimoNome}`)
    }

    static speak() {
        console.log("Receba!")
    }
}

const pessoa = new Person('Guilherme', 'Magarotti', 18)
console.log(pessoa)

pessoa.NomeCompleto()
Person.speak()
