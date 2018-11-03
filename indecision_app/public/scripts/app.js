"use strict";

console.log("app.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

function mapOptions(options) {
  return options.map(function (option, index) {
    return React.createElement(
      "li",
      { key: index },
      option
    );
  });
}

function getOptions(options) {
  if (options && options.length > 0) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Here are your options:"
      ),
      React.createElement(
        "ol",
        null,
        mapOptions(options)
      )
    );
  } else {
    return React.createElement(
      "p",
      null,
      "No options"
    );
  }
}

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  getOptions(app.options)
);

var count = {
  value: 0
};

var increaseCounter = function increaseCounter(e) {
  return count.value++;
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count.value
  ),
  React.createElement(
    "button",
    { className: "button", onClick: increaseCounter },
    "+1"
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
