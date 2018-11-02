"use strict";

console.log("app.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

function mapOptions(options) {
  return options.map(function (option) {
    return React.createElement(
      "li",
      null,
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

var user = {
  name: "Billy",
  age: 31,
  location: "New York"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
