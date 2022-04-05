class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    speak() {
        console.log(`${this.nome} fez um barulho!`)
    }
}

class Dog extends Animal {
    constructor(nome) {
        super(nome)        
    }

    speak() {
        console.log(`${this.nome} latiu!`)
    }
}

const animal = new Animal('Cookie')
const dog = new Dog('Bob')

animal.speak()
dog.speak()
