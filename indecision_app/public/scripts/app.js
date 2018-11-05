"use strict";

console.log("appp is running");

var state = {
  show: false,
  details: ["these are some details we can now see!"]
};

var onToggleDetails = function onToggleDetails() {
  state.show = !state.show;
  render();
};

var renderButton = function renderButton() {
  if (!state.show) {
    return React.createElement(
      "button",
      { onClick: onToggleDetails },
      "Show Details"
    );
  } else {
    return React.createElement(
      "button",
      { onClick: onToggleDetails },
      "Hide Details"
    );
  }
};

var renderDetails = function renderDetails() {
  if (state.details.length > 0) {
    return state.details.map(function (detail) {
      return React.createElement(
        "li",
        { key: detail },
        detail
      );
    });
  } else {
    return React.createElement(
      "p",
      null,
      "There are no details to show"
    );
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
      "Visibility Toggle"
    ),
    renderButton(),
    React.createElement(
      "ol",
      null,
      state.show ? renderDetails() : null
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
