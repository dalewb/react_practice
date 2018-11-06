class Visibility extends React.Component {
  constructor() {
    super()
    this.state = {
      details: "Some details to show",
      show: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>{this.state.show ? "Hide details" : "Show Details"}</button>
        {this.state.show && <p>{this.state.details}</p>}
      </div>
    )
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))


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
