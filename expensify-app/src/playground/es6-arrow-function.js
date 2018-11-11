const add = function (a,b) {
  return a + b
}

console.log(add(2,3));

const user = {
  name: "John",
  cities: ["New Orleans", "New York"],
  printPlacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city)
  }
}

console.log(user.printPlacesLived())

const multiplier = {
  numbers: [1,2,3],
  multiplyBy: 47,
  multiply() {
    return this.numbers.map(number => number * multiplier.multiplyBy)
  }
}

console.log(multiplier.multiply());
