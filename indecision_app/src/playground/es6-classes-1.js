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
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription()

    if (this.hasMajor()) {
      description += `  Their major is ${this.major}.`
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()
    if (this.homeLocation) {
      greeting += `  I am from ${this.homeLocation}.`
    }
    return greeting
  }
}

const me = new Traveler("Billy Dale", 31, "Huntington, NY")
console.log(me.getGreeting());

const student = new Traveler()
console.log(student.getGreeting());
