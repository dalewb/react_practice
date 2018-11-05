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

class Student extends Person {
  constructor(name = "Anon", age = 0, major = "Undecided") {
    this.name = name
    this.age = age
    this.major = major
  }

  getDescription() {
    return `${this.name} is ${this.age} years old. I am studying ${this.major}`
  }
}

const me = new Person("Billy Dale", 31)
console.log(me.getDescription());

const student = new Student("John Smith", 19)
console.log(student.getDescription());
