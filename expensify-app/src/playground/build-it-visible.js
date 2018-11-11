class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
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

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
