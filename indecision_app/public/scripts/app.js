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

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "William Dale"
  ),
  React.createElement(
    "p",
    null,
    "Age: 31"
  ),
  React.createElement(
    "p",
    null,
    "Location: New York"
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
