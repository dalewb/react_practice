"use strict";

var add = function add(a, b) {
  return a + b;
};

console.log(add(2, 3));

var user = {
  name: "John",
  cities: ["New Orleans", "New York"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

console.log(user.printPlacesLived());

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 47,
  multiply: function multiply() {
    return this.numbers.map(function (number) {
      return number * multiplier.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
