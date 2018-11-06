"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visibility = function (_React$Component) {
  _inherits(Visibility, _React$Component);

  function Visibility() {
    _classCallCheck(this, Visibility);

    var _this = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this));

    _this.state = {
      details: "Some details to show",
      show: false
    };
    _this.handleToggle = _this.handleToggle.bind(_this);
    return _this;
  }

  _createClass(Visibility, [{
    key: "handleToggle",
    value: function handleToggle() {
      this.setState(function (prevState) {
        return {
          show: !prevState.show
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Visibility Toggle"
        ),
        React.createElement(
          "button",
          { onClick: this.handleToggle },
          this.state.show ? "Hide details" : "Show Details"
        ),
        this.state.show && React.createElement(
          "p",
          null,
          this.state.details
        )
      );
    }
  }]);

  return Visibility;
}(React.Component);

ReactDOM.render(React.createElement(Visibility, null), document.getElementById('app'));

// let state = {
//   show: false,
//   details: ["these are some details we can now see!"]
// }
//
// const onToggleDetails = () => {
//   state.show = !state.show
//   render()
// }
//
// const renderButton = () => {
//   if (!state.show) {
//     return <button onClick={onToggleDetails}>Show Details</button>
//   } else {
//     return <button onClick={onToggleDetails}>Hide Details</button>
//   }
// }
//
// const renderDetails = () => {
//   if (state.details.length > 0) {
//     return state.details.map(detail => {
//       return <li key={detail}>{detail}</li>
//     })
//   } else {
//     return <p>There are no details to show</p>
//   }
// }
//
// let appRoot = document.getElementById('app');
//
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       {renderButton()}
//       <ol>
//         {state.show ? renderDetails() : null}
//       </ol>
//     </div>
//   )
//   ReactDOM.render(template, appRoot)
// }
//
// render()
