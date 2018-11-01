"use strict";

console.log("app.js is running");

var template = React.createElement(
  "p",
  null,
  "This is JSX"
);
var appRoot = document.getElemetById('app');

ReactDOM.render(template, appRoot);
