class Person {
  constructor(name = "Anon", age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting() {
    return `Hello, my name is ${this.name}!`
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

const me = new Person("Billy Dale", 31)
console.log(me.getDescription());

const other = new Person()
console.log(other.getDescription());
