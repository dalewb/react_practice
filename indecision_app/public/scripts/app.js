"use strict";

console.log("app.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
