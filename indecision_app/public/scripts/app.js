'use strict';

// const square = function (x) {
//   return x * x
// }
//
// // const squareArrow = (x) => {
// //   return x * x
// // }
//
// const squareArrow = (x) => x * x
//
// console.log(squareArrow(100))


var fullName = 'Julia Roberts';

// let getFirstName = (name) => {
//   return name.split(' ')[0]
// }

var getFirstName = function getFirstName(name) {
  return name.split(' ')[0];
};

console.log(getFirstName(fullName));
