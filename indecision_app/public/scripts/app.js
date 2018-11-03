"use strict";

console.log("app.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

var mapOptions = function mapOptions(options) {
  return options.map(function (option, index) {
    return React.createElement(
      "li",
      { key: index },
      option
    );
  });
};

var getOptions = function getOptions(options) {
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
      "You have no options"
    );
  }
};

var handleSubmit = function handleSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var removeAll = function removeAll() {
  if (app.options.length > 0) {
    app.options = [];
    render();
  }
};

var appRoot = document.getElementById('app');

var render = function render() {
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
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
    ),
    getOptions(app.options),
    React.createElement(
      "form",
      { onSubmit: handleSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
