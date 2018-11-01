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
  " ",
  React.createElement(
    "p",
    null,
    "this is some info"
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
