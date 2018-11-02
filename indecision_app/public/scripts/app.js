"use strict";

console.log("app.js is running");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Title"
  ),
  React.createElement(
    "p",
    null,
    "this is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "One"
    ),
    React.createElement(
      "li",
      null,
      "Two"
    )
  )
);

var user = {
  name: "Billy",
  age: 31,
  location: "New Orleans"
};

var userName = "Billy";
var userAge = 31;
var userLocation = "New Orleans";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
