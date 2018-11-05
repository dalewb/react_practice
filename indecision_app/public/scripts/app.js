"use strict";

console.log("app.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
  choice: ''
};

var getOptions = function getOptions(options) {
  if (options && options.length > 0) {
    return options.map(function (option, index) {
      return React.createElement(
        "li",
        { key: index },
        option
      );
    });
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

var onMakeDecision = function onMakeDecision() {
  var index = Math.floor(Math.random() * app.options.length);
  var choice = app.options[index];
  alert(choice);
};

var removeAll = function removeAll() {
  if (app.options.length > 0) {
    app.options = [];
  }
  render();
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
    app.options.length > 0 ? React.createElement(
      "p",
      null,
      "Here are your options"
    ) : React.createElement(
      "p",
      null,
      "You have no options"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      getOptions(app.options)
    ),
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
