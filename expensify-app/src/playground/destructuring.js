//
// Object Destructuring
//

// const person = {
//   name: "Billy",
//   age: 31,
//   location: {
//     city: "New York",
//     temp: 38,
//   },
// }
//
// const { name = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}`);
//
// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It is ${temperature} degrees in ${city}`);
// }

// const book = {
//   title: "Ready Player One",
//   author: "Ernest Cline",
//   publisher: {
//     name: "Random House"
//   }
// }
//
// const {name: publisherName = 'Self-Published'} = book.publisher
//
// console.log(publisherName);



//
// Array Destructuring
//

// const address = ['123 4th ave', 'New York', 'NY', '10010']
// const [, , state] = address;
// console.log(`You are in ${state}.`)

const item = ['Coffee (iced)', '$3.00', '$3.50', '$4.00']
const [itemName, ,medPrice] = item;

console.log(`A medium ${itemName} costs ${medPrice}`)
