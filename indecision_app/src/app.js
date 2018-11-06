class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision"
    const subtitle = "Put your life in the hands of a computer"
    const options = ['thing one', 'thing two', 'thing four']

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick')
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {

  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }

  handleRemoveAll() {
    console.log(this.props.options);
    // alert('removeAll')
  }

  renderOptions() {
    return this.props.options.map(option => {
      return <Option optionText={option} key={option}/>
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Romove All</button>
        <ol>
          {this.props.options ? this.renderOptions() : null}
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>{this.props.optionText}</li>
    )
  }
}

class AddOption extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (option) {
      alert(option)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
