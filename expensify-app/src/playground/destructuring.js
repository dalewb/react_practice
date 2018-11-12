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

const book = {
  title: "Ready Player One",
  author: "Ernest Cline",
  publisher: {
    name: "Random House"
  }
}

const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName);
